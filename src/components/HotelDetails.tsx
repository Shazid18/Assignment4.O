// components/HotelDetails.tsx
import React from 'react';
import ImageGallery from './ImageGallery';

import { Hotel } from '@/types';

import NavBar from './NavBar';
import Tabs from './Tabs';
import Banner from './Banner';
import Booking from './Booking';
import RoomDetails from './RoomDetails';
import About from './About';
import Search from './Search';
import HouseRules from './HouseRules';
import DamageAndIncidentals from './DamageAndIncidentals';
import CancellationPolicy from './CancellationPolicy';
import ImportantInformation from './ImportantInformation';
import FAQ from './FAQ';
import { FaRegCircleDown } from 'react-icons/fa6';
import HostInformation from './HostInformation';
import Review2 from './Review2';
import BannerContainer from './CancellationFAQ';
import CancellationFAQ from './CancellationFAQ';

interface HotelDetailsProps {
  hotel: Hotel;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
  return (
    <>
    <NavBar/>
    
      

      <div className="container mx-auto px-4 py-8">

        {/* Banner */}
        <Banner
        images={hotel.images} 
        title={hotel.title} 
        address={hotel.address}
        />



        {/* Image Gallery */}
        {hotel.images && hotel.images.length > 0 && <ImageGallery 
          images={hotel.images}
          title= {hotel.title} />}


        {/* Tab */}
        <Tabs/>

        {/* Booking */}
        <Booking
        id={hotel.id}
        title={hotel.title} 
        bedroomCount={hotel.bedroomCount} 
        bathroomCount={hotel.bathroomCount} 
        amenities={hotel.amenities}
        />


        {/* Booking */}
        <RoomDetails
        bedroomCount={hotel.bedroomCount} 
        bathroomCount={hotel.bathroomCount}
        />

        {/* About */}
        <About
        title={hotel.title} 
        description={hotel.description}
        />

        {/* Search */}
        <Search
        amenities={hotel.amenities}
        name={hotel.host.name}
        />


        {/* HouseRule */}
        <HouseRules/>

        {/* AfterHouseRule */}
        <CancellationFAQ/>


        {/* Review */}
        <Review2
        name={hotel.host.name}
        />



      </div>
    
    </>
  );
};

export default HotelDetails;
