import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const destinations = [
  {
    id: 1,
    country: 'Manggarai Barat',
    city: 'Flores Road Trip 3D2N',
    days: '3 Days',
    price: 'Rp 6.705.000 /orang',
    image: '/images/img1.png'
  },
  {
    id: 2,
    country: 'Bogor',
    city: 'Forrester Glamping Co Bogor',
    days: '1 Days',
    price: 'Rp 1.205.000 /malam',
    image: '/images/img2.png'
  },
  {
    id: 3,
    country: 'Jakarta',
    city: 'Paket Tiket Pesawat Jakarta Bali',
    days: '3 Days',
    price: 'Rp 605.000 /person',
    image: '/images/img3.png'
  },
  {
    id: 4,
    country: 'Kota Semarang',
    city: 'Desa Wisata Kandri',
    days: '14 Days',
    price: 'Rp 1.400.000 /person',
    image: '/images/img4.png'
  }
];

const PopularDestination = () => {
  return (
    <div className='popularContainer'>
    <div className="popular-destination">
      <h2>Popular Destinations</h2>
      <div className="cards-container">
        {destinations.map((destination) => (
          <div className="card" key={destination.id}>
            <img src={destination.image} alt={`${destination.city} view`} className="card-image" />
            <div className="card-header">
              <span className="location-icon"><FontAwesomeIcon icon={faLocationDot} style={{color: "#42a8c3", height: "12px"}} /></span>
              <span className="location">{destination.country}</span>
            </div>
            <div className="card-body">
              <p className="city">{destination.city}</p>
              <p className="days">{destination.days}</p>
              <p className="price">{destination.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PopularDestination;
