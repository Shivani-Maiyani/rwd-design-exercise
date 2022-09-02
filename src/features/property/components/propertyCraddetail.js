import React from "react";
import { Link } from 'react-router-dom';
import "../styles/PropertyCard.scss";
import "../styles/propertyCardMedia.scss";

const PropertyCradDetail = (props) => {

    return (
        <div className='property--details width-0' key={props.name}>
            <div className='images'>
                <div className='cover-overlay width-overlay'>
                    <Link to={`/PropertyDetaile/${props.id}`}>
                        <button className='cart-button'>View Details</button>
                    </Link>
                </div>
                <img src={props.img} alt="image" className='property-img' />
            </div>
            <div className='property-name'>
                <h4>{props.name}</h4>
            </div>

            <div className='property-title'>
                <p>{props.name_title}</p>
            </div>
            <div className='property-price'>{props.price}</div>
            <div className='icons--section'>
                <div className='icons'>
                    <div className='icons-text'>
                        <div className='icon-bed'>
                            {props.icon_bed}
                        </div>
                        <div className='text-bed'>
                            {props.text_bed}
                        </div>
                    </div>
                    <div className='icons-text'>
                        <div className='icon-bed'>
                            {props.icon_bath}
                        </div>
                        <div className='text-bed'>
                            {props.text_bath}
                        </div>
                    </div>
                    <div className='icons-text'>
                        <div className='icon-bed'>
                            {props.icon_car}
                        </div>
                        <div className='text-bed'>
                            {props.text_car}
                        </div>
                    </div>
                </div>
                <div className='property-apt'>{props.apartment}</div>
            </div>
        </div>
    )

}
export default PropertyCradDetail;