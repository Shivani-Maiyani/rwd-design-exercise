import { useForm } from "react-hook-form";
import "./form.scss";
import "./formMedia.scss";

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

const Form = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="container-form">
            <div className="form-section">
            <form className="form-wrraper">
            <div className='form-text'>Primary Form</div>
            <div className="form">
            <label>First Name</label>
                    <input
                    className="form-control"
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                {errors.firstName && <p>Please check the First Name</p>}
            </div>
            <div className="form">
            <label>Last Name</label>
                    <input
                    className="form-control"
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                {errors.lastName && <p>Please check the Last Name</p>}
                </div> 
                        <div className="form">
              <label>Country</label>
              <select  name="country" className="form-control select dropdown"  {...register("country",{required : true})}>
                {
                  country.map((country) =>(
                    <option value={country.name} id={country.id} key={country.id}
                  >{country.name}</option>
                  ))
                }
              </select>
              {errors.country && <p>Please select the country</p>}
            </div>
                <div className="form">
                <label>Email</label>
                    <input
                    className="form-control"
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                {errors.email && <p>Please check the Email</p>}
                </div>

          <div className="form">
            <label>Phone Number</label>
                    <input
                    className="form-control"
                        placeholder='Enter phone Number'
                        type="tel"
                        {...register("phone", { required: true, maxLength: 10,minLength: 10})}
                    />
                {errors.phone && <p>Please Enter a number</p>}
                </div> 
                    
                <div className="form">
            <label>Gender</label>
                    <label><input
                        className="form-control"
                        type="radio"
                        value="Male"
                        defaultChecked
                        {...register("gender", { required: true})}
                    />Male</label>
                    <label>
                    <input
                        className="form-control"
                        type="radio"
                        value="Female"
                        {...register("gender", { required: true})}
                    />Female
                    </label>
                   
                {errors.gender && <p>Please select gender</p>}
                </div> 
                
                
            </form>
            <form className="form-wrraper">
            <div className='form-text'>Secondary Form</div>
            <div className="form">
            <label>State</label>
            <select  name="mLike" className="form-control select dropdown" required id="dropdown">
            {
             State.map((state) => (<option >{state.name}</option>) )
            }
          </select>
          </div>
            </form>
            </div>

            <div className="form-btn">
                <button type='submit' className="submit-btn text-align" onClick={handleSubmit(onSubmit)}>Submit</button>
                </div>
            
        </div>
    )
}
export default Form;