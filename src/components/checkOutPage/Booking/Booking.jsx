import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authPage/Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";


const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url]);
    const handleDelete = id => {
        const proceed = confirm('Are you want to sure to delete ?');
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully !')
                    }
                    const remaining = booking.filter(booking => booking._id !==id);
                    setBooking(remaining)
                })
        }
    }
    return (
        <div>
            <div className="overflow-x-auto p-10 bg-gray-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-sm">Action</th>
                            <th className="text-sm">Image</th>
                            <th className="text-sm">Date</th>
                            <th className="text-sm">Email</th>
                            <th className="text-sm">Price</th>
                            <th className="text-sm">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <BookingRow key={book._id} book={book}
                            handleDelete={handleDelete}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;