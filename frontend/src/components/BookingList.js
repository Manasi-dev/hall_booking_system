import { useEffect, useState } from "react";
import API from "../services/api";

function BookingList({ onEdit }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get("/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteBooking = async (id) => {
    await API.delete(`/bookings/${id}`);
    window.location.reload();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Applicant</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Hall</th>
          <th>Rent</th>
          <th>Additional</th>
          <th>Total</th>
          <th>Receipt No</th>
          <th>Receipt Date</th>
          <th>Remark</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {bookings.length === 0 ? (
          <tr>
            <td colSpan="11" style={{ textAlign: "center" }}>
              No bookings found
            </td>
          </tr>
        ) : (
          bookings.map(b => (
            <tr key={b.id}>
              <td>{b.applicantName}</td>
              <td>{b.email}</td>
              <td>{b.mobileNo}</td>
              <td>{b.hallName}</td>
              <td>{b.rent}</td>
              <td>{b.additionalCharges}</td>
              <td>{b.total}</td>
              <td>{b.receiptNo}</td>
              <td>{new Date(b.receiptDate).toLocaleDateString()}</td>
              <td>{b.remark}</td>
              <td>
                <button
                  onClick={() => onEdit(b)}
                  style={{
                    marginRight: "6px",
                    padding: "6px 10px",
                    cursor: "pointer"
                  }}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteBooking(b.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default BookingList;
