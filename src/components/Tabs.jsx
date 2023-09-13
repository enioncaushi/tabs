import React, { useState, useEffect } from 'react';
import './Tabs.css'; 

function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const TabClick = (index) => {
      setActiveTab(index);
    };

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => TabClick(index));
    });

    return () => {
      tabs.forEach((tab, index) => {
        tab.removeEventListener('click', () => TabClick(index));
      });
    };
  }, []); 

  return (
    <div className="tabs-container">
      <div className="tabs">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {items[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
