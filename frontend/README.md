# Hall Booking System

This project is developed as part of the Ascentech Internship Evaluation Exercise.
It is a full-stack web application that allows users to create, view, update, and delete hall bookings.

----

## 🚀 Features

- Create new hall booking
- View all bookings in a table
- Edit existing booking
- Delete booking
- Form validation (frontend & backend)
- Clean and user-friendly UI
- Secure configuration using environment variables

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- Sequelize ORM

**Database**
- PostgreSQL

---

## 📂 Project Structure

hall-booking-project/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── app.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ └── App.js
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ Environment Variables

No credentials or server URLs are hardcoded.

### Backend `.env` (outside source control)

DB_NAME=hall_booking_db
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
SERVER_PORT=5000

shell
Copy code

### Frontend `.env`

REACT_APP_API_URL=http://localhost:5000/api

yaml
Copy code

---

## ▶️ How to Run the Project

### 1️⃣ Run Backend

```bash
cd backend
npm install
npx nodemon src/app.js
Backend will run on:

arduino
Copy code
http://localhost:5000
2️⃣ Run Frontend
bash
Copy code
cd frontend
npm install
npm start
Frontend will run on:

arduino
Copy code
http://localhost:3000
🧪 Database Verification
Open pgAdmin

Navigate to:

pgsql
Copy code
hall_booking_db → Schemas → public → Tables → Bookings
Use View/Edit Data to see saved records