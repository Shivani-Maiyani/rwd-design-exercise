import React, { useEffect, useState } from 'react';
import "../styles/propertyDetaile.scss";
import "../styles/propertyDetailMedia.scss";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PropertyDetaile = () => {
    const [filterData, setFilterData] = useState([]);
    const [isFetching, setIsFeatching] = useState(true);
    const params = useParams();
    const state = useSelector(state => state.propertyDetailData)

    useEffect(() => {
        state.map((data) => {
            if (params.id.toString() === data.id) {
                setFilterData(data);
            }
            else {
                return ""
            }
        })
        setTimeout(() => {
            setIsFeatching(false);
        }, 1000);
    }, [])
    return (
        <div>
            {isFetching ? <h1 className='center'>Data is Featching.....</h1> : <div div className='detaile' key={filterData.id} >
                <div className='property-detailes'>
                    <div className='title'>
                        <h1 className='title-head'>{filterData.title}</h1>
                        <p className='title-text'>{filterData.address}</p>
                    </div>
                </div>
                <div className="proprty-image">
                    <div className='olea-image'>
                        <img src={filterData.image1} alt="first Image" className='image' />
                    </div>
                    <div className='image-section'>
                        <div className="img-wraaper">
                            <img src={filterData.image2} alt="second image" className='img' />
                            <img src={filterData.image3} alt="thired image" className='img' />
                        </div>
                        <div className="img-wraaper">
                            <img src={filterData.image4} alt="fourth image" className='img' />
                            <img src={filterData.image5} alt="fifth image" className='img' />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='des-head'>{filterData.descHead}</div>
                    <div className="description">
                        <p className='des-text'>{filterData.address}</p>
                    </div>
                    <div className='icons--section'>
                        <div className='icons'>
                            <div className='icons-text'>
                                <div className='icon-bed'>
                                    {filterData.icon_bed}
                                </div>
                                <div className='text-bed'>
                                    {filterData.text_bed}
                                </div>
                            </div>
                            <div className='icons-text'>
                                <div className='icon-bed'>
                                    {filterData.icon_bath}
                                </div>
                                <div className='text-bed'>
                                    {filterData.text_bath}
                                </div>
                            </div>
                            <div className='icons-text'>
                                <div className='icon-bed'>
                                    {filterData.icon_car}
                                </div>
                                <div className='text-bed'>
                                    {filterData.text_car}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='property-icon'>
                        <div className='prop-icon'>
                            {filterData.icon_building}
                            <p className='icon-text'>{filterData.property_type}</p>
                        </div>
                        <div className='app-icon'>{filterData.apartment}</div>
                    </div>
                </div>

                <div className='container'>
                    <div className='sub-description'>{filterData.decsTextHead}</div>
                    <p className='sub-text'>{filterData.subDecsTextFirst}</p>
                    <p className='sub-text'>{filterData.subDecsTextSecond}</p>
                    <p className='sub-text'>{filterData.subDecsTextThird}</p>
                    <p className='sub-text'>{filterData.subDecsTextFourth}</p>
                    <p className='sub-text'>{filterData.subDecsTextFifth}</p>
                </div>
            </div>}

        </div>
    )
}
export default PropertyDetaile;