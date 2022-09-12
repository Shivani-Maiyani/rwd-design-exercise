import City1 from "../../../../assests/image/olea-exterior.webp";
import City2 from "../../../../assests/image/live-city_hero_exterior.webp";
import City3 from "../../../../assests/image/Header.jpg";
import olea_image1 from "../../../../assests/image/olea-exterior.webp";
import olea_image2 from "../../../../assests/image/olea-bathroom.webp";
import olea_image3 from "../../../../assests/image/olea-bedroom.webp";
import olea_image4 from "../../../../assests/image/olea-living-dining.webp";
import olea_image5 from "../../../../assests/image/olea-livingroom.webp";
import live_image1 from "../../../../assests/image/live-city_exteriorl.webp";
import live_image2 from "../../../../assests/image/live-city_outdoor.webp";
import live_image3 from "../../../../assests/image/live-city_map.webp";
import live_image4 from "../../../../assests/image/live-city_dining_kitchen.webp";
import live_image5 from "../../../../assests/image/live-city_bedroom.webp";
import victoria_image1 from "../../../../assests/image/victoria-albert.jpg";
import victoria_image2 from "../../../../assests/image/victoria-albert-1.webp";
import victoria_image3 from "../../../../assests/image/victoria-albert-2.webp";
import victoria_image4 from "../../../../assests/image/victoria-albert-3.webp";
import victoria_image5 from "../../../../assests/image/victoria-albert-4.jpeg";
import { FaBath, FaBed, FaCar, FaBuilding } from 'react-icons/fa';

