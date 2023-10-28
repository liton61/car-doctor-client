/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authPage/Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);
    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const price = form.price.value;
        const date = form.date.value;
        const booking = {
            name: name,
            img,
            email,
            date,
            price: price,
            service_id: _id,
            title,
        }
        console.log(booking);
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Service successfully booked !")
                }
            })
    }
    return (
        <div className="bg-gray-100 pb-24 pt-10">
            <h1 className="text-center my-5 text-lg font-semibold">{title}</h1>
            <div>
                <form onSubmit={handleCheckOut}>
                    <div className="flex w-9/12 mx-auto">
                        <div className="form-control w-full mb-5 mr-3">
                            <label>
                                <input className="focus:outline-none w-full p-3" type="text" name="name" defaultValue={user?.displayName} placeholder="Name" />
                            </label>
                        </div>
                        <div className="form-control w-full mb-5 ml-3">
                            <label>
                                <input className="focus:outline-none w-full p-3" type="date" name="date" placeholder="Date" />
                            </label>
                        </div>
                    </div>
                    <div className="flex w-9/12 mx-auto">
                        <div className="form-control w-full mb-5 mr-3">
                            <label>
                                <input className="focus:outline-none w-full p-3" type="text" name="email" defaultValue={user?.email} placeholder="Email" />
                            </label>
                        </div>
                        <div className="form-control w-full mb-5 ml-3">
                            <label>
                                <input className="focus:outline-none w-full p-3" type="text" name="price" defaultValue={'$' + price} placeholder="Price" />
                            </label>
                        </div>
                    </div>
                    <div className="w-9/12 mx-auto">
                        <div className="form-control w-full mb-5 mr-3">
                            <label>
                                <textarea className="focus:outline-none w-full h-36 p-3" type="text" name="description" placeholder="Description" />
                            </label>
                        </div>
                    </div>
                    <div className="w-9/12 mx-auto">
                        <input className="btn btn-primary w-full mt-5" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;