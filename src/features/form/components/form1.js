import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from "react";

import "../styles/form.scss";
import "../styles/formMedia.scss";
import "../styles/switch.scss";
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
                }}
                onSubmit={async (values) => {
                    console.log(values);
                }}
            >
                {({ values }) => (
                    <Form>
                        <div className="container-form">
                            <div className="form-section">
                                <div className="form-wrraper form--data">
                                    <div className='form-text'>Primary Form</div>
                                    <div className="form">
                                        <label>First Name</label>
                                        <Field type="text" name="firstName" className="form-control"
                                            placeholder='First Name' />
                                    </div>
                                    <div className="form">
                                        <label>Last Name</label>
                                        <Field type="text" name="lastName" className="form-control"
                                            placeholder='Last Name' />
                                    </div>
                                    <div className="form form-dropdown">
                                        <label>Country</label>
                                        <Field name="country" className="form-control select dropdown" component="select">
                                            <option value="">Select Country</option>
                                            {
                                                country.map((country) => (
                                                    <option value={country.id} id={country.id} key={country.id}
                                                    >{country.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <div className="form">
                                        <label>Email</label>
                                        <Field type="email" name="email" className="form-control"
                                            placeholder='Email' />
                                    </div>
                                    <div className="form">
                                        <label>Phone Number</label>
                                        <Field type="number" name="phoneNumber" className="form-control"
                                            placeholder='Phone Number' />
                                    </div>
                                    <div className="form">
                                        <label>Gender</label>
                                        <label><Field type="radio" name="gender" value="Male" className="form-control" />Male</label>
                                        <label><Field type="radio" name="gender" value="Female" className="form-control" />Female</label>
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
