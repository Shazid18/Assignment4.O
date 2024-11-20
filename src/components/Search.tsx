import React from 'react';
import { FaSearch, FaWater, FaParking, FaHome } from 'react-icons/fa';
import { GiWashingMachine } from 'react-icons/gi';
import { MdLocalLaundryService } from 'react-icons/md';

// Define the SearchProps interface with an amenities array
interface SearchProps {
  amenities: string[];
  name: string
}

const PropertyDetails: React.FC<SearchProps> = ({ amenities, name }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-8">
      {/* First Row - Property Manager */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Property manager</h2>
        <div className="flex items-center space-x-4">
          <img 
            src="/evelve_logo.png" 
            alt="Evolve Logo" 
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="text-lg text-gray-900">{ name }</p>
        </div>
      </div>

      {/* Second Row - Languages */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Languages</h2>
        <p className="text-gray-600">English, French, German, Spanish</p>
      </div>

      {/* Third Row - Amenities */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">Amenities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-2/3">
            {amenities.map((amenity, index) => {
              let icon;
              switch (amenity.toLowerCase()) {
                case 'kitchen':
                  icon = <GiWashingMachine className="w-5 h-5 text-gray-600" />;
                  break;
                case 'washer':
                  icon = <GiWashingMachine className="w-5 h-5 text-gray-600" />;
                  break;
                case 'dryer':
                  icon = <MdLocalLaundryService className="w-5 h-5 text-gray-600" />;
                  break;
                case 'outdoor space':
                  icon = <FaHome className="w-5 h-5 text-gray-600" />;
                  break;
                case 'parking available':
                  icon = <FaParking className="w-5 h-5 text-gray-600" />;
                  break;
                case 'ocean view':
                  icon = <FaWater className="w-5 h-5 text-gray-600" />;
                  break;
                default:
                  icon = null;
                  break;
              }

              return (
                <div key={index} className="flex items-center space-x-3">
                  {icon}
                  <span className="text-gray-600">{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          See all 34 amenities
        </button>
      </div>

      {/* Fourth Row - Question Section */}
      <div className="bg-blue-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Have a question?</h2>
          <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">Beta</span>
        </div>
        
        <p className="text-gray-600">
          Get instant answers with AI powered search of property information and reviews.
        </p>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Ask a question"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
            <FaSearch className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
