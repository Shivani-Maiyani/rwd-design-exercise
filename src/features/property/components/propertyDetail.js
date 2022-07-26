import React, { useEffect, useState, CSSProperties } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";

import "../styles/propertyDetaile.scss";
import "../styles/propertyDetailMedia.scss";

const PropertyDetail = () => {
    const [filterData, setFilterData] = useState([]);
    const [isFetching, setIsFeatching] = useState(true);
    const params = useParams();
    const state = useSelector(state => state.propertyDetailData)

    const override = CSSProperties = {
        display: "block",
        margin: "0 auto",
    };

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
    }, [isFetching])
    return (
        <div>
            {isFetching ? <div className='center'><PulseLoader color="#36d7b7" loading={isFetching} cssOverride={override} size={15} /></div>
                :
                <div className='detaile' key={filterData.id} >
                    <div className='property-detailes'>
                        <div className='title'>
                            <h1 className='title-head'>{filterData.title}</h1>
                            <p className='title-text'>{filterData.address}</p>
                        </div>
                    </div>
                    <div className="proprty-image">
                        <div className='olea-image'>
                            <img src={filterData.image1} alt="img" className='image' />
                        </div>
                        <div className='image-section'>
                            <div className="img-wraaper">
                                <img src={filterData.image2} alt="img" className='img' />
                                <img src={filterData.image3} alt="img" className='img' />
                            </div>
                            <div className="img-wraaper">
                                <img src={filterData.image4} alt="img" className='img' />
                                <img src={filterData.image5} alt="img" className='img' />
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
                                        {filterData.iconBed}
                                    </div>
                                    <div className='text-bed'>
                                        {filterData.textBed}
                                    </div>
                                </div>
                                <div className='icons-text'>
                                    <div className='icon-bed'>
                                        {filterData.iconBath}
                                    </div>
                                    <div className='text-bed'>
                                        {filterData.textBath}
                                    </div>
                                </div>
                                <div className='icons-text'>
                                    <div className='icon-bed'>
                                        {filterData.iconCar}
                                    </div>
                                    <div className='text-bed'>
                                        {filterData.textCar}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='property-icon'>
                            <div className='prop-icon'>
                                {filterData.iconBuilding}
                                <p className='icon-text'>{filterData.propertyType}</p>
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
export default PropertyDetail;