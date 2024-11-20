import React from 'react';

const ImportantInformation: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 rounded-lg-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Important Information</h2>
      <ul className="list-none space-y-3 text-gray-600">
        <li>Extra person charges may apply and vary depending on property policy</li>
        <li>Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges</li>
        <li>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</li>
        <li>Onsite parties or group events are strictly prohibited</li>
        <li>Host has indicated there is a carbon monoxide detector on the property</li>
        <li>Host has indicated there is a smoke detector on the property</li>
        <li>Safety features at this property include a fire extinguisher and a first aid kit</li>
      </ul>
    </section>
  );
};

export default ImportantInformation;
