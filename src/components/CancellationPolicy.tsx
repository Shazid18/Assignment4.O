import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 rounded-lg-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cancellation</h2>
      <div className="bg-gray-100 p-6 rounded-lg flex flex-col gap-6">
        <div className="flex justify-between font-semibold text-gray-700 mb-2">
          <span>Full refund</span>
          <span>No refund</span>
        </div>
        <div className="relative">
          <div className="h-0.5 bg-gray-300 absolute inset-x-0 top-1/2" />
          <div className="flex justify-between mt-4">
            <span>Today</span>
            <span>Nov 4</span>
            <span>Check-in</span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <p className="font-semibold">Before Nov 4</p>
          <p>Full refund</p>
          <p>Cancel your reservation before Nov 4 at 11:59 PM, and you’ll get a full refund. Times are based on the property’s local time.</p>
        </div>
        <div>
          <p className="font-semibold">After Nov 4</p>
          <p>No refund</p>
          <p>After that, you won’t get a refund.</p>
        </div>
      </div>
    </section>
  );
};

export default CancellationPolicy;
