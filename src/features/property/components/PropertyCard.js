import React, { useState } from 'react';
import { createStore } from 'redux';
import proprtyReducer from '../../../reducer/propertyReducer';
import "../../property/styles/PropertyCard.scss";
import "../../property/styles/propertyCardMedia.scss";
import PropertyCradDetail from './propertyCraddetail';
const PropertyCard = () => {

  const store = createStore(proprtyReducer);

  const Data = store.getState();
  const [foundUsers, setFoundUsers] = useState([]);

  const filterHandler = (event) => {
    const keyword = Data.filter = event.target.value;

    console.log(keyword, "keyword");
    if (keyword !== '') {
      const results = Data.propertyData.filter((user) => {
        return user.name.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(Data.propertyData);
      // If the text field is1 empty, show all users
    }
    Data.filteredProperty = Data.propertyData.filter((user) => {
      return user.name.toLowerCase().includes(keyword.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });
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
            value={Data.filter}
            onChange={filterHandler}
            className="input"
            placeholder="Filter Property"
          />
        </div>
        <div className='property-details'>
          {Data.filteredProperty.length > 0 ? (
            Data.filteredProperty.map((property) => (
              <PropertyCradDetail key={property.name} name={property.name} id={property.id} img={property.img} name_title={property.name_title} price={property.price} icon_bed={property.icon_bed} text_bed={property.text_bed} icon_bath={property.icon_bath} text_bath={property.text_bath} icon_car={property.icon_car} text_car={property.text_car} apartment={property.apartment} />
            ))
          ) :
            (
              Data.propertyData.map((property) => (

                <PropertyCradDetail key={property.name} name={property.name} id={property.id} img={property.img} name_title={property.name_title} price={property.price} icon_bed={property.icon_bed} text_bed={property.text_bed} icon_bath={property.icon_bath} text_bath={property.text_bath} icon_car={property.icon_car} text_car={property.text_car} apartment={property.apartment} />

              ))
            )
          }
        </div>
      </div>
    </div>
  )
}
export default PropertyCard;
