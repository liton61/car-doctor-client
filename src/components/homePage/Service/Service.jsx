import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="lg:w-[580px] mx-auto text-center my-12">
            <h1 className="text-4xl font-semibold mb-5">Our Service Area</h1>
            <p className="text-sm font-medium">the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;