// components/Location.tsx
import React from 'react';

interface LocationProps {
  address: string;
}

const Location: React.FC<LocationProps> = ({ address }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Location</h2>
      <p className="text-gray-600">{address}</p>
    </div>
  );
};

export default Location;
