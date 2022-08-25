import City1 from "../assests/image/olea-exterior.webp";
import City2 from "../assests/image/live-city_hero_exterior.webp";
import City3 from "../assests/image/city3.jpeg";
import { FaBath, FaBed, FaCar } from 'react-icons/fa';

const propertyData = [
    {
        name: "OLEA",
        name_title: "Caulfield North,Victoriya",
        img: City1,
        icon_bed: <FaBed className='icon--s' />,
        text_bed: "1-3",
        icon_bath: <FaBath className='icon--s' />,
        text_bath: "1-3",
        icon_car: <FaCar className='icon--s' />,
        text_car: "1-2",
        apartment: "Apartments"
    },
    {
        name: "Live City",
        name_title: "Footscray,Victoria",
        img: City2,
        icon_bed: <FaBed className='icon--s' />,
        text_bed: "1-3",
        icon_bath: <FaBath className='icon--s' />,
        text_bath: "1-2",
        icon_car: <FaCar className='icon--s' />,
        text_car: "0-2",
        apartment: "Apartments"
    },
    {
        name: "Victoria & Albert,Broadbeach",
        name_title: "Broadbeach, Qeensland",
        img: City3,
        icon_bed: <FaBed className='icon--s' />,
        text_bed: "1-3",
        icon_bath: <FaBath className='icon--s' />,
        text_bath: "1-3",
        icon_car: <FaCar className='icon--s' />,
        text_car: "1-2",
        apartment: "Apartments",
        price: "from $810,000"
    }
];
const proprtyReducer = (state = propertyData, action) => {

    switch (action.type) {
        default:
            return state;
    }

}
export default proprtyReducer;