"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  images: string[]; // Array of image URLs
  title: string;    // Title of the property
  address: string; // Location of the property
}

const Banner: React.FC<BannerProps> = ({ images, title, address }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isSaved, setSaved] = useState<boolean>(false);

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("propertyIsSaved") === "true";
    setSaved(savedState);
  }, []);

  const handleShare = () => setPopupVisible(true);
  const handleClosePopup = () => setPopupVisible(false);

  const handleSave = () => {
    const newSavedState = !isSaved;
    setSaved(newSavedState);
    localStorage.setItem("propertyIsSaved", String(newSavedState));
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-5 px-4 md:px-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="text-xl text-blue-600">
          ← See All Properties
        </Link>
        <div className="flex gap-4">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white text-gray-700 hover:bg-gray-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
            </svg>
            Share
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full bg-white text-gray-700 hover:bg-gray-100`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${
                isSaved ? "text-red-500" : "text-gray-700"
              }`}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill={isSaved ? "red" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            Save
          </button>
        </div>
      </div>

      {/* Share Popup */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Share</h3>
              <button
                onClick={handleClosePopup}
                className="text-xl font-bold text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="flex gap-4 mb-6">
              <Image
                src={`http://localhost:3005${images[0]}`} // Display the first image from the props
                alt="Property"
                className="rounded-lg"
                width={100}
                height={100}
              />
              <div>
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-gray-600">{address} - <span className="text-green-600">9.8/10</span></p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center gap-2 p-3 border rounded-lg">
                <Image
                  src="/Messages.png"
                  alt="Messages"
                  width={24}
                  height={24}
                />
                Messages
              </button>
              <button className="flex items-center gap-2 p-3 border rounded-lg">
                <Image
                  src="/WhatsApp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
                WhatsApp
              </button>
              <button className="flex items-center gap-2 p-3 border rounded-md">
                <Image
                  src="/Messenger.png"
                  alt="Messenger"
                  width={24}
                  height={24}
                />
                Messenger
              </button>
              <button className="flex items-center gap-2 p-3 border rounded-md">
                <Image
                  src="/Facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
                Facebook
              </button>
              <button
                className="flex items-center gap-2 p-3 border rounded-lg col-span-2"
                onClick={handleCopyLink}
              >
                <Image
                  src="/Clipboad.png"
                  alt="Copy link"
                  width={24}
                  height={24}
                />
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
