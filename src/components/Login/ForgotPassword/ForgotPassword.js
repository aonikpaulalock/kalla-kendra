import React from 'react';

import bgCorner1 from "../../../Assets/bgCorner1.png";
import bgCorner2 from "../../../Assets/bgCorner2.png";
import bghome from "../../../Assets/bghome.png";
import Navbar3 from '../../Shared/Navbar/Navbar3';
const ForgotPassword = () => {
    return (
        <>
            <div className='relative'>
                <Navbar3></Navbar3>
            </div>
            <div className="absolute bg-cover">
                <img className="w-screen h-screen" src={bghome} alt="" />
                <img className="w-60  flex absolute left-0 top-0" src={bgCorner2} alt="" />
                <img className="w-60 absolute bottom-0 right-0 " src={bgCorner1} alt="" />
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="card bg-lightGrey bg-opacity-25 desktop:w-2/4 mobile:w-1/3 h-1/2 flex flex-col items-center justify-center">
                    <div>

                        <form className='flex flex-col items-center justify-center' >

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-base font-bold text-white">Email</span>

                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input desktop:w-96 mobile:w-1/3 bg-opacity-10"

                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base pt-3 font-bold text-white">Password</span>

                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input desktop:w-96 mobile:w-1/3 mb-6 bg-opacity-10"

                                />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base pt-3 font-bold text-white">Confirm Password</span>

                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input desktop:w-96 mobile:w-1/3 bg-opacity-10"

                                />

                            </div>



                            <input className="btn border-none w-56 bg-rosewood hover:bg-azure mt-8" type="submit" value='Next' />
                        </form>




                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;