import React, { useState } from 'react';
import "./form.scss";

const Form = () => {
  const country = [
    {
      'id':1,
      'name':'India'
    },
    {
      'id':2,
      'name':'Usa'
    },
    {
      'id':3,
      'name':'Canada'
    }
  ]
  
  const State = [
    {
      'id':1,
      'name':'Delhi',
      'country_id':1
    },
    {
      'id':2,
      'name':'Ahemdabad',
      'country_id':1
    },
    {
      'id':3,
      'name':'Chennai',
      'country_id':1
    },
    {
      'id':4,
      'name':'Texas',
      'country_id':2
    },
    {
      'id':5,
      'name':'Alaska',
      'country_id':2
    },
    {
      'id':6,
      'name':'Ohio',
      'country_id':2
    },
    {
      'id':7,
      'name':'Florida',
      'country_id':2
    },
    {
      'id':8,
      'name':'Nova Scotia',
      'country_id':3
    },
    {
      'id':9,
      'name':'Nova Scotia',
      'country_id':3
    },
    {
      'id':10,
      'name':'Quebec',
      'country_id':3
    },
    {
      'id':11,
      'name':'Torento',
      'country_id':3
    }
  ]

  const [inputs,setInputs] = useState({});

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  
  const handleClick = (event) => {
   event.preventDefault();
   console.log(inputs);
  }
  return (
    <div className='container-form'>
      <div className='form-section'>
      <form className='form-wrraper'>
        <div className='form-text'>Primary Form</div>
          <div className="form">
      <label id="fname-label" htmlFor="fname">First Name</label>
      <input type="text" name="fname" className="form-control" placeholder="Enter Your First Name" minLength={3} maxLength={30} value={inputs.fname}  onChange={handleChange} required={true}/>
         </div>
         <div className="form">
      <label id="lname-label" htmlFor="lname">Last Name</label>
      <input type="text" name="lname" className="form-control" placeholder="Enter Your Last Name" minLength={3} maxLength={30} onChange={handleChange} value={inputs.lname} required/>
         </div>
         <div className="form">
      <label htmlFor="country">
        Country
      </label>
      <select  name="country" className="form-control select dropdown" onChange={handleChange} value={inputs.country} required>
        {
          country.map((country) => (
            <option value={country.name} id={country.id} key={country.id}>{country.name}</option>
          ))
        }
      </select>
    </div>
   <div className="form">
   <label id="email-label" htmlFor="email">Email</label>
      <input type="email" name="email" className="form-control" placeholder="Enter your email"  onChange={handleChange} value={inputs.email} required/>
    </div>
    <div className="form">
   <label id="phone-label" htmlFor="email">PhoneNumber</label>
      <input type="tel" name="phone" className="form-control" placeholder="Enter your Phone Number"  maxLength="10" onChange={handleChange} value={inputs.num} required />
    </div>
     <div className="form">
      <label>Gender</label>
      <label><input name="gender" value="Male" type="radio" className="radio" onChange={handleChange} defaultChecked/>Male</label>
      <label><input name="gender" value="Female" type="radio" className="radio" onChange={handleChange} />Female</label>
    </div>
      
     
          </form>
          <form className='form-wrraper'>
            <div className='form-text'>Secondary Form</div>
            {/* <div class="form">
      <label>
        What is your favorite feature of freeCodeCamp?
      </label>
      <select  name="mLike" class="form-control select" required="" id="dropdown">
        <option disabled="" selected="" value="">Select an option</option>
        <option value="challenges">Challenges</option>
        <option value="projects">Projects</option>
        <option value="community">Community</option>
        <option value="openSource">Open Source</option>
      </select>
    </div> */}
   <div className="form">
   <label id="email-label" htmlFor="email">Email</label>
      <input type="email" name="email" className="form-control" placeholder="Email verification" required/>
    </div>
    <div className="form">
   <label id="phone-label" htmlFor="email">PhoneNumber</label>
      <input type="tel" name="phone" className="form-control" placeholder="Number Verification" required  maxLength="10"/>
    </div>
      
     
    </form>
      </div>
      <div className='form-btn'>
      <button type="submit" id="submit" className="submit-btn text-align" onClick={handleClick}>
        Submit
      </button>
      </div>
        
       
    </div>
   
  )
}
export default Form;
