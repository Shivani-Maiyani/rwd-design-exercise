import React from "react";
import { Link } from 'react-router-dom';

import "../styles/PropertyCard.scss";
import "../styles/propertyCardMedia.scss";

const PropertyCradDetail = (props) => {

    return (
        <div className='property--details width-0'>
            <div className='images'>
                <div className='cover-overlay width-overlay'>
                    <Link to={`/propertyDetail/${props.id}`}>
                        <button className='cart-button'>View Details</button>
                    </Link>
                </div>
                <img src={props.img} alt="img" className='property-img' />
            </div>
            <div className='property-name'>
                <h4>{props.name}</h4>
            </div>

            <div className='property-title'>
                <p>{props.nameTitle}</p>
            </div>
            <div className='property-price'>{props.price}</div>
            <div className='icons--section'>
                <div className='icons'>
                    <div className='icons-text'>
                        <div className='icon-bed'>
                            {props.iconBed}
                        </div>
                        <div className='text-bed'>
                            {props.textBed}
                        </div>
                    </div>
                    <div className='icons-text'>
                        <div className='icon-bed'>
                            {props.iconBath}
                        </div>
                        <div className='text-bed'>
                            {props.textBath}
                        </div>
                    </div>
                    <div className='icons-text'>
                        <div className='icon-bed'>
                            {props.iconCar}
                        </div>
                        <div className='text-bed'>
                            {props.textCar}
                        </div>
                    </div>
                </div>
                <div className='property-apt'>{props.apartment}</div>
            </div>
        </div>
    )

}
export default PropertyCradDetail;