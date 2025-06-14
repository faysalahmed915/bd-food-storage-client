import React from 'react';
import CountUp from 'react-countup';

const AddCountUp = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center flex-col">
                <div>
                    <h1 className="text-3xl font-bold">Our Records and Successes</h1>
                    <p className="py-6 w-3/4 mx-auto">
                        Our platform connects you with verified, Secured and popular payment gateways across various countries — all at your convenience.
                    </p>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-around'>

                    <div className="card bg-base-100 shadow-sm p-4 grid gap-2 min-w-40">
                        <img className='w-10 h-10 rounded-full justify-self-start'
                            src="https://i.ibb.co.com/KpjCtjwQ/success-doctor.png"
                            alt="Doctors" />
                        <p className='text-4xl font-bold text-left'><CountUp end={5199} duration={5} />+</p>
                        <p className='text-left'>Active Users</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm p-4 grid gap-2 min-w-40">
                        <img className='w-10 h-10 rounded-full justify-self-start'
                            src="https://i.ibb.co.com/2342w5pj/success-review.png"
                            alt="Reviews" />
                        <p className='text-4xl font-bold text-left'><CountUp end={13467} duration={5} />+</p>
                        <p className='text-left'>Total Reviews</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm p-4 grid gap-2 min-w-40">
                        <img className='w-10 h-10 rounded-full justify-self-start'
                            src="https://i.ibb.co.com/vx7hGJr5/success-patients.png"
                            alt="Patients" />
                        <p className='text-4xl font-bold text-left'><CountUp end={19000} duration={5} />+</p>
                        <p className='text-left'>Total Users</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm p-4 grid gap-2 min-w-40">
                        <img className='w-10 h-10 rounded-full justify-self-start'
                            src="https://i.ibb.co.com/N6CxcLmH/success-staffs.png"
                            alt="Stuffs" />
                        <p className='text-4xl font-bold text-left'><CountUp end={37} duration={5} />+</p>
                        <p className='text-left'>Total Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCountUp;