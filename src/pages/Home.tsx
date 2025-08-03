import { useState } from "react";
import { Link } from "react-router-dom";
import { doctors } from "../data/doctors";

export default function Home() {
  const [search, setSearch] = useState("");
  const filtered = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Doctors</h1>
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((doc) => (
          <Link
            to={`/doctor/${doc.id}`}
            key={doc.id}
            className="border p-4 rounded shadow hover:bg-gray-100"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="h-40 w-full object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{doc.name}</h2>
            <p>{doc.specialization}</p>
            <p className="text-sm text-gray-500">{doc.availability}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
