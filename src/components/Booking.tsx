// pages/index.tsx
"use client";

import { useState } from "react";

import {
  FaBed,
  FaBath,
  FaRuler,
  FaUsers,
  FaTree,
  FaWater,
  FaParking,
} from "react-icons/fa";

interface BookingProps {
  id:string;
  title: string;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
}

interface TravelersCount {
  adults: number;
  children: number;
  withPets: boolean;
}

export default function Home({
  id,
  title,
  bedroomCount,
  bathroomCount,
  amenities,
}: BookingProps) {
  const [showTravelersModal, setShowTravelersModal] = useState(false);
  const [travelers, setTravelers] = useState<TravelersCount>({
    adults: 2,
    children: 0,
    withPets: false,
  });

  const amenityIcons: Record<string, React.ReactNode> = {
    "Outdoor Space": <FaTree className="w-5 h-5" />,
    Washer: <FaWater className="w-5 h-5" />,
    "Parking available": <FaParking className="w-5 h-5" />,
  };

  const locations = [
    { name: "Auke Bay", distance: "6 min drive" },
    { name: "University of Alaska-Southeast", distance: "10 min drive" },
    { name: "Mendenhall Golf Course", distance: "14 min drive" },
    { name: "Juneau, AK (JNU-Juneau Intl.)", distance: "14 min drive" },
  ];

  const totalTravelers = travelers.adults + travelers.children;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <main className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">Entire home</p>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-600 text-white px-2 py-1 rounded">
              9.8
            </span>
            <span className="font-semibold">Exceptional</span>
          </div>

          {/* See all review */}
          <div className="flex items-center gap-4 mb-6">
            <button className="text-blue-600 underline">
              <span>See all 24 reviews</span>
            </button>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FaBed className="w-5 h-5" />
              <span>{bedroomCount} bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="w-5 h-5" />
              <span>Sleeps {bedroomCount * 2 }</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="w-5 h-5" />
              <span>{bathroomCount} bathroom(s)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRuler className="w-5 h-5" />
              <span>1155 sq ft</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Popular amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  {amenityIcons[amenity] || <FaTree className="w-5 h-5" />}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
            <button className="text-blue-600 underline mt-4">
              See all property amenities
            </button>
          </div>

          {/* Map Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Explore the area</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="h-[300px] bg-gray-200 rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2085.7!2d-134.4!3d58.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTjCsDE4JzM2LjAiTiAxMzTCsDI0JzM2LjAiVw!5e0!3m2!1sen!2sus!4v1635176234937!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <span>{location.name}</span>
                    <span className="text-gray-600">{location.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-[400px] shrink-0">
          {/* Member Section */}
          <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <span>Members get our best prices when signed in!</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Sign in
            </button>
          </div>

          {/* Booking Section */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">$134</span>
              <span className="text-gray-600">per night</span>
            </div>
            <div className="">
              <span className="text-sm text-green-600">
                Free cancellation ⓘ
              </span>
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-800">
                Before Monday, Nov 4
              </span>
            </div>
            <div className="mb-10">
              {" "}
              <span className="text-lg text-green-600"> ✔ </span>{" "}
              <span className="text-lg text-black-600">
                {" "}
                Your dates are available
              </span>
            </div>

            <div className="mb-4">
              <div className="flex gap-2 mb-2">
                <input
                  type="date"
                  className="border rounded p-2 flex-1"
                  defaultValue="2024-11-18"
                />
                <input
                  type="date"
                  className="border rounded p-2 flex-1"
                  defaultValue="2024-11-20"
                />
              </div>

              <button
                onClick={() => setShowTravelersModal(true)}
                className="border rounded p-2 w-full text-left"
              >
                {totalTravelers} travelers
              </button>
            </div>

            <button className="bg-blue-600 text-white w-full py-3 rounded mb-2">
              Book now
            </button>
            <p className="text-center text-sm text-gray-600">
              You will not be charged yet
            </p>
          </div>
          <div>
            <p className="text-center text-sm text-blue-600 my-10">
              Connect Host
            </p>
          </div>
          <hr></hr>
          <div>
            <p className="text-center text-sm text-gray-600 m-2">
              Property # {id}
            </p>
          </div>
        </div>

        {/* Travelers Modal */}
        {showTravelersModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Travelers</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Adults</span>
                  <div className="flex items-center gap-4">
                    <button
                      className={`w-8 h-8 rounded-full border ${
                        travelers.adults === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() =>
                        travelers.adults > 0 &&
                        setTravelers({
                          ...travelers,
                          adults: travelers.adults - 1,
                        })
                      }
                      disabled={travelers.adults === 0}
                    >
                      -
                    </button>
                    <span>{travelers.adults}</span>
                    <button
                      className="w-8 h-8 rounded-full border cursor-pointer"
                      onClick={() =>
                        setTravelers({
                          ...travelers,
                          adults: travelers.adults + 1,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span>Children</span>
                  <div className="flex items-center gap-4">
                    <button
                      className={`w-8 h-8 rounded-full border ${
                        travelers.children === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() =>
                        travelers.children > 0 &&
                        setTravelers({
                          ...travelers,
                          children: travelers.children - 1,
                        })
                      }
                      disabled={travelers.children === 0}
                    >
                      -
                    </button>
                    <span>{travelers.children}</span>
                    <button
                      className="w-8 h-8 rounded-full border cursor-pointer"
                      onClick={() =>
                        setTravelers({
                          ...travelers,
                          children: travelers.children + 1,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={travelers.withPets}
                    onChange={(e) =>
                      setTravelers({
                        ...travelers,
                        withPets: e.target.checked,
                      })
                    }
                  />
                  <label>I am traveling with pets</label>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 text-white py-2 rounded mt-6"
                onClick={() => setShowTravelersModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
