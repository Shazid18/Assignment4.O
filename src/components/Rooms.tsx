// components/Rooms.tsx
import React from 'react';
import { Room } from '@/types';

interface RoomsProps {
  rooms: Room[];
}

const Rooms: React.FC<RoomsProps> = ({ rooms }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div key={room.roomSlug} className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-48 relative">
              <img
                src={room.roomImage}
                alt={room.roomTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{room.roomTitle}</h3>
              <p className="text-gray-600">
                <span className="font-medium">Bedrooms:</span> {room.bedroomCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
