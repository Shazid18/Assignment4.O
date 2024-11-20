// pages/404.tsx

import Link from 'next/link'


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center py-8 px-4">
      {/* Optional: Add a custom image */}
      {/* <Image src={errorImage} alt="404 Error" width={300} height={200} className="mb-4" /> */}
      
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        Oops! Page Not Found
      </h1>
      
      {/* Message */}
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      {/* Button to go back to homepage */}
      <Link href="/">
        <a className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg text-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          Go back to Homepage
        </a>
      </Link>
    </div>
  )
}

export default NotFound
