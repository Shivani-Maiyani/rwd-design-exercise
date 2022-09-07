import React, { useState, useEffect } from 'react';
import "../../property/styles/PropertyCard.scss";
import "../../property/styles/propertyCardMedia.scss";
import PropertyCradDetail from './propertyCraddetail';
import { useSelector, useDispatch } from "react-redux";



const PropertyCard = () => {
  const [isFeatching, setIsFeatching] = useState(true)
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    setTimeout(() => {
      setIsFeatching(false);
    }, 1000);
  }, [])

  const filterHandler = (event) => {
    const keyword = state.filter = event.target.value;

    dispatch({ type: "ADD", payload: keyword })
    if (keyword !== '') {
      state.filteredProperty = state.propertyData.filter((user) => {
        return user.name.toLowerCase().includes(keyword.toLowerCase());
      });
    } else {
      state.filteredProperty = state.propertyData.filter((user) => {
        return user.name.toLowerCase().includes(keyword.toLowerCase());
      });
    }
    dispatch({ type: "FILTER_DATA", payload: state.filteredProperty })
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
        {isFeatching ? <h1 className="center">Loading......</h1> : <div className='property-details'>
          {state.filteredProperty.length > 0 ? (
            state.filteredProperty.map((property) => (
              <PropertyCradDetail key={property.name} name={property.name} id={property.id} img={property.img} name_title={property.name_title} price={property.price} icon_bed={property.icon_bed} text_bed={property.text_bed} icon_bath={property.icon_bath} text_bath={property.text_bath} icon_car={property.icon_car} text_car={property.text_car} apartment={property.apartment} />
            ))
          ) :
            (
              state.propertyData.map((property) => (

                <PropertyCradDetail key={property.name} name={property.name} id={property.id} img={property.img} name_title={property.name_title} price={property.price} icon_bed={property.icon_bed} text_bed={property.text_bed} icon_bath={property.icon_bath} text_bath={property.text_bath} icon_car={property.icon_car} text_car={property.text_car} apartment={property.apartment} />

              ))
            )
          }
        </div>}

      </div>
    </div>
  )
}
export default PropertyCard;
