import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Haversine Formula to Calculate Distance (in KM)
const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of Earth in km
  const toRad = (angle) => (angle * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Icons
const donorIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});
const volunteerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  iconSize: [30, 30],
});
const receiverIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  iconSize: [30, 30],
});

const VolunteerAssignment = () => {
  const [donor, setDonor] = useState({ lat: 11.0168, lng: 76.9558 }); // Donor in Coimbatore
  const [receiver, setReceiver] = useState({ lat: 11.0300, lng: 76.9800 }); // Receiver location
  const [volunteers, setVolunteers] = useState([
    { id: 1, lat: 11.0200, lng: 76.9600, distance: null, status: null }, // Volunteer 1
    { id: 2, lat: 11.0250, lng: 76.9700, distance: null, status: null }, // Volunteer 2
  ]);

  const [nearestVolunteer, setNearestVolunteer] = useState(null);
  const [orderStatus, setOrderStatus] = useState("");
  const [route, setRoute] = useState([]); // Route between points

  // Find the nearest volunteer
  const findNearestVolunteer = () => {
    let minDistance = Infinity;
    let closestVolunteer = null;

    const updatedVolunteers = volunteers.map((volunteer) => {
      const distance = haversine(donor.lat, donor.lng, volunteer.lat, volunteer.lng);
      if (distance < minDistance) {
        minDistance = distance;
        closestVolunteer = { ...volunteer, distance };
      }
      return { ...volunteer, distance };
    });

    setVolunteers(updatedVolunteers);
    setNearestVolunteer(closestVolunteer);
    setOrderStatus("Searching for a volunteer...");
  };

  // Handle volunteer response (Accept/Reject)
  const handleResponse = (volunteerId, response) => {
    const updatedVolunteers = volunteers.map((vol) =>
      vol.id === volunteerId ? { ...vol, status: response } : vol
    );
    setVolunteers(updatedVolunteers);

    if (response === "accepted") {
      const selectedVolunteer = updatedVolunteers.find((v) => v.id === volunteerId);
      setOrderStatus(`Order accepted by Volunteer ${volunteerId}! ✅`);
      setRoute([
        [selectedVolunteer.lat, selectedVolunteer.lng], // Volunteer → Donor
        [donor.lat, donor.lng], // Donor → Receiver
        [receiver.lat, receiver.lng],
      ]);
    } else {
      // Find the next volunteer who has not rejected yet
      const remainingVolunteers = updatedVolunteers.filter((v) => v.status === null);
      if (remainingVolunteers.length > 0) {
        setNearestVolunteer(remainingVolunteers[0]);
      } else {
        setOrderStatus("No volunteers accepted the order.");
      }
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#ea580c" }}>Food Rescue System</h1>

      {/* Find Nearest Volunteer */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button
          onClick={findNearestVolunteer}
          style={{ backgroundColor: "#ea580c", color: "#fff", padding: "10px 20px", border: "none" }}
        >
          Find Nearest Volunteer 🚴‍♂️
        </button>
      </div>

      {/* Order Status */}
      {orderStatus && <h2 style={{ textAlign: "center", color: "green" }}>{orderStatus}</h2>}

      {/* Volunteer Selection */}
      {nearestVolunteer && (
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <h3>Volunteer {nearestVolunteer.id} ({nearestVolunteer.distance?.toFixed(2)} km away)</h3>
          <button
            onClick={() => handleResponse(nearestVolunteer.id, "accepted")}
            style={{ backgroundColor: "green", color: "#fff", padding: "10px 15px", margin: "5px" }}
          >
            ✅ Accept
          </button>
          <button
            onClick={() => handleResponse(nearestVolunteer.id, "rejected")}
            style={{ backgroundColor: "red", color: "#fff", padding: "10px 15px", margin: "5px" }}
          >
            ❌ Reject
          </button>
        </div>
      )}

      {/* Map */}
      <MapContainer center={[11.0168, 76.9558]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Donor Location */}
        <Marker position={[donor.lat, donor.lng]} icon={donorIcon}>
          <Popup>Donor Location</Popup>
        </Marker>

        {/* Receiver Location */}
        <Marker position={[receiver.lat, receiver.lng]} icon={receiverIcon}>
          <Popup>Receiver Location</Popup>
        </Marker>

        {/* Volunteer Locations */}
        {volunteers.map((vol, index) => (
          <Marker key={index} position={[vol.lat, vol.lng]} icon={volunteerIcon}>
            <Popup>Volunteer {vol.id} ({vol.distance ? vol.distance.toFixed(2) : "?"} km away)</Popup>
          </Marker>
        ))}

        {/* Route (if available) */}
        {route.length > 1 && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
};

export default VolunteerAssignment;
