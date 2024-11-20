// components/HotelDetailsCard.tsx
import React from 'react';

interface HotelDetailsCardProps {
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
}

const HotelDetailsCard: React.FC<HotelDetailsCardProps> = ({ guestCount, bedroomCount, bathroomCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600">
          <span className="font-medium">Guests:</span> {guestCount}
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600">
          <span className="font-medium">Bedrooms:</span> {bedroomCount}
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-600">
          <span className="font-medium">Bathrooms:</span> {bathroomCount}
        </p>
      </div>
    </div>
  );
};

export default HotelDetailsCard;
