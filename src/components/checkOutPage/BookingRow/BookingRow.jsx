/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const BookingRow = ({ book, handleDelete, handleConfirm }) => {
    const { _id, customerName, email, price, service, date, img, status } = book;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{date}</td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-semibold text-green-400">Confirmed</span>
                        :
                        <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;