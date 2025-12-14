import { useEffect, useState } from "react";
import API from "../services/api";

function BookingForm({ editData, clearEdit }) {
  const [data, setData] = useState({
    mobileNo: "",
    hallName: "",
    applicantName: "",
    email: "",
    purposeOfUse: "",
    rent: 0,
    additionalCharges: 0,
    total: 0,
    remark: "",
    receiptNo: "",
    receiptDate: ""
  });

  // Load data when Edit is clicked
  useEffect(() => {
    if (editData) {
      setData(editData);
    }
  }, [editData]);

  const calculateTotal = (rent, additional) =>
    Number(rent) + Number(additional);

  const submit = async () => {
    if (editData) {
      // UPDATE
      await API.put(`/bookings/${editData.id}`, data);
      clearEdit();
    } else {
      // CREATE
      await API.post("/bookings", data);
    }
    window.location.reload();
  };

  return (
    <div className="form">
      <input placeholder="Mobile No" value={data.mobileNo}
        onChange={e => setData({ ...data, mobileNo: e.target.value })} />

      <select value={data.hallName}
        onChange={e => setData({ ...data, hallName: e.target.value })}>
        <option value="">-- Select Hall --</option>
        <option value="Budhavihar">Budhavihar</option>
        <option value="Nagarbhavan">Nagarbhavan</option>
        <option value="Padmabhushan Hall">Padmabhushan Hall</option>
      </select>

      <input placeholder="Applicant Name" value={data.applicantName}
        onChange={e => setData({ ...data, applicantName: e.target.value })} />

      <input placeholder="Email" value={data.email}
        onChange={e => setData({ ...data, email: e.target.value })} />

      <input placeholder="Purpose of Use" value={data.purposeOfUse}
        onChange={e => setData({ ...data, purposeOfUse: e.target.value })} />

      <input type="number" placeholder="Rent" value={data.rent}
        onChange={e => {
          const rent = e.target.value;
          setData({ ...data, rent, total: calculateTotal(rent, data.additionalCharges) });
        }} />

      <input type="number" placeholder="Additional Charges" value={data.additionalCharges}
        onChange={e => {
          const additional = e.target.value;
          setData({ ...data, additionalCharges: additional, total: calculateTotal(data.rent, additional) });
        }} />

      <input type="number" value={data.total} readOnly />

      <textarea placeholder="Remark" value={data.remark}
        onChange={e => setData({ ...data, remark: e.target.value })} />

      <input placeholder="Receipt No" value={data.receiptNo}
        onChange={e => setData({ ...data, receiptNo: e.target.value })} />

      <input type="date" value={data.receiptDate?.split("T")[0]}
        onChange={e => setData({ ...data, receiptDate: e.target.value })} />

      <button onClick={submit}>
        {editData ? "Update" : "Submit"}
      </button>
    </div>
  );
}

export default BookingForm;
