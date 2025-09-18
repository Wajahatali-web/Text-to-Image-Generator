import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {
    const {user,setshowLogin} = useContext(AppContext)
    const Navigate = useNavigate()

    return (
        <div className='flex justify-between items-center py-4'>
            <Link to='/'><img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' /></Link>
            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={() => { Navigate('/buy') }} className='flex items-center gap-2 bg-gray-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-5' src={assets.credit_star} alt="" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left : 50</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, Wajahat</p>
                        <div className='relative group'>
                            <img src={assets.profile_icon} alt="" className='w-10 drop-shadow' />
                            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                            <ul className='bg-white list-none m-0 p-2 rounded-md border text-sm'>
                                <li className='cursor-pointer py-1 px-2'>Logout</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-4 sm:gap-5'>
                        <p onClick={() => { Navigate('/buy') }} className='cursor-pointer'>Pricing</p>
                        <button onClick={()=>setshowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
                    </div>
                }
            </div>
        </div>

    )
}

export default Navbar
