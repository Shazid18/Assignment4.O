// pages/hotel/[id].tsx
import { Hotel } from '@/types';
import HotelDetails from '@/components/HotelDetails';
import Link from 'next/link';

async function getHotel(id: string): Promise<Hotel> {
  try {
    const res = await fetch(`http://localhost:3005/api/hotel/${id}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch hotel. Status: ${res.status}`);
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching hotel:', error);
    throw error;
  }
}

export default async function HotelPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const hotel: Hotel = await getHotel(params.id);

    if (!hotel) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Back to Home
          </Link>
        </div>
      );
    }

    return <HotelDetails hotel={hotel} />;
  } catch (error) {
    console.error('Error in HotelPage component:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Error Loading Hotel</h1>
        <p className="text-red-500 mb-4">Failed to load hotel details. Please try again later.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }
}
