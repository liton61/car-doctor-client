/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
            <p className="text-[#FF3811] font-semibold text-center">Services</p>
            <h1 className="text-4xl text-center font-bold">Our <span className="text-[#FF3811]">Service</span> Area</h1>
            <p className="lg:w-1/2 mx-auto text-center pt-3">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;