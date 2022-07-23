import React from 'react';
import "./PropertyCard.scss";
import City1 from "../../assests/image/city1.jpg";
import City2 from "../../assests/image/city2.jpeg";
import City3 from "../../assests/image/city3.jpg";
import { FaBath, FaBed, FaCar } from 'react-icons/fa';
const PropertyCard = () => {

   const person = [
        {
          name : "OLEA",
          name_title: "Caulfield North,Victoriya",
          img: City1,
          icon_bed: <FaBed className='icon--s'/>,
          text_bed: "1-3",
          icon_bath: <FaBath className='icon--s'/>,
          text_bath: "1-3",
          icon_car: <FaCar className='icon--s'/>,
          text_car: "1-2",
          apartment: "Apartments"
        },
        {
            name : "Live City",
            name_title: "Footscray,Victoria",
            img: City2,
            icon_bed: <FaBed className='icon--s'/>,
            text_bed: "1-3",
            icon_bath: <FaBath className='icon--s'/>,
            text_bath: "1-2",
            icon_car: <FaCar className='icon--s'/>,
            text_car: "0-2",
            apartment: "Apartments"
          },
          {
            name : "Victoria & Albert,Broadbeach",
            name_title: "Broadbeach, Qeensland",
            img: City3,
            icon_bed: <FaBed className='icon--s'/>,
            text_bed: "1-3",
            icon_bath: <FaBath className='icon--s'/>,
            text_bath: "1-3",
            icon_car: <FaCar className='icon--s'/>,
            text_car: "1-2",
            apartment: "Apartments",
            price: "from $810,000"
          }
    ];
  return (
    <div>
      <div className='container'>
      <div className='property-header'>
        <h2>Australia's best investment property deals</h2>
        </div>
        <div className='property-details'>
        {
            person.map((property) => (
               <div className='property--details'>
                <div className='images'>
                    <img src={property.img} alt="image" className='property-img'/>
                </div>
                <div className='property-name'>
                    <h3>{property.name}</h3>
                </div>
                <div className='property-title'>
                    <p>{property.name_title}</p>
                </div>
                <div className='property-price'>{property.price}</div>
                <div className='icons--section'> 
                <div className='icons'>
                <div className='icons-text'>
                  <div className='icon-bed'>
                  {property.icon_bed}
                  </div>
                  <div className='text-bed'>
                  {property.text_bed}
                  </div>
                </div>
                <div className='icons-text'>
                  <div className='icon-bed'>
                  {property.icon_bath}
                  </div>
                  <div className='text-bed'>
                  {property.text_bath}
                  </div>
                </div>
                <div className='icons-text'>
                  <div className='icon-bed'>
                  {property.icon_car} 
                  </div>
                  <div className='text-bed'>
                  {property.text_car}
                  </div> 
                </div>
                </div>
                <div className='property-apt'>{property.apartment}</div>
                </div>
               </div>
             
            ))
        }
        </div>
      </div>
    </div>
  )
}
export default PropertyCard;
