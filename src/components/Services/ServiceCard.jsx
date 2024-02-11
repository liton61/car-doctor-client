/* eslint-disable react/prop-types */


const ServiceCard = ({ service }) => {
    const { title, img, price, } = service;
    return (
        <div>
            <div className="card card-compact border border-[#FF3811] rounded-none">
                <figure><img className="h-48 w-full" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-[#FF3811]">Price : ${price}</p>
                        <button><i className="fa-solid fa-arrow-right text-[#FF3811]"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;