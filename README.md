# 🏥 Doctor Appointment Booking App

A responsive and modern web application where users can view doctors, check their schedules, and book appointments. Built using React, TypeScript, and Tailwind CSS.

---

## 🚀 Features
- View a list of doctors with their specializations, images, and availability
- Search doctors by name or specialization
- View individual doctor profiles with schedule
- Book appointments with a simple form (patient name, email, and appointment time)
- Fully responsive design for mobile and desktop devices

---

## 🛠 Tools & Libraries Used
| Technology      | Purpose                                      |
|------------------|----------------------------------------------|
| **React**         | Frontend framework                          |
| **TypeScript**    | Static typing for JavaScript                |
| **Tailwind CSS**  | Utility-first CSS framework                 |
| **React Router**  | Navigation and routing                      |
| **Vite**          | Development server and bundler              |

---

## 📁 Folder Structure
doctor-booking-app/
├── public/
├── src/
│ ├── assets/ # Images
│ ├── components/ # Reusable UI components
│ ├── data/ # Mock doctor data
│ ├── pages/ # Home, DoctorList, DoctorProfile, etc.
│ ├── types/ # TypeScript interfaces
│ ├── App.tsx
│ └── main.tsx
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── package.json
└── README.md

## 🌟 Improvements with More Time
If more time were available, these features would be prioritized:

- Full backend integration using Node.js, Express, and MongoDB
- Login/Signup and authentication for patients and doctors
- Booking confirmation and appointment history
- Email notifications on appointment booking
- Calendar view for doctor schedules
- Admin dashboard for managing doctors and slots
- Better error handling and form validation
- 
# ⚠️ Challenges Faced and Solutions
| Challenge | Solution |
|----------|----------|
| **TypeScript errors on mock data** | Used `import type` to properly import interfaces |
| **Tailwind not working** | Fixed PostCSS and Tailwind config setup |
| **Responsive layout bugs** | Used `flex`, `grid`, `w-full`, and responsive classes |
| **Booking logic without backend** | Used local state and mock data for simulation |
| **Git not recognized** | Reinstalled Git and added it to system PATH manually |

## 📂 How to Run Locally

```bash
git clone https://github.com/pavansvgithub/doctor-booking-app.git
cd doctor-booking-app
npm install
npm run dev

🙋‍♂️ Contact
Pavan Kumar
📧 Email: pavankumar98spk@gmail.com


