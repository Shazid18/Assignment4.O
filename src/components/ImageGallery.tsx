// // components/ImageGallery.tsx
// import React from 'react';

// interface ImageGalleryProps {
//   images: string[];
// }

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {images.map((image, index) => (
//         <div key={index} className="aspect-w-16 aspect-h-9">
//           <img
//             src={`http://localhost:3005${image}`}
//             alt={`Hotel Image ${index + 1}`}
//             className="w-full h-64 object-cover rounded-lg"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;


// "use client";
// import { useState } from "react";
// import Image from "next/image";

// interface GalleryProps {
//   images: string[];
//   title: string;
// }

// const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
//   const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

//   const updateImage = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   const handlePopupToggle = () => {
//     setIsPopupOpen(!isPopupOpen);
//     if (isPopupOpen) {
//       document.body.style.overflow = "auto";
//     } else {
//       document.body.style.overflow = "hidden";
//     }
//   };

//   return (
//     <div className="relative mx-auto max-w-7xl p-4">
//       {/* Main Image and Gallery */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="relative h-96">
//           <Image
//             src={`http://localhost:3005${images[0]}`}
//             alt="Main Gallery Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//         <div className="grid grid-cols-2 grid-rows-2 gap-1 h-96">
//           {images.slice(1, 5).map((src, index) => (
//             <div key={index} className="relative">
//               <Image
//                 src={`http://localhost:3005${images[index+1]}`}
//                 alt={`Gallery Image ${index + 2}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           ))}
//           <div className="flex right">
//             <button
//               className="absolute bottom-5 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md flex items-center gap-2"
//               onClick={handlePopupToggle}
//             >
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="white"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
//               </svg>
//               See All
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
//           <div className="relative bg-white p-4 rounded-lg w-full md:w-3/4 h-full flex flex-col items-center">
//             {/* Popup Header */}
//             <button
//               className="absolute top-4 right-4 text-black text-2xl"
//               onClick={handlePopupToggle}
//             >
//               ×
//             </button>
//             {/* Popup Content */}
//             <div className="flex flex-col items-center justify-center gap-4 h-full">
//               <Image
//                 src={`http://localhost:3005${images[currentImageIndex]}`}
//                 alt={`Popup Image ${currentImageIndex + 1}`}
//                 width={800}
//                 height={600}
//                 objectFit="contain"
//                 className="max-w-full max-h-[80vh] h-auto"
//               />
//               <div className="flex justify-between w-full px-8">
//                 <button
//                   className={`text-xl px-4 py-2 rounded-full ${
//                     currentImageIndex === 0
//                       ? "text-gray-400 cursor-not-allowed"
//                       : "text-black hover:bg-gray-200"
//                   }`}
//                   onClick={() =>
//                     currentImageIndex > 0 && updateImage(currentImageIndex - 1)
//                   }
//                   disabled={currentImageIndex === 0}
//                 >
//                   ‹
//                 </button>
//                 <button
//                   className={`text-xl px-4 py-2 rounded-full ${
//                     currentImageIndex === images.length - 1
//                       ? "text-gray-400 cursor-not-allowed"
//                       : "text-black hover:bg-gray-200"
//                   }`}
//                   onClick={() =>
//                     currentImageIndex < images.length - 1 &&
//                     updateImage(currentImageIndex + 1)
//                   }
//                   disabled={currentImageIndex === images.length - 1}
//                 >
//                   ›
//                 </button>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="absolute bottom-4 w-full flex justify-between items-center px-8">
//               <span className="text-sm text-gray-700">
//                 { title }
//               </span>
//               <span className="text-sm text-gray-700">
//                 {currentImageIndex + 1}/{images.length}
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

"use client";
import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
  title: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Default values in case API data is missing
  const defaultImage = "/2.jpg";  // A default image path
  const defaultTitle = "Juneau Vacation Rental";  // Default title

  // Fallback logic for images and title
  const displayTitle = title || defaultTitle;
  const displayImages = images.length > 0 ? images : [defaultImage];

  const updateImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
    if (isPopupOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="relative mx-auto max-w-7xl p-4">

      {/* Main Image and Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative h-96">
          <Image
            src={`http://localhost:3005${displayImages[0]}`}
            alt="Main Gallery Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 h-96">
          {displayImages.slice(1, 5).map((src, index) => (
            <div key={index} className="relative">
              <Image
                src={`http://localhost:3005${src}`}
                alt={`Gallery Image ${index + 2}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
          <div className="flex right">
            <button
              className="absolute bottom-5 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md flex items-center gap-2"
              onClick={handlePopupToggle}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              See All
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white p-4 rounded-lg w-full md:w-3/4 h-full flex flex-col items-center">
            {/* Popup Header */}
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={handlePopupToggle}
            >
              ×
            </button>
            {/* Popup Content */}
            <div className="flex flex-col items-center justify-center gap-4 h-full">
              <Image
                src={`http://localhost:3005${displayImages[currentImageIndex]}`}
                alt={`Popup Image ${currentImageIndex + 1}`}
                width={800}
                height={600}
                objectFit="contain"
                className="max-w-full max-h-[80vh] h-auto"
              />
              <div className="flex justify-between w-full px-8">
                <button
                  className={`text-xl px-4 py-2 rounded-full ${
                    currentImageIndex === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-black hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    currentImageIndex > 0 && updateImage(currentImageIndex - 1)
                  }
                  disabled={currentImageIndex === 0}
                >
                  ‹
                </button>
                <button
                  className={`text-xl px-4 py-2 rounded-full ${
                    currentImageIndex === displayImages.length - 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-black hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    currentImageIndex < displayImages.length - 1 &&
                    updateImage(currentImageIndex + 1)
                  }
                  disabled={currentImageIndex === displayImages.length - 1}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 w-full flex justify-between items-center px-8">
              <span className="text-sm text-gray-700">{displayTitle}</span>
              <span className="text-sm text-gray-700">
                {currentImageIndex + 1}/{displayImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
