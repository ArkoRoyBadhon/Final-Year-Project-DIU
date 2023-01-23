import React from 'react';
import mailSend from '../../assets/image/mail-send.jpg';

const GetInTouch = () => {
    return (
        <div className='pt-28'>
            <div className='shadow-md bg-green-200 w-[92%] max-w-[1440px] mx-auto  rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10 p-10 py-16 '>
                <div className=''>
                    <h2 className='text-3xl font-bold mb-3'>Get In Touch</h2>
                    <p className='text-lg text-[#727272]'>Our friendly team would love to hear from you!</p>
                    <div className='flex flex-col gap-5 mt-7'>
                        <div>
                            <p>First Name</p>
                            <input type="text" placeholder="first name" className="input input-bordered w-full mt-1" />
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text" placeholder="last name" className="input input-bordered w-full mt-1" />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="text" placeholder="email" className="input input-bordered w-full mt-1" />
                        </div>
                        <div>
                            <p>Message</p>
                            <textarea type="text" placeholder="type your message" className="input input-bordered w-full h-[100px] py-3 mt-1" />
                        </div>
                        <div>
                            <button className='btn btn-primary bg-[#224229] border-0'>Send message</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg' src={mailSend} alt="" />
                </div>
            </div>

        </div>
    );
};

export default GetInTouch;