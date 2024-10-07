import React from 'react';
import { useState, useEffect } from 'react';


const DustbinCard = () => {



    const [capacity, setCapacity] = useState(0);  
    const [statusColor, setStatusColor] = useState('green'); 
    const [statusText, setStatusText] = useState('Not Full');
    const [dustbinId, setDustbinId] = useState('dustbin-1'); 
    useEffect(() => {
     
      // setCapacity(80); 
      updateDustbinStatus(80); 
    }, []);
  
    const updateDustbinStatus = (newCapacity: number) => {
      setCapacity(newCapacity);
  
      if (newCapacity >= 75) {
        setStatusColor('red');
        setStatusText('Full');
      } else if (newCapacity >= 50) {
        setStatusColor('orange');
        setStatusText('Half Full');
      } else {
        setStatusColor('green');
        setStatusText('Not Full');
      }
    };
  
    return (
      <>
      
      <div id="dustbin-1" className="dustbin-card">
       
        <div className="card-header">
          <h3>Smart {dustbinId} </h3>
        </div>
        <div className="card-body">
          <div className="visual-indicator">
            <div
              className="visual-level"
              style={{ height: `${capacity}%` }}
            ></div>
          </div>
          <div className="dustbin-status">
            <span className="status-indicator" style={{ backgroundColor: statusColor }}></span>
            <span className="status-text">{statusText}</span>
          </div>
          <p>Location: Central Park</p>
          <p className="capacity">Capacity: {capacity}% Full</p>
        </div>
      </div>

      
      
      </>
      
      
    );
}


export default DustbinCard