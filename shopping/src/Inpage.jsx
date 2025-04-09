import React, { useState } from 'react';
import { imagesinner } from './Hi'; // Make sure the imported data is correct.

const Inpage = () => {
  const [tick, setTick] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleCheckboxChange = (e) => {
    setTick(e.target.checked);
    if (e.target.checked) {
      setPhotos(imagesinner.map((raj) => raj.image));
    } else {
      setPhotos([]);
    }
  };

  return (
    <div>
      <input type="checkbox" checked={tick} onChange={handleCheckboxChange}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              style={{ width: '100px', height: '100px' }}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Inpage;
