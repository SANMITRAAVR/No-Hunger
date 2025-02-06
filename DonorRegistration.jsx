import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Component to recenter map when location changes
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
}

const LocationMarker = ({ setCoordinates, setLocation }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      if (
        lat >= 10.7 && 
        lat <= 11.5 && 
        lng >= 76.5 && 
        lng <= 77.5    
      ) {
        setCoordinates({ lat, lng });
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
          .then((response) => response.json())
          .then((data) => {
            if (data.address.state === "Tamil Nadu") {
              setLocation(data.display_name);
            } else {
              setLocation("Please select a location within Coimbatore district.");
            }
          })
          .catch(() => setLocation("Error fetching location name."));
      } else {
        setLocation("Please select a location within Coimbatore district.");
      }
    },
  });
  return null;
};

const DonorRegistration = () => {
  const [formData, setFormData] = useState({
    donorType: '',
    name: '',
    contact: '',
    email: '',
    aadharNumber: '',
    organizationName: '',
    individualAddress: '',
    city: '',
    pincode: '',
    orgResAddress: '',
    restaurantName: '',
    starRating: '',
    fssaiNumber: '',
  });

  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 11.0168, lng: 76.9558 });
  const [isLocating, setIsLocating] = useState(false);

  const detectCurrentLocation = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (
            latitude >= 10.7 && latitude <= 11.5 &&
            longitude >= 76.5 && longitude <= 77.5
          ) {
            setCoordinates({ lat: latitude, lng: longitude });
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
              .then((response) => response.json())
              .then((data) => {
                setLocation(data.display_name);
              })
              .catch((error) => {
                console.log("Error fetching location:", error);
                setLocation("Error fetching location details.");
              });
          } else {
            setLocation("Current location is outside Coimbatore district");
          }
          setIsLocating(false);
        },
        (error) => {
          console.log("Error getting location:", error);
          setLocation("Error detecting location. Please try again.");
          setIsLocating(false);
        }
      );
    } else {
      setLocation("Geolocation is not supported by your browser");
      setIsLocating(false);
    }
  };  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { ...formData, location, coordinates });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center p-8">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-2xl font-bold text-orange-600">Donor Registration</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block font-semibold">Donor Type</label>
            <select 
              name="donorType" 
              className="w-full p-2 border rounded"
              value={formData.donorType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Organization">Organization</option>
              <option value="Individual">Individual</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Contact Number</label>
            <input
              type="tel"
              name="contact"
              className="w-full p-2 border rounded"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {formData.donorType === 'Individual' && (
            <div>
              <label className="block font-semibold">Aadhar Number</label>
              <input
                type="text"
                name="aadharNumber"
                className="w-full p-2 border rounded"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {formData.donorType === 'Organization' && (
            <div>
              <label className="block font-semibold">Organization Name</label>
              <input
                type="text"
                name="organizationName"
                className="w-full p-2 border rounded"
                value={formData.organizationName}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {formData.donorType === 'Restaurant' && (
            <>
              <div>
                <label className="block font-semibold">Restaurant Name</label>
                <input
                  type="text"
                  name="restaurantName"
                  className="w-full p-2 border rounded"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Star Rating</label>
                <select
                  name="starRating"
                  className="w-full p-2 border rounded"
                  value={formData.starRating}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="5-Star">5-Star</option>
                  <option value="4-Star">4-Star</option>
                  <option value="3-Star">3-Star</option>
                  <option value="2-Star">2-Star</option>
                  <option value="1-Star">1-Star</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold">FSSAI License Number</label>
                <input
                  type="text"
                  name="fssaiNumber"
                  className="w-full p-2 border rounded"
                  value={formData.fssaiNumber}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div>
            <label className="block font-semibold">City</label>
            <input
              type="text"
              name="city"
              className="w-full p-2 border rounded"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Pincode</label>
            <input
              type="text"
              name="pincode"
              className="w-full p-2 border rounded"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-4">
            <label className="block font-semibold">Select Location on Map</label>
            
            <button
              type="button"
              onClick={detectCurrentLocation}
              disabled={isLocating}
              className="w-full py-2 bg-teal-600 text-white font-bold rounded hover:bg-teal-700 disabled:bg-teal-300"
            >
              {isLocating ? "Detecting Location..." : "Detect Current Location"}
            </button>

            <div className="h-64 w-full rounded-lg overflow-hidden">
              <MapContainer
                center={[coordinates.lat, coordinates.lng]}
                zoom={11}
                style={{ height: "100%", width: "100%" }}
                maxBounds={[
                  [10.7, 76.5],
                  [11.5, 77.5]
                ]}
                maxBoundsViscosity={1.0}
              >
                <TileLayer
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[coordinates.lat, coordinates.lng]} />
                <LocationMarker setCoordinates={setCoordinates} setLocation={setLocation} />
                <ChangeMapView coords={[coordinates.lat, coordinates.lng]} />
              </MapContainer>
            </div>

            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Selected location will appear here"
              value={location}
              readOnly
            />

            <div className="text-sm text-gray-600">
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>
            </div>
          </div>

          <button type="submit" className="w-full py-2 bg-orange-600 text-white font-bold rounded hover:bg-orange-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistration;