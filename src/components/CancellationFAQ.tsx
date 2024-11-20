import React from 'react';

const CancellationFAQ: React.FC = () => {
  return (
    <section className="p-6 md:p-8 rounded-lg max-w-7xl mx-auto space-y-8">
      {/* Damage and Incidentals */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        <h2 className="text-lg font-bold text-gray-800 mt-4">Damage and incidentals</h2>
        <div className="col-span-3 flex flex-col md:flex-row gap-6">
        <p className="text-gray-600 mt-2">
          You will be responsible for any damage to the rental property caused by you or your party
          during your stay.
        </p>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        <h2 className="text-lg font-bold text-gray-800 mt-4">Cancellation</h2>
        <div className="col-span-3 flex flex-col md:flex-row gap-6">
        <div className="bg-gray-100 p-4 rounded-lg space-y-6 mt-4">
          {/* Timeline */}
          <div className="relative flex flex-col items-center">
            <div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
            <div className="flex w-full justify-between items-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 border border-gray-800 rounded-full"></div>
            </div>
            <div className="flex justify-between w-full text-sm mt-2 text-gray-600">
              <span>Today</span>
              <span>Nov 4</span>
              <span>Check-in</span>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="font-bold text-gray-800">Before Nov 4</p>
              <p className="text-gray-600">Full refund</p>
              <p className="text-sm text-gray-600 mt-1">
                Cancel your reservation before Nov 4 at 11:59 PM, and you’ll get a full refund.
                Times are based on the property’s local time.
              </p>
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800">After Nov 4</p>
              <p className="text-gray-600">No refund</p>
              <p className="text-sm text-gray-600 mt-1">
                After that, you won’t get a refund.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        <h2 className="text-lg font-bold text-gray-800 mt-4">Important information</h2>
        <div className="col-span-3 flex flex-col md:flex-row gap-6">
        <ul className="list-disc pl-6 text-sm text-gray-600 mt-2 space-y-2">
          <li>Extra person charges may apply and vary depending on property policy.</li>
          <li>
            Government-issued photo identification and a credit card, debit card, or cash deposit
            may be required at check-in for incidental charges.
          </li>
          <li>
            Special requests are subject to availability upon check-in and may incur additional
            charges; special requests cannot be guaranteed.
          </li>
          <li>Onsite parties or group events are strictly prohibited.</li>
          <li>Host has indicated there is a carbon monoxide detector on the property.</li>
          <li>Host has indicated there is a smoke detector on the property.</li>
          <li>Safety features at this property include a fire extinguisher and a first aid kit.</li>
        </ul>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        <h2 className="text-lg font-bold text-gray-800 mt-4">Frequently asked questions</h2>
        <div className="col-span-3 flex flex-col md:flex-row gap-6">
        <div className="space-y-4 mt-4">
          <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
            <p className="text-gray-800 font-bold">
              Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?
            </p>
            <span>▼</span>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
            <p className="text-gray-800 font-bold">
              What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?
            </p>
            <span>▼</span>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
            <p className="text-gray-800 font-bold">
              What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?
            </p>
            <span>▼</span>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
            <p className="text-gray-800 font-bold">
              Where is Juneau Vacation Home: Stunning View + Beach Access located?
            </p>
            <span>▼</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CancellationFAQ;
