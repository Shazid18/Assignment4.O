import React from 'react';
import { FaBed, FaBath, FaUtensils, FaUmbrellaBeach, FaHome, FaTree } from 'react-icons/fa';

// Define the RoomProps interface
interface RoomProps {
  bedroomCount: number;
  bathroomCount: number;
}

const RoomDetails: React.FC<RoomProps> = ({ bedroomCount, bathroomCount }) => {
  // Generate bedroom details dynamically based on the bedroomCount
  const bedrooms = Array.from({ length: bedroomCount }, (_, index) => ({
    id: index + 1,
    bedType: index === 0 ? '1 Queen Bed' : '1 Twin Bed', // You can adjust this logic as needed
  }));

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* First Row - Subtitle */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Rooms & beds</h2>
      </div>

      {/* Second Row - Bedrooms */}
      <div className="space-y-4">
        <p className="font-bold text-gray-900">
          {bedroomCount} {bedroomCount > 1 ? 'bedrooms' : 'bedroom'}{' '}
          <span className="font-normal">(sleeps {bedroomCount * 2})</span> {/* Adjust sleep count logic as necessary */}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bedrooms.map((bedroom) => (
            <div key={bedroom.id} className="flex items-start space-x-3">
              <FaBed className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Bedroom {bedroom.id}</p>
                <p className="text-gray-600">{bedroom.bedType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Row - Bathroom */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900">
          {bathroomCount} {bathroomCount > 1 ? 'bathrooms' : 'bathroom'}
        </h3>
        <div className="flex items-center space-x-3">
          <FaBath className="w-5 h-5 text-gray-600" />
          <p className="text-gray-600">Full Bathroom</p>
        </div>
      </div>

      {/* Fourth Row - Spaces Heading */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Spaces</h2>
      </div>

      {/* Fifth Row - Spaces List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <FaUmbrellaBeach className="w-5 h-5 text-gray-600" />
          <p className="text-gray-600">Deck or patio</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <FaUtensils className="w-5 h-5 text-gray-600" />
          <p className="text-gray-600">Kitchen</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <FaHome className="w-5 h-5 text-gray-600" />
          <p className="text-gray-600">Balcony</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <FaTree className="w-5 h-5 text-gray-600" />
          <p className="text-gray-600">Garden</p>
        </div>
      </div>

      {/* See all details link */}
      <div>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          See all rooms and beds details
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