const initialState = {

    propertyData: [{
        id: "p1",
        name: "OLEA",
        nameTitle: "Caulfield North,Victoriya",
        img: City1,
        iconBed: <FaBed className='icon--s' />,
        textBed: "1-3",
        iconBath: <FaBath className='icon--s' />,
        textBath: "1-3",
        iconCar: <FaCar className='icon--s' />,
        textCar: "1-2",
        apartment: "Apartments"
    },
    {
        id: "p2",
        name: "Live City",
        nameTitle: "Footscray,Victoria",
        img: City2,
        iconBed: <FaBed className='icon--s' />,
        textBed: "1-3",
        iconBath: <FaBath className='icon--s' />,
        textBath: "1-2",
        iconCar: <FaCar className='icon--s' />,
        textCar: "0-2",
        apartment: "Apartments"
    },
    {
        id: "p3",
        name: "Victoria & Albert,Broadbeach",
        nameTitle: "Broadbeach, Qeensland",
        img: City3,
        iconBed: <FaBed className='icon--s' />,
        textBed: "1-3",
        iconBath: <FaBath className='icon--s' />,
        textBath: "1-3",
        iconCar: <FaCar className='icon--s' />,
        textCar: "1-2",
        apartment: "Apartments",
        price: "from $810,000"
    },],
    propertyDetailData: [{
        id: "p1",
        title: "OLEA",
        address: "50 Kambrook Road, Caulfield North, Victoria 3161",
        image1: olea_image1,
        image2: olea_image2,
        image3: olea_image3,
        image4: olea_image4,
        image5: olea_image5,
        descHead: "About OLEA",
        iconBed: <FaBed className='icon--s' />,
        textBed: "1-3",
        iconBath: <FaBath className='icon--s' />,
        textBath: "1-3",
        iconCar: <FaCar className='icon--s' />,
        textCar: "1-2",
        iconBuilding: <FaBuilding className='icon--s' />,
        apartment: "Apartments",
        propertyType: "Property Type",
        decsTextHead: "Now Selling - Register Now",
        subDecsTextFirst: "Brand New 1, 2 & 3 Bedroom Apartments & Premium Townhouses.",
        subDecsTextSecond: "Olea is a distinctive structure, yet sits perfectly within its neighbourhood, complementing the surrounding period homes and the quiet tree-lined street. 3 and 4 bedroom townhouses and 1, 2 and 3 bedroom apartments have been meticulously incorporated into the footprint, dressed in materials sympathetic to the area.",
        subDecsTextThird: "Olea Homes anchor the building to its neighbourhood, with separate entries emulating free-standing residences, further enhanced by the brick facades common to the area’s traditional homes. The beauty of Olea Homes lies in its honest, complementary relationship with the streets and houses that surround it. It brings you into the neighbourhood, and makes it easy to fall in love with the style, quality and sheer liveability of your home.",
        subDecsTextForth: "Considering Caulfield’s fame as one of Australia’s premier racing venues, the area itself has evolved in its own way. It has excellent access to public transport and roads, putting you at the centre of Melbourne’s best - from parks and reserves, beaches, shopping and retail, education and everyday amenities and services.",
        subDecsTextFifth: "Moments from fabulous Caulfield Park and Caulfield Racecourse, Olea prides itself on presenting a life that is rich in style and comfort, atmosphere and opportunity. With a community of like-minded residents enjoying the landscaped shared spaces, and a larger community to be found in the suburb itself, it really will feel like coming home. Discover what life can be at Olea."

    },
    {
        id: "p2",
        title: "Live City",
        address: "124-188 Ballarat Road, Footscray, Victoria 3011",
        image1: live_image1,
        image2: live_image2,
        image3: live_image3,
        image4: live_image4,
        image5: live_image5,
        descHead: "About Live City",
        iconBed: <FaBed className='icon--s' />,
        textBed: "1-3",
        iconBath: <FaBath className='icon--s' />,
        textBath: "1-2",
        iconCar: <FaCar className='icon--s' />,
        textCar: "0-2",
        iconBuilding: <FaBuilding className='icon--s' />,
        apartment: "Apartments",
        propertyType: "Property Type",
        decsTextHead: "Live City Footscray.",
        subDecsTextFirst: "Come in to see a full-size prototype apartment in the display suite!",
        subDecsTextSecond: "An exciting landmark precinct is about to unfold in Melbourne’s popular growth suburb Footscray. When completed, Live City will feature bustling laneways lined with boutique shops and cafés, a public plaza accented with nature and art, health facilities, fresh food outlets and convenience offerings.",
        subDecsTextThird: "Live City — a fully integrated, mixed-use, master planned community — is set to be the new beating heart of Footscray. It will rise triumphantly above its heritage grounds, boasting contemporary residences and communal rooftop facilities, all specially designed to turn every moment of life into a vibrant experience.",
        subDecsTextForth: "Connectivity is the key at Live City. The CBD is only 10 minutes away, and with excellent accessibility, via major arterial roads and public transport at your doorstep, you can arrive at your destination effortlessly. At Live City, you'll be close to Victoria University, a range of prestigious high schools, Highpoint Shopping Centre, hospitals, parklands, Maribyrnong River and Flemington Racecourse.",
        subDecsTextFifth: "Stake your claim in Melbourne’s newest up and coming precinct teeming with character and history. Live City in Footscray is brimming with possibilities, future growth and the promise of great things to come."
    },
    {
        id: "p3",
        title: "Victoria & Albert,Broadbeach",
        address: "14 Albert Avenue, Gold Coast, QLD, Australia 4218",
        image1: victoria_image1,
        image2: victoria_image2,
        image3: victoria_image3,
        image4: victoria_image4,
        image5: victoria_image5,
        descHead: "About V&A Broadbeach",
        iconBed: <FaBed className='icon--s' />,
        textBed: "1-3",
        iconBath: <FaBath className='icon--s' />,
        textBath: "1-3",
        iconCar: <FaCar className='icon--s' />,
        textCar: "1-2",
        iconBuilding: <FaBuilding className='icon--s' />,
        apartment: "Apartments",
        propertyType: "Property Type",
        decsTextHead: "Victoria & Albert | Builder Descon Group Appointed",
        subDecsTextFirst: "New residential, retail and culinary high-rise precinct for launch.",
        subDecsTextSecond: "V&A is a new oceanside precinct offering a diverse range of apartments and luxury penthouses with exceptional private amenity, with separate spaces for the Victoria and Albert residences.",
        subDecsTextThird: "V&A places you in the vibrant heart of Broadbeach, where everything you need is only a short walk from your front door. From dining and shopping, to entertainment and the beach, there is so much to delight and captivate.",
        subDecsTextForth: "Enquire now to receive the project brochure, or explore this exciting precinct from a brand new perspective by booking your state-of-the-art immersive experience at our display suite today.",
        subDecsTextFifth: "Comprised of two spectacular residential towers, a vast array of premium resident amenity and vibrant ground floor retail and dining facilities, Victoria & Albert is Broadbeach’s new landmark precinct."

    },],
    filter: "",
    filteredProperty: []
};

const proprtyReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD":
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
}

export default proprtyReducer;