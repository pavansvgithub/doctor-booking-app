import { useParams } from "react-router-dom";
import { useState } from "react";
import { doctors } from "../data/doctors";

export default function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [datetime, setDatetime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!doctor) return <div>Doctor not found</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Book Appointment with {doctor.name}
      </h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="border w-full p-2"
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="border w-full p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            className="border w-full p-2"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Confirm Appointment
          </button>
        </form>
      ) : (
        <div className="bg-green-100 text-green-800 p-4 rounded">
          Appointment confirmed for {name} on{" "}
          {new Date(datetime).toLocaleString()}.
        </div>
      )}
    </div>
  );
}
