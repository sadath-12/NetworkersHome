import React from 'react'
import Layout from '../../components/Layout'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import { BsPerson, BsTelephone } from 'react-icons/bs'
import { HiOutlineMailOpen } from 'react-icons/hi'
import Button from '../../components/common/Button'
import Head from 'next/head'
import { useForm, ValidationError } from '@formspree/react';

const index = () => {
    const [state, handleSubmit] = useForm("mpzoyzyr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <Layout>
            <Head>
                <title>Contact Us | NetworkersHome</title>
            </Head>
            <div className="container border-b border-gray-300 pb-12 my-12 flex flex-col space-y-8">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>Contact us</h1>
                <p className='text-lg md:text-xl'>Head Office: L-149, Sector 6, HSR Layout, Bangalore-560102</p>
                <div className="flex">
                    <a href="tel:+919611027980" className="bg-themeDark font-semibold text-white py-2 px-6">India : +919611027980</a>
                    <a href="tel:+971526142450" className="bg-themeColor font-semibold text-white py-2 px-6">UAE : +971526142450</a>
                </div>
            </div>
            <div className="container grid gap-10 grid-cols-1 lg:grid-cols-2">
                <div className="w-full h-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.536416677523!2d77.6321219!3d12.9151697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6908c0bcd3bc3460!2sNETWORKERS%20HOME%20-%20CCIE%20CCNP%20and%20CCNA%20Training%20company%20offering%20AWS%2C%20CEH%20and%20Cyber%20security%20training%20courses!5e0!3m2!1sen!2sae!4v1655464379255!5m2!1sen!2sae" width="600" height="650" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form onSubmit={handleSubmit} className="w-full p-10 flex flex-col space-y-6 h-full ">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor='name' className='text-base opacity-80'>Your name*</label>
                        <div className="flex focus-within:shadow-md items-center border border-themeColor rounded-full p-2 overflow-hidden">
                            <div className="w-fit p-2 h-full bg-gray-100 rounded-full">
                                <BsPerson className='text-2xl text-themeColor' />
                            </div>
                            <input
                                id='name'
                                type="text"
                                name='name'
                                className="flex-1 p-2 outline-none "
                                placeholder='Enter your name'
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor='Email' className='text-base opacity-80'>Email address *</label>
                        <div className="flex focus-within:shadow-md items-center border border-themeColor rounded-full p-2 overflow-hidden">
                            <div className="w-fit p-2 h-full bg-gray-100 rounded-full">
                                <HiOutlineMailOpen className='text-2xl text-themeColor' />
                            </div>
                            <input
                                id='Email'
                                name='email'
                                type="email"
                                className="flex-1 p-2 outline-none "
                                placeholder='Enter your Email'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor='Phone' className='text-base opacity-80'>Phone Number *</label>
                        <div className="flex focus-within:shadow-md items-center border border-themeColor rounded-full p-2 overflow-hidden">
                            <div className="w-fit p-2 h-full bg-gray-100 rounded-full">
                                <BsTelephone className='text-2xl text-themeColor' />
                            </div>
                            <input
                                id='Phone'
                                name='phone'
                                type="text"
                                className="flex-1 p-2 outline-none "
                                placeholder='Enter Mobile Number'
                            />
                            <ValidationError
                                prefix="Phone"
                                field="phone"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <textarea
                        cols="30"
                        className='border border-themeColor outline-none p-4 rounded-xl focus:shadow-md'
                        rows="6"
                        name='message'
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <div className="flex flex-col space-y-4 py-6 border-t border-gray-300">
                        <div className="flex space-x-4 items-center">
                            <input type="checkbox" />
                            <p className='text-base'>I agree with <span className='text-themeColor'>Terms of Use</span> and  <span className='text-themeColor'>Privacy Policy.</span></p>
                        </div>
                        <button disabled={state.submitting} className="w-[10rem]"> <Button text={'Submit'} /></button>
                    </div>
                </form>
            </div>
            <ArticlesAndCourses />

        </Layout>
    )
}

export default index