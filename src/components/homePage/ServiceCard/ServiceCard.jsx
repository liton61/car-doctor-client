/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const {_id, img, title, price } = service;
    return (
        <div>
            <div className="card card-compact lg:w-96 md:w-80 w-96 bg-base-100 shadow-xl mx-auto mb-7">
                <figure><img className="h-56 w-full" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between items-center">
                        <h4 className="text-base font-semibold text-primary">Price : ${price}</h4>
                        <Link to={`/checkOut/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;