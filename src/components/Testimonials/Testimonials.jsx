import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20 lg:w-3/4 mx-auto lg:px-0 px-5">
            <div className='w-64 mx-auto my-10'>
                <p className='text-[#FF3811] text-center font-semibold mb-2'>---What Our Clients Say---</p>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>TESTIMONIALS</h3>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="lg:w-3/4 mx-auto flex flex-col items-center p-10 my-16 border">
                            <img className="w-20 h-20 rounded-full" src={review.image} alt="" />
                            <h3 className="text-2xl mt-2 text-orange-400">{review.name}</h3>
                            <p className="py-5 text-justify">{review.details}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;