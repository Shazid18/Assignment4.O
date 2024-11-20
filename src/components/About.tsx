import React from "react";

// Define the AboutProps interface with only title and description
interface AboutProps {
  title: string;
  description: string;
}

const Banner: React.FC<AboutProps> = ({ title, description }) => (
  <section className="p-6 rounded-lg">
    <div className="max-w-7xl mx-auto">
      {/* Static "About this property" title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">About this property</h1>

      {/* Dynamic description */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>

      {/* Static Property Details */}
      <div className="mb-6">
        <p className="font-semibold text-gray-800">-- THE PROPERTY --</p>
        <p className="text-gray-700">
          CBJ000014 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Bicycles Provided
        </p>
        <p className="text-gray-700">
          Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin Bed
        </p>
        <p className="text-gray-700">
          HOME HIGHLIGHTS: Flat-screen TV, dining table, washer/dryer
        </p>
        <p className="text-gray-700">
          KITCHEN: Fridge, stove, coffee maker, microwave, cooking basics, toaster, dishware/flatware, trash bags/paper towels, Crockpot.
        </p>
        <p className="text-gray-700">
          GENERAL: Free WiFi, central heating, linens/towels, keyless entry, hair dryer, ceiling fans
        </p>
        <p className="text-gray-700">FAQ: No A/C, stairs required to access</p>
        <p className="text-gray-700">
          PARKING: Driveway (2 vehicles), RV parking allowed
        </p>
      </div>

      {/* Static Location Details */}
      <div className="mb-6">
        <p className="font-semibold text-gray-800">-- THE LOCATION --</p>
        <p className="text-gray-700 mb-2">
          GREAT OUTDOORS: Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles), Glacier Gardens Rainforest Adventure (10 miles), Mendenhall Glacier (10 miles), Twin Lakes (13 miles)
        </p>
        <p className="text-gray-700 mb-2">
          THINGS TO DO: Mendenhall Golf (8 miles), Dimond Park Aquatic Center (8 miles), Riverside Rotary Park (8 miles), Alaska State Museum (16 miles), Last Chance Mining Museum (18 miles), AJ Mine Gastineau Mill Tours (20 miles)
        </p>
        <p className="text-gray-700 mb-2">
          LOCAL FARE: Forbidden Peak Brewery (5 miles), The Grind Coffee Company (7 miles), Four Plates Cocina Peruana (7 miles), Sandbar & Grill (7 miles), Zerelda’s Bistro (8 miles), Donna’s Restaurant (9 miles), Alaskan Brewing Co. (13 miles)
        </p>
        <p className="text-gray-700 mb-2">
          AIRPORT: Juneau International Airport (9 miles)
        </p>
      </div>

      {/* Static Rest Easy with Us */}
      <div className="mb-6">
        <p className="font-semibold text-gray-800">-- REST EASY WITH US --</p>
        <p className="text-gray-700">
          Evolve makes it easy to find and book properties you’ll never want to leave. You can relax knowing that our properties will always be ready for you and that we’ll answer the phone 24/7. Even better, if anything is off about your stay, we’ll make it right. You can count on our homes and our people to make you feel welcome -- because we know what vacation means to you.
        </p>
      </div>

      {/* Static Policies */}
      <div className="mb-6">
        <p className="font-semibold text-gray-800">-- POLICIES --</p>
        <ul className="list-none pl-0">
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            No smoking
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            No pets allowed
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            No events, parties, or large gatherings
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            Must be at least 25 years old to book
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            Additional fees and taxes may apply
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            Photo ID may be required upon check-in
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            NOTE: The property requires stairs to access
          </li>
          <li className="flex items-center text-gray-700 mb-2">
            <span className="mr-2">-</span>
            NOTE: The property does not have air conditioning
          </li>
          <li className="flex items-center text-gray-700">
            <span className="mr-2">-</span>
            NOTE: The property sleeps 3 guests in 2 beds, with room for 4 total by using the full floor mattress
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
