import "./App.css";
import { useState } from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

function App() {
  const [editData, setEditData] = useState(null);

  return (
    <div className="container">
      <h2>Hall Booking System</h2>

      <BookingForm editData={editData} clearEdit={() => setEditData(null)} />

      <BookingList onEdit={data => setEditData(data)} />
    </div>
  );
}

export default App;
