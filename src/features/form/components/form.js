import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../form/styles/form.scss";
import "../../form/styles/formMedia.scss";
import "../../form/styles/switch.scss";

const country = [
  {
    'id': 1,
    'name': 'India'
  },
  {
    'id': 2,
    'name': 'Usa'
  },
  {
    'id': 3,
    'name': 'Canada'
  }
]

const State = [
  {
    'id': 1,
    'name': 'Delhi',
    'country_id': 1
  },
  {
    'id': 2,
    'name': 'Ahemdabad',
    'country_id': 1
  },
  {
    'id': 3,
    'name': 'Chennai',
    'country_id': 1
  },
  {
    'id': 4,
    'name': 'Texas',
    'country_id': 2
  },
  {
    'id': 5,
    'name': 'Alaska',
    'country_id': 2
  },
  {
    'id': 6,
    'name': 'Ohio',
    'country_id': 2
  },
  {
    'id': 7,
    'name': 'Florida',
    'country_id': 2
  },
  {
    'id': 8,
    'name': 'Nova Scotia',
    'country_id': 3
  },
  {
    'id': 9,
    'name': 'Nova Scotia',
    'country_id': 3
  },
  {
    'id': 10,
    'name': 'Quebec',
    'country_id': 3
  },
  {
    'id': 11,
    'name': 'Torento',
    'country_id': 3
  }
]

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectCountryId, setSelectedCountryId] = useState();
  const onSubmit = (data) => {
    console.log(data);
  }
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCountryId(value);
  }
  const sateAvailable = State.filter((country) => country.country_id == selectCountryId);

  return (
    <div className="container-form">
      <div className="form-section">
        <div className="form-wrraper form--data">
          <div className='form-text'>Primary Form</div>
          <div className="form">
            <label>First Name</label>
            <input
              className="form-control"
              placeholder='First Name'
              type="text"
              {...register("firstName", { required: true, maxLength: 30, minLength: 3 })}
            />
            {errors.firstName && <p className="error-massege">First Name must be Required!</p>}
          </div>
          <div className="form">
            <label>Last Name</label>
            <input
              className="form-control"
              placeholder='Last Name'
              type="text"
              {...register("lastName", { required: true, maxLength: 30, minLength: 3 })}
            />
            {errors.lastName && <p className="error-massege">Last Name must be Required</p>}
          </div>
          <div className="form form-dropdown">
            <label>Country</label>
            <select name="country" className="form-control select dropdown"  {...register("country", { required: true })} onChange={handleChange}>
              <option value="">Select Country</option>
              {
                country.map((country) => (
                  <option value={country.id} id={country.id} key={country.id}
                  >{country.name}</option>
                ))
              }
            </select>
            {errors.country && <p className="error-massege">Country must be Required!</p>}
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
            <p className='error-massege'>
              {errors.email?.type === 'required' &&
                'Email is required !'}
              {errors.email?.type === 'pattern' &&
                'Email is in wrong format please enter a valid email!'}
            </p>
          </div>

          <div className="form">
            <label>Phone Number</label>
            <input
              className="form-control"
              placeholder='Enter phone Number'
              type="number"
              maxLength={10}
              {...register("phoneNumber", { required: true, maxLength: 10, minLength: 10 })}
            />
            {errors.phoneNumber && <p className="error-massege">PhoneNumber must be 10 degits!</p>}
          </div>

          <div className="form">
            <label>Gender</label>
            <div className="form-gender">
              <label><input
                className="form-control"
                type="radio"
                value="male"
                defaultChecked
                {...register("gender", { required: true })}
              />Male</label>
              <label>
                <input
                  className="form-control"
                  type="radio"
                  value="female"
                  {...register("gender", { required: true })}
                />Female
              </label>
            </div>
            {errors.gender && <p className="error-massege">Gender must be Required!</p>}
          </div>
        </div>
        <div className="form-wrraper form--data">
          <div className='form-text'>Secondary Form</div>
          <div className="form form-dropdown">
            <label>State</label>
            <select name="mLike" className="form-control select dropdown"  {...register("state", { required: true })}>
              <option value="">Select State</option>
              {
                sateAvailable.map((state) => (<option key={state.id} country_id={state.country_id}>{state.name}</option>))
              }
            </select>
            {errors.state && <p className="error-massege">State must be Required!</p>}
          </div>

          <div className="form">
            <label>Send Email Notification</label>
            <input
              {...register("emailVerify")}
              defaultChecked
              className="react-switch-checkbox"
              id={`react-switch-new`}
              type="checkbox"
            />
            <label
              className="react-switch-label"
              htmlFor={`react-switch-new`}
            >
              <span className={`react-switch-button`} />
            </label>

          </div>
          <div className="form">
            <label>Send Mobile Notification</label>
            <input
              {...register("mobileVerify")}
              defaultChecked
              className="switch-checkbox"
              id={`switch-new`}
              type="checkbox"
            />
            <label
              className="switch-label"
              htmlFor={`switch-new`}
            >
              <span className={`switch-button`} />
            </label>

          </div>
        </div>
      </div>

      <div className="form-btn">
        <button type='submit' className="submit-btn text-align" onClick={handleSubmit(onSubmit)}>Submit</button>
      </div>

    </div>
  )
}
export default Form;