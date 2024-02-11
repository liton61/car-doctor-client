/* eslint-disable react/no-unescaped-entities */
import person from '../../assets/icons/person.svg';
import check from '../../assets/icons/check.svg';
import delivery from '../../assets/icons/delivery.svg';
import group from '../../assets/icons/group.svg';
import Wrench from '../../assets/icons/Wrench.svg';

const ChooseUs = () => {
    return (
        <div className='lg:w-3/4 mx-auto py-16 lg:px-0 px-5'>
            <div className=' py-5'>
                <p className="text-[#FF3811] font-semibold text-center">Core Features</p>
                <h1 className='text-center text-3xl font-bold pb-3'>Why Choose Us</h1>
                <p className='text-center lg:w-1/2 md:w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                <div className='border py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={person} alt="" />
                    </div>
                    <p className='font-semibold text-center'>24/7 Support</p>
                </div>
                <div className='border py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={check} alt="" />
                    </div>
                    <p className='font-semibold text-center'>Timely Delivery</p>
                </div>
                <div className='border py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={delivery} alt="" />
                    </div>
                    <p className='font-semibold text-center'>100% Guaranty</p>
                </div>
                <div className='border py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={group} alt="" />
                    </div>
                    <p className='font-semibold text-center'>Expert Team</p>
                </div>
                <div className='border py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={Wrench} alt="" />
                    </div>
                    <p className='font-semibold text-center'>Best Equipment</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;