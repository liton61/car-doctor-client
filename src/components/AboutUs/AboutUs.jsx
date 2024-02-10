/* eslint-disable react/no-unescaped-entities */
import aboutImg from '../../assets/images/about_us/person.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:w-3/4 mx-auto lg:px-0 px-5">
                    <img src={aboutImg} className="lg:w-1/2 rounded" />
                    <div className='lg:w-1/2 lg:pl-10'>
                        <h1 className="text-4xl font-bold">We are qualified & of <span className='text-[#FF3811]'> experience</span> in this field.</h1>
                        <p className="py-5 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                        <div className='flex justify-evenly'>
                            <div>
                                <h1 className='text-5xl font-bold text-[#FF3811]'>500+</h1>
                                <p className='font-medium pt-3'>Happy Customers</p>
                            </div>
                            <div>
                                <h1 className='text-5xl font-bold text-[#FF3811]'>16+</h1>
                                <p className='font-medium pt-3'>Total Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;