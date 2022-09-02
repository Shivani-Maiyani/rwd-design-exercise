import React from 'react';
import "../styles/propertyDetaile.scss";
import "../styles/propertyDetailMedia.scss";
import { useParams } from 'react-router-dom';
import { createStore } from 'redux';
import proprtyReducer from '../../../reducer/propertyReducer';

const PropertyDetaile = () => {
    const params = useParams();
    const store = createStore(proprtyReducer);
    const propertyDetailData = store.getState();
    return (
        <div>
            {
                propertyDetailData.propertyDetailData.map((data) => {
                    if (params.id.toString() === data.id) {
                        return <div div className='detaile' key={data.id} >
                            <div className='property-detailes'>
                                <div className='title'>
                                    <h1 className='title-head'>{data.title}</h1>
                                    <p className='title-text'>{data.address}</p>
                                </div>
                            </div>
                            <div className="proprty-image">
                                <div className='olea-image'>
                                    <img src={data.image1} alt="first Image" className='image' />
                                </div>
                                <div className='image-section'>
                                    <div className="img-wraaper">
                                        <img src={data.image2} alt="second image" className='img' />
                                        <img src={data.image3} alt="thired image" className='img' />
                                    </div>
                                    <div className="img-wraaper">
                                        <img src={data.image4} alt="fourth image" className='img' />
                                        <img src={data.image5} alt="fifth image" className='img' />
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='des-head'>{data.descHead}</div>
                                <div className="description">
                                    <p className='des-text'>{data.address}</p>
                                </div>
                                <div className='icons--section'>
                                    <div className='icons'>
                                        <div className='icons-text'>
                                            <div className='icon-bed'>
                                                {data.icon_bed}
                                            </div>
                                            <div className='text-bed'>
                                                {data.text_bed}
                                            </div>
                                        </div>
                                        <div className='icons-text'>
                                            <div className='icon-bed'>
                                                {data.icon_bath}
                                            </div>
                                            <div className='text-bed'>
                                                {data.text_bath}
                                            </div>
                                        </div>
                                        <div className='icons-text'>
                                            <div className='icon-bed'>
                                                {data.icon_car}
                                            </div>
                                            <div className='text-bed'>
                                                {data.text_car}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='property-icon'>
                                    <div className='prop-icon'>
                                        {data.icon_building}
                                        <p className='icon-text'>{data.property_type}</p>
                                    </div>
                                    <div className='app-icon'>{data.apartment}</div>
                                </div>
                            </div>

                            <div className='container'>
                                <div className='sub-description'>{data.decsTextHead}</div>
                                <p className='sub-text'>{data.subDecsTextFirst}</p>
                                <p className='sub-text'>{data.subDecsTextSecond}</p>
                                <p className='sub-text'>{data.subDecsTextThird}</p>
                                <p className='sub-text'>{data.subDecsTextFourth}</p>
                                <p className='sub-text'>{data.subDecsTextFifth}</p>
                            </div>
                        </div>
                    }

                })

            }
        </div>
    )
}
export default PropertyDetaile;