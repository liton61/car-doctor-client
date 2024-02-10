import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/authPage/Provider/AuthProvider";
import BookingRow from "../../components/checkOutPage/BookingRow/BookingRow";


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
                    const remaining = booking.filter(booking => booking._id !== id);
                    setBooking(remaining)
                })
        }
    }
    const handleConfirm = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = booking.filter(booking => booking._id !== id);
                    const update = booking.filter(booking => booking._id === id);
                    update.status = 'confirm';
                    const newBooking = [update, ...remaining];
                    setBooking(newBooking)
                }
            })
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
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;