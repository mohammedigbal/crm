import React, { useState, useEffect } from "react";
import axios from "axios";

interface Location {
  id: number;
  name: string;
}

interface LocationDropdownProps {
  onLocationChange: (locationId: number) => void;
}

const LocationList = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  useEffect(() => {
    // Make an API request to your Node.js server
    axios
      .get<Location[]>("http://localhost:4000/getLocations") // Adjust the endpoint as needed
      .then((response) => {
        setLocations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);

  const onLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(Number(event.target.value));
    setSelectedLocation(Number(event.target.value));
  };

  return (
    <div>
      <select
        className="form-control"
        id="location"
        value={selectedLocation ?? ""}
        onChange={onLocationChange}
      >
        <option value="" disabled>
          Select a location
        </option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.location_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationList;
