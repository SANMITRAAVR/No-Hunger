import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

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
      setCoordinates({ lat, lng });
      
      axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        .then((response) => {
          setLocation(response.data.display_name);
        })
        .catch(() => setLocation("Error fetching location name."));
    },
  });
  return null;
};

function VolunteerRegistration() {
  const navigate = useNavigate();
  const [volunteerType, setVolunteerType] = useState('individual');
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 11.0168, lng: 76.9558 });
  const [isLocating, setIsLocating] = useState(false);

  const [formData, setFormData] = useState({
    volunteerType: 'individual',
    organizationName: "",
    contactPerson: "",
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    aadhaarNumber: "",
    city: "",
    location: {
      latitude: "",
      longitude: "",
    },
    aadhaarFile: null,
    agreement: false,
  });

  const detectCurrentLocation = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
          
          axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then((response) => {
              setLocation(response.data.display_name);
              setFormData(prev => ({
                ...prev,
                location: {
                  latitude: latitude,
                  longitude: longitude
                }
              }));
            });
          setIsLocating(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Error detecting location. Please try again.");
          setIsLocating(false);
        }
      );
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleTypeChange = (e) => {
    setVolunteerType(e.target.value);
    setFormData({
      ...formData,
      volunteerType: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/success");
  };

  const renderLocationSection = () => (
    <div className="space-y-4">
      <label className="block text-gray-700 font-medium">Location</label>
      
      <button
        type="button"
        onClick={detectCurrentLocation}
        disabled={isLocating}
        className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isLocating ? "Detecting Location..." : "Detect Current Location"}
      </button>

      <div className="h-64 w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[coordinates.lat, coordinates.lng]}
          zoom={11}
          style={{ height: "100%", width: "100%" }}
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
  );

  const renderOrganizationForm = () => (
    <>
      <div>
        <label className="block text-gray-700 font-medium">Organization Name</label>
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Contact Person</label>
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      {renderLocationSection()}
    </>
  );

  const renderIndividualForm = () => (
    <>
      <div>
        <label className="block text-gray-700 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Aadhaar Number</label>
        <input
          type="text"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>

      {renderLocationSection()}
    </>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Volunteer Registration
        </h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Volunteer Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="individual"
                checked={volunteerType === 'individual'}
                onChange={handleTypeChange}
                className="mr-2"
              />
              Individual
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="organization"
                checked={volunteerType === 'organization'}
                onChange={handleTypeChange}
                className="mr-2"
              />
              Organization
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {volunteerType === 'organization' ? renderOrganizationForm() : renderIndividualForm()}
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Agreement & Consent</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>✅ I certify that all the information provided is true and correct.</p>
              <p>✅ I authorize Zero Hunger to verify my details.</p>
              <p>✅ I commit to adhering to the ethical guidelines.</p>
              <p>✅ I understand that Zero Hunger is not liable for any personal injury.</p>
              <p>✅ I consent to the terms and conditions.</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
                className="h-4 w-4"
              />
              <span className="text-sm text-gray-700">I agree to the terms</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerRegistration;