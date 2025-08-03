import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../data/doctors";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === Number(id));
  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{doctor.name}</h1>
      <p className="text-lg">{doctor.specialization}</p>
      <p className="text-sm text-gray-500">{doctor.availability}</p>
      <h2 className="mt-4 font-semibold">Available Slots:</h2>
      <ul className="list-disc ml-5">
        {doctor.schedule.map((slot) => (
          <li key={slot}>{slot}</li>
        ))}
      </ul>
      <button
        onClick={() => navigate(`/book/${doctor.id}`)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Appointment
      </button>
    </div>
  );
}
