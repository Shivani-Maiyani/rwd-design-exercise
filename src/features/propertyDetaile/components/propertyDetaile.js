import React from 'react';
import "../styles/propertyDetaile.scss";
import "../styles/propertyDetailMedia.scss";
import image1 from "../../../assests/image/olea-exterior.webp";
import image2 from "../../../assests/image/olea-bathroom.webp";
import image3 from "../../../assests/image/olea-bedroom.webp";
import image4 from "../../../assests/image/olea-living-dining.webp";
import image5 from "../../../assests/image/olea-livingroom.webp";
import { FaBath, FaBed, FaBuilding, FaCar } from 'react-icons/fa';

const PropertyDetaile = () => {
    return (
        <div className='detaile' id="OLEA">
            <div className='property-detailes'>
                <div className='title'>
                    <h1 className='title-head'>OLEA</h1>
                    <p className='title-text'>50 Kambrook Road, Caulfield North, Victoria 3161</p>
                </div>
            </div>
            <div className="proprty-image">
                <div className='olea-image'>
                    <img src={image1} alt="first Image" className='image' />
                </div>
                <div className='image-section'>
                    <div className="img-wraaper">
                        <img src={image2} alt="second image" className='img' />
                        <img src={image3} alt="thired image" className='img' />
                    </div>
                    <div className="img-wraaper">
                        <img src={image4} alt="fourth image" className='img' />
                        <img src={image5} alt="fifth image" className='img' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='des-head'> About OLEA</div>
                <div className="description">
                    <p className='des-text'>50 Kambrook Road, Caulfield North, Victoria 3161</p>
                </div>
                <div className='icons--section'>
                    <div className='icons'>
                        <div className='icons-text'>
                            <div className='icon-bed'>
                                <FaBed className='icon--s' />
                            </div>
                            <div className='text-bed'>
                                1-3
                            </div>
                        </div>
                        <div className='icons-text'>
                            <div className='icon-bed'>
                                <FaBath className='icon--s' />
                            </div>
                            <div className='text-bed'>
                                1-3
                            </div>
                        </div>
                        <div className='icons-text'>
                            <div className='icon-bed'>
                                <FaCar className='icon--s' />
                            </div>
                            <div className='text-bed'>
                                1-2
                            </div>
                        </div>
                    </div>
                </div>

                <div className='property-icon'>
                    <div className='prop-icon'>
                        <FaBuilding className='icon--s' />
                        <p className='icon-text'>Property Type</p>
                    </div>
                    <div className='app-icon'>Appartment</div>
                </div>
            </div>

            <div className='container'>
                <div className='sub-description'>Now Selling - Register Now</div>

                <p className='sub-text'>Brand New 1, 2 & 3 Bedroom Apartments & Premium Townhouses.</p>
                <p className='sub-text'>Olea is a distinctive structure, yet sits perfectly within its neighbourhood, complementing the surrounding period homes and the quiet tree-lined street. 3 and 4 bedroom townhouses and 1, 2 and 3 bedroom apartments have been meticulously incorporated into the footprint, dressed in materials sympathetic to the area.</p>
                <p className='sub-text'>Olea Homes anchor the building to its neighbourhood, with separate entries emulating free-standing residences, further enhanced by the brick facades common to the area’s traditional homes. The beauty of Olea Homes lies in its honest, complementary relationship with the streets and houses that surround it. It brings you into the neighbourhood, and makes it easy to fall in love with the style, quality and sheer liveability of your home.</p>
                <p className='sub-text'>Considering Caulfield’s fame as one of Australia’s premier racing venues, the area itself has evolved in its own way. It has excellent access to public transport and roads, putting you at the centre of Melbourne’s best - from parks and reserves, beaches, shopping and retail, education and everyday amenities and services.</p>
                <p className='sub-text'>Moments from fabulous Caulfield Park and Caulfield Racecourse, Olea prides itself on presenting a life that is rich in style and comfort, atmosphere and opportunity. With a community of like-minded residents enjoying the landscaped shared spaces, and a larger community to be found in the suburb itself, it really will feel like coming home. Discover what life can be at Olea.</p>
            </div>
        </div>
    )
}

export default PropertyDetaile;
