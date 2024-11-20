// components/Amenities.tsx
import React from 'react';

interface AmenitiesProps {
  amenities: string[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {amenities.map((amenity, index) => (
          <div key={index} className="bg-gray-50 p-2 rounded">
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
