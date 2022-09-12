import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Switch } from "@material-ui/core";

import "../styles/form.scss";
import "../styles/formMedia.scss";

import { country } from '../../../shared/constant/constant';
import { AllState } from '../../../shared/constant/constant';

const SignupSchema =
    Yup.object().shape({
        firstName: Yup.string().required("FirstName is Required!"),
        lastName: Yup.string().required("LastName is Required!"),
        country: Yup.string().required("Country is Required!"),
        gender: Yup.string().required("Gender is Required!"),
        email: Yup.string()
            .required('Email is required!')
            .email('Email is invalid.'),
        phoneNumber: Yup.number().required("Phone Number is Required!"),
        state: Yup.string().required("State is Required!")
    })

let Register = () => {

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    country: '',
                    email: '',
                    phoneNumber: '',
                    gender: '',
                    state: '',
                    mobileNotification: true,
                    emailNotification: true,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >

                {({ errors, touched, setFieldValue, values }) => (
                    <Form>
                        <div className="container-form">
                            <div className="form-section">
                                <div className="form-wrraper form--data">
                                    <div className='form-text'>Primary Form</div>
                                    <div className="form">
                                        <label>First Name</label>
                                        <Field type="text" name="firstName" className="form-control"
                                            placeholder='First Name' />
                                        {errors.firstName && touched.firstName ? (
                                            <p className="error-massege">{errors.firstName}</p>
                                        ) : null}
                                    </div>
                                    <div className="form">
                                        <label>Last Name</label>
                                        <Field type="text" name="lastName" className="form-control"
                                            placeholder='Last Name' />
                                        {errors.lastName && touched.lastName ? (
                                            <p className="error-massege">{errors.lastName}</p>
                                        ) : null}
                                    </div>
                                    <div className="form form-dropdown">
                                        <label>Country</label>
                                        <Field name="country" className="form-control select dropdown" as="select">
                                            <option value="">Select Country</option>
                                            {
                                                country.map((country) => (
                                                    <option value={country.id} id={country.id} key={country.id}
                                                    >{country.name}</option>
                                                ))
                                            }
                                        </Field>
                                        {errors.country && touched.country ? (
                                            <p className="error-massege">{errors.country}</p>
                                        ) : null}
                                    </div>
                                    <div className="form">
                                        <label>Email</label>
                                        <Field type="email" name="email" className="form-control"
                                            placeholder='Email' />
                                        {errors.email && touched.email ? (
                                            <p className="error-massege">{errors.email}</p>
                                        ) : null}
                                    </div>
                                    <div className="form">
                                        <label>Phone Number</label>
                                        <Field type="number" name="phoneNumber" className="form-control"
                                            placeholder='Phone Number' />
                                        {errors.phoneNumber && touched.phoneNumber ? (
                                            <p className="error-massege">{errors.phoneNumber}</p>
                                        ) : null}
                                    </div>
                                    <div className="form">
                                        <label>Gender</label>
                                        <label><Field type="radio" name="gender" value="male" className="form-control"
                                        />Male</label>
                                        <label><Field type="radio" name="gender" value="female" className="form-control" />Female</label>
                                        {errors.gender && touched.gender ? (
                                            <p className="error-massege">{errors.gender}</p>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="form-wrraper form--data">
                                    <div className='form-text'>Secondary Form</div>
                                    <div className="form form-dropdown">
                                        <label>State</label>
                                        <Field name="state" className="form-control select dropdown" component="select">
                                            <option value="">Select State</option>
                                            {
                                                AllState.map((state) => {
                                                    if (state.country_id == values.country) {
                                                        return <option key={state.id} country_id={state.country_id}>{state.name}</option>
                                                    }
                                                })
                                            }
                                        </Field>
                                        {errors.state && touched.state ? (
                                            <p className="error-massege">{errors.state}</p>
                                        ) : null}

                                    </div>
                                    <div className="form">
                                        <label>Send Email Notification</label>
                                        <Switch
                                            name="emailNotification"
                                            checked={values.emailNotification === true}
                                            onChange={(event, checked) => {
                                                setFieldValue("emailNotification", checked ? true : false);
                                            }}
                                        />

                                    </div>
                                    <div className="form">
                                        <label>Send Mobile Notification</label>
                                        <Switch
                                            name="mobileNotification"
                                            checked={values.mobileNotification === true}
                                            onChange={(event, checked) => {
                                                setFieldValue("mobileNotification", checked ? true : false);
                                            }}
                                        />

                                    </div>

                                </div>
                            </div>
                            <div className="form-btn">
                                <button type='submit' className="submit-btn text-align">Submit</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default Register;