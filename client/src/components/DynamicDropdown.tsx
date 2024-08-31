import React, { useEffect, useState } from "react";
import axios from "axios";

interface DropdownValues {
  id: number;
  name: string;
}

interface DropdownProps {
  name: string;
  label: string;
  field_value: String;
  onOptionChange: (name: string, id: number) => void;
}

const DynamicDropdown = ({
  name,
  label,
  field_value,
  onOptionChange,
}: DropdownProps) => {
  const [options, setOptions] = useState<DropdownValues[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const proxy = "http://localhost:4000";
  let url: string;
  if (name === "location") {
    url = "/getLocations";
    //url = proxy + "/getLocations";
  } else if (
    name === "leadSource" ||
    name === "orderStatus" ||
    name === "currentStatus"
  ) {
    url = "/getConfigValues?config_type=" + field_value;
    //url = proxy + "/getConfigValues?config_type=" + field_value;
  }

  useEffect(() => {
    // Make an API request to your Node.js server
    axios
      .get<DropdownValues[]>(url) // Adjust the endpoint as needed
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching " + name + " options:", error);
      });
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(Number(value));
    onOptionChange(name, Number(value)); // Call the callback to update the main page state
  };

  return (
    <div>
      <select
        className="form-control"
        id={name}
        value={selectedOption ?? ""}
        onChange={onChange}
      >
        <option value="" disabled>
          Select a {label}
        </option>
        {options.map((option) => {
          const displayValue =
            name === "location" ? option.location_name : option.config_value;
          return (
            <option key={option.id} value={option.id}>
              {displayValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DynamicDropdown;
