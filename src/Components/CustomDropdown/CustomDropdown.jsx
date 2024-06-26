import React, { useState } from "react";
import chevronDown from "../../Assets/chevron-down.svg";
import "./CustomDropdown.css";

const CustomDropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(data[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectLanguage = (data) => {
    setSelectedLanguage(data);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.name}
          width={20}
          height={20}
          className="flag"
        />
        <div>{selectedLanguage.code}</div>
        <img
          src={chevronDown}
          alt="chevron-down"
          width={16}
          height={16}
          className={`chevron ${isOpen ? "open" : ""}`}
        />
      </button>
      <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        {data.map((language) => (
          <li
            key={language.code}
            className="menu-item"
            onClick={() => handleSelectLanguage(language)}
          >
            <img src={language.flag} alt={language.name} className="flag" />
            <div>{language.code}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CustomDropdown;
