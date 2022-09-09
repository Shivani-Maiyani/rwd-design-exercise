import React, { useState, useEffect, CSSProperties } from 'react';
import { useSelector, useDispatch } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

import "../../property/styles/PropertyCard.scss";
import "../../property/styles/propertyCardMedia.scss";

import PropertyCradDetail from './propertyCarddetail';

const PropertyCard = () => {
  const [isFeatching, setIsFeatching] = useState(true)
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const override = CSSProperties = {
    display: "block",
    textalign: "center",
  };
  useEffect(() => {
    setTimeout(() => {
      setIsFeatching(false);
    }, 1000);
  }, [])

  const filterHandler = (event) => {
    const keyword = state.filter = event.target.value;
    dispatch({ type: "ADD", payload: keyword })
  };

  return (
    <div>
      <div className='container'>
        <div className='property-header'>
          <h2>Australia's best investment property deals</h2>
        </div>
        <div className="search-input">
          <input
            type="search"
            value={state.filter}
            onChange={filterHandler}
            className="input"
            placeholder="Filter Property"
          />
        </div>
        {isFeatching ? <div className='center'><SyncLoader color={"rgba(214, 54, 54, 0.35)"} loading={isFeatching} cssOverride={override} size={15} /></div> : <div className='property-details'>
          {state.propertyData.length > 0 &&
            state.propertyData.map((property, index) => {

              if (state.filter ? property.name.toLowerCase().includes(state.filter) : true) {

                return <PropertyCradDetail
                  key={index}
                  name={property.name}
                  id={property.id}
                  img={property.img}
                  nameTitle={property.nameTitle}
                  price={property.price}
                  iconBed={property.iconBed}
                  textBed={property.textBed}
                  iconBath={property.iconBath}
                  textBath={property.textBath}
                  iconCar={property.iconCar}
                  textCar={property.textCar}
                  apartment={property.apartment} />
              }
            })
          }
        </div>
        }
      </div>
    </div>
  )
}
export default PropertyCard;
