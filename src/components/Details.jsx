import React, { useState } from 'react';
import mailIcon from '../assets/envelope.svg';
import callIcon from '../assets/phone-call.svg';
import markerIcon from '../assets/marker.svg';
import userIcon from '../assets/user.svg';
import { useData } from '../contexts/DataContext';

const Details = () => {

    const { getPersonalDet, getBusinessDet } = useData();
    const personaldetails = getPersonalDet();
    const businessdetails = getBusinessDet();

    const [data,setData]=useState(personaldetails.email);

    function handleClick(e){
        let a=e.target.id;
        if (a=='businessAddress'){
            setData(businessdetails.businessAddress);
        }
        else{
            setData(personaldetails[a]);
        }
    }
    

    return (
        <div className='container flex-col space-y-6 py-4 h-auto shadow-2xl bg-white flex md:fixed md:h-[100vh] md:w-[18vw] md:py-0'>
            <div className='flex flex-col mt-5'>
                {/* <h1 className='text-lg p-4 my-1 text-notaryYellow font-bold md:my-11 md:text-3xl mx-auto'>BeInsurance</h1> */}

                <img src={personaldetails.photoURL} className='w-20 h-20 rounded-full mx-auto'></img>

            </div>
            <h1 className='text-3xl text-black font-bold mb-9 mx-auto'>{personaldetails.username}</h1>

            <div className='flex md:block justify-between'>
                <div className='md:flex flex-row px-4 mb-3 gap-4'>
                    <img id='email' src={mailIcon} width='20px' height='16px' onClick={(e)=>handleClick(e)}></img>
                    <h6 className='text-black text-md font-medium hidden md:block'>{personaldetails.email}</h6>
                </div>
                <div className='md:flex flex-row px-4 mb-3 gap-4'>
                    <img id='phoneNumber' src={callIcon} width='20px' height='16px' onClick={(e)=>handleClick(e)}></img>
                    <h6 className='text-black text-md font-medium hidden md:block'>{personaldetails.phoneNumber}</h6>
                </div>
                <div className='md:flex flex-row px-4 mb-3 gap-4'>
                    <img id='businessAddress' src={markerIcon} width='20px' height='16px' onClick={(e)=>handleClick(e)}></img>
                    <h6 className='text-black text-md font-medium hidden md:block'>{businessdetails.businessAddress}</h6>
                </div>
                <div className='md:flex flex-row px-4 mb-3 gap-4'>
                    <img id='createdOn' src={userIcon} width='20px' height='16px' onClick={(e)=>handleClick(e)}></img>
                    <h6 className='text-black text-md font-medium hidden md:block'>{personaldetails.createdOn}</h6>
                </div>
            </div>

            <div className='text-center mx-auto md:hidden'>
                {data}
            </div>
        </div>
    )
}

export default Details