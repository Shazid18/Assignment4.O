"use client"
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto  p-8 rounded-lg-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="border-t border-gray-300 pt-4 cursor-pointer" onClick={() => toggleFAQ(0)}>
          <p className="font-semibold text-gray-800">Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?</p>
          {open === 0 && <p className="text-gray-600 mt-2">No, pets are not allowed.</p>}
        </div>
        <div className="border-t border-gray-300 pt-4 cursor-pointer" onClick={() => toggleFAQ(1)}>
          <p className="font-semibold text-gray-800">What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?</p>
          {open === 1 && <p className="text-gray-600 mt-2">Check-in is after 3:00 PM.</p>}
        </div>
        <div className="border-t border-gray-300 pt-4 cursor-pointer" onClick={() => toggleFAQ(2)}>
          <p className="font-semibold text-gray-800">What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?</p>
          {open === 2 && <p className="text-gray-600 mt-2">Check-out is before 11:00 AM.</p>}
        </div>
        <div className="border-t border-gray-300 pt-4 cursor-pointer" onClick={() => toggleFAQ(3)}>
          <p className="font-semibold text-gray-800">Where is Juneau Vacation Home: Stunning View + Beach Access located?</p>
          {open === 3 && <p className="text-gray-600 mt-2">It is located in Juneau, Alaska.</p>}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
