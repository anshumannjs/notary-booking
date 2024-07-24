import React from 'react'
import { useState } from 'react';

const TypeofOrder = ({ formData, setFormData }) => {


    const [showServices, setShowServices] = useState({
        inoffice: true,
        mobile: false,
        ron: false,
    });


    return (
        <div className="container shadow-xl flex items-start border-2 mt-4 rounded-md overflow-auto border-notaryGrey flex-col p-4">
            <div className='w-full'>
                <h1 className="text-xl mx-auto font-bold">Select Your Type Of Order</h1>

                <div className='w-full flex justify-between mt-3'>
                    <div>
                        <input onClick={() => {
                            setFormData({
                                ...formData, isOnlineSigning: false, isInOffice: true, place: {
                                    completeAddress: "",
                                    lat: "",
                                    lon: "",
                                    zipcode: "",
                                    city: "",
                                    state: "",
                                    timeZone: "",
                                    area: "",
                                    streetAddress: "",
                                    place_id: "",
                                }
                            });
                            setShowServices({ inoffice: true, mobile: false, ron: false });
                        }} type="checkbox" name="Order" id="Order" value={1} />   In Office
                    </div>
                    <div>
                        <input onClick={() => {
                            setFormData({ ...formData, isOnlineSigning: true, isInOffice: false, place: null });
                            setShowServices({ inoffice: false, mobile: true, ron: false });
                        }} type="checkbox" name="Order" id="Order" value={1} />   Mobile
                    </div>
                    <div>
                        <input onClick={() => {
                            setFormData({ ...formData, isOnlineSigning: false, isInOffice: false });
                            setShowServices({ inoffice: false, mobile: false, ron: true });
                            setFormData({ ...formData, place: { ...formData.place } })
                        }} type="checkbox" name="Order" id="Order" value={1} />   RON
                    </div>
                </div>
            </div>

            <div className='w-full mt-6'>
                <h1 className="text-xl mx-auto font-bold">Select Services</h1>

                <div className='flex justify-between mt-3'>
                    <div className='inline'>
                        <input type="radio" name="" id="" />   Buyer
                    </div>
                    <div className='inline'>
                        <input type="radio" name="" id="" />   Seller
                    </div>
                    <div className='inline'>
                        <input type="radio" name="" id="" />   Refinance
                    </div>
                </div>
                <div className='flex justify-between mt-3'>
                    <div className='inline'>
                        <input type="radio" name="" id="" />   Deed Only
                    </div>
                    <div className='inline'>
                        <input type="radio" name="" id="" />   HELOC
                    </div>
                    <div className='inline'>
                        <input type="radio" name="" id="" />   Reverse Mortgage
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TypeofOrder;