/* eslint-disable react/prop-types */


const ProductCard = ({ product }) => {
    const { img, title, price } = product;
    return (
        <div>
            <div className="card card-compact border border-[#FF3811] rounded-none">
                <figure><img className="h-48 w-full" src={img} alt="" /></figure>
                <div className="card-body">
                    <div className="text-center">
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                        <i className="fa-solid fa-star text-orange-400"></i>
                    </div>
                    <h2 className="text-lg font-bold text-center">{title}</h2>
                    <p className="font-medium text-[#FF3811] text-center">Price : ${price}</p>
                    <button className="bg-[#FF3811] text-lg font-semibold text-white py-2 rounded">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;