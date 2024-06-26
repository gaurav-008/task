import React, { useState } from 'react';
import './Tab.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 0 ? 'active' : ''}`} 
          onClick={() => handleTabClick(0)}
        >
          Featured
        </div>
        <div 
          className={`tab ${activeTab === 1 ? 'active' : ''}`} 
          onClick={() => handleTabClick(1)}
        >
          New Boxes
        </div>
        <div 
          className={`tab ${activeTab === 2 ? 'active' : ''}`} 
          onClick={() => handleTabClick(2)}
        >
          Top Boxes
        </div>
      </div>
    </div>
  );
};

export default Tabs;
