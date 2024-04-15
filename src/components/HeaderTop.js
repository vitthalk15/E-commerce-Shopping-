import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>
                    <div className='header_top__icon_wrapper'><BsFacebook/></div>
                    <div className='header_top__icon_wrapper'><BsTwitter/></div>
                    <div className='header_top__icon_wrapper'><BsInstagram/></div>
                    <div className='header_top__icon_wrapper'><BsLinkedin/></div>
                </div>
                <div className='text-gray-700 text-md'>
                    <strong>FREE SHIPPING </strong>
                    THIS WEEK ORDER OVER - $55
                </div>
                <div className='flex gap-3'>
                    <select name='currency' id='currency' className="text-gray-700 text-[14px] w-[70px] cursor-pointer">
                        <option value='USD $'>USD $</option>
                        <option value='INR ₹'>INR ₹</option>
                        <option value='EUR €'>EUR €</option>
                    </select>

                    <select name='language' id='language' className="text-gray-700 text-[15px] w-[80px] cursor-pointer">
                        <option value='English'>English</option>
                        <option value='Hindi'>Hindi</option>
                        <option value='Marathi'>Marathi</option>
                        <option value='French'>French</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop