// components/HostInformation.tsx
import React from 'react';

interface HostInformationProps {
  name: string;
  email: string;
}

const HostInformation: React.FC<HostInformationProps> = ({ name, email }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Host Information</h2>
      <p className="text-gray-600">
        <span className="font-medium">Name:</span> {name}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
    </div>
  );
};

export default HostInformation;
