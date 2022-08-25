import React, { useState } from 'react';
import { createStore } from 'redux';
import proprtyReducer from '../../../reducer/propertyReducer';
import "../../property/styles/PropertyCard.scss";
import "../../property/styles/propertyCardMedia.scss";
import { Link } from 'react-router-dom';
const PropertyCard = (props) => {
  const [name, setName] = useState('');

  // the search result
  const store = createStore(proprtyReducer);

  const propertyData = store.getState();
  const [foundUsers, setFoundUsers] = useState([]);

  const filterHandler = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = propertyData.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
      console.log(foundUsers);
    } else {
      setFoundUsers(propertyData);
      // If the text field is empty, show all users
    }

    setName(keyword);
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
            value={name}
            onChange={filterHandler}
            className="input"
            placeholder="Filter Property"
          />
        </div>
        <div className='property-details'>
          {foundUsers.length > 0 ? (
            foundUsers.map((property) => (
              <div className='property--details width-0' key={property.name}>
                <div className='images'>
                  <div className='cover-overlay width-overlay'>
                    <Link to="/PropertyDetaile">
                      <button className='cart-button'>View Details</button>
                    </Link>
                  </div>
                  <img src={property.img} alt="image" className='property-img' />
                </div>
                <div className='property-name'>
                  <h4>{property.name}</h4>
                </div>

                <div className='property-title'>
                  <p>{property.name_title}</p>
                </div>
                <div className='property-price'>{property.price}</div>
                <div className='icons--section'>
                  <div className='icons'>
                    <div className='icons-text'>
                      <div className='icon-bed'>
                        {property.icon_bed}
                      </div>
                      <div className='text-bed'>
                        {property.text_bed}
                      </div>
                    </div>
                    <div className='icons-text'>
                      <div className='icon-bed'>
                        {property.icon_bath}
                      </div>
                      <div className='text-bed'>
                        {property.text_bath}
                      </div>
                    </div>
                    <div className='icons-text'>
                      <div className='icon-bed'>
                        {property.icon_car}
                      </div>
                      <div className='text-bed'>
                        {property.text_car}
                      </div>
                    </div>
                  </div>
                  <div className='property-apt'>{property.apartment}</div>
                </div>
              </div>
            ))
          ) :
            (
              propertyData.map((property) => (
                <div className='property--details' key={property.name}>
                  <div className='images'>
                    <div className='cover-overlay'>
                      <Link to="/PropertyDetaile">
                        <button className='cart-button'>View Details</button>
                      </Link>
                    </div>
                    <img src={property.img} alt="image" className='property-img' />
                  </div>
                  <div className='property-name'>
                    <h4>{property.name}</h4>
                  </div>

                  <div className='property-title'>
                    <p>{property.name_title}</p>
                  </div>
                  <div className='property-price'>{property.price}</div>
                  <div className='icons--section'>
                    <div className='icons'>
                      <div className='icons-text'>
                        <div className='icon-bed'>
                          {property.icon_bed}
                        </div>
                        <div className='text-bed'>
                          {property.text_bed}
                        </div>
                      </div>
                      <div className='icons-text'>
                        <div className='icon-bed'>
                          {property.icon_bath}
                        </div>
                        <div className='text-bed'>
                          {property.text_bath}
                        </div>
                      </div>
                      <div className='icons-text'>
                        <div className='icon-bed'>
                          {property.icon_car}
                        </div>
                        <div className='text-bed'>
                          {property.text_car}
                        </div>
                      </div>
                    </div>
                    <div className='property-apt'>{property.apartment}</div>
                  </div>
                </div>

              ))
            )
          }
        </div>
      </div>
    </div>
  )
}
export default PropertyCard;
