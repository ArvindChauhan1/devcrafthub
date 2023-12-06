import React from 'react'

const LandingPage = () => {
    return (
        <>
            <section className="px-24 py-44 bg-landing">
                <div className="w-full flex justify-around items-center h-full text-white">
                    <div className='w-1/2'>
                        <h1 className='font-semibold text-2xl flex-col'>DevTechHub</h1>
                        <p className='my-3'>explore a wide variety of creative projects in different categories of software world</p>
                        <button className='p-3 my-3 bg-primary-red rounded-lg text-white'>
                            Get Started
                        </button>
                    </div>
                    <div className='w-1/2 flex flex-row-reverse'>
                        <img src="/r2.png" alt="image" className='image-blurred-edge' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage