import React from "react";

interface ReviewProps {
  name: string;
}

const Review2: React.FC<ReviewProps> = ({ name }) => {
  return (
    <section className="p-6 md:p-8 rounded-lg max-w-7xl mx-auto space-y-8">
      {/* Ratings and Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        <div className="space-y-4">
          <div className="text-green-600 text-2xl md:text-3xl font-bold">
            9.8/10
          </div>
          <div className="text-gray-800 font-semibold text-lg">Exceptional</div>
          <div className="text-sm text-gray-600">24 reviews</div>
          <div className="text-sm text-gray-600">
            Reviews are verified unless labeled otherwise.
          </div>
        </div>
        <div className="col-span-3 flex flex-col md:flex-row gap-6">
          {/* Review 1 */}
          <div className="bg-white p-4 rounded-lg flex-1">
            <p className="font-bold text-gray-800">10/10 Excellent</p>
            <p className="text-sm text-gray-600">
              A very cozy home for the two of us in a quiet area NW of town.
              Beautiful water view...
            </p>
            <a href="#" className="text-blue-500 text-sm">
              Read more
            </a>
            <div className="text-xs text-gray-500 mt-2">
              Kyle G. <br /> Sep 25, 2024
            </div>
          </div>
          {/* Review 2 */}
          <div className="bg-white p-4 rounded-lg flex-1">
            <p className="font-bold text-gray-800">10/10 Excellent</p>
            <p className="text-sm text-gray-600">
              The cottage was just as the pictures and description stated. Nice
              quiet area and great view...
            </p>
            <a href="#" className="text-blue-500 text-sm">
              Read more
            </a>
            <div className="text-xs text-gray-500 mt-2">
              Cindy B. <br /> Sep 23, 2024
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          See all 24 reviews →
        </button>
      </div>

      {/* About the Host */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        <h2 className="text-gray-800 font-semibold text-lg">About the Host</h2>
        <div className="col-span-1 flex flex-col md:flex-row gap-6">
          <div className="space-y-5">
            <div className="font-semibold text-gray-600">Hosted by {name}</div>
            <div className="font-semibold text-gray-600">Languages:</div>
            <p className="text-sm text-gray-600">
              English, French, German, Spanish
            </p>
          </div>
        </div>
      </div>

      {/* Send a Message */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        <h2 className="text-gray-800 font-semibold text-lg">About the Host</h2>
        <div className="col-span-1 flex flex-col md:flex-row gap-6">
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Contact Host
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Review2;
