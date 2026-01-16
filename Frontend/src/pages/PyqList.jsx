import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import isTeacher from "../../middleware/isTeacher";

const PyqList = () => {
  const { classname, subject } = useParams();
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    fetchPdfs();
  }, [classname, subject]);

  const fetchPdfs = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/record/pdfs/pyq/${classname}/${subject}`
    );
    setPdfs(res.data || []);
  };

  return (
    <div>
      {/* 🔹 HEADER */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-bold">
          {classname.toUpperCase()} – {subject.toUpperCase()} PYQs
        </p>

        {/* 🔥 THIS WAS MISSING */}
        {isTeacher() && (
          <Link
            to={`/record/pyq/${classname}/${subject}/upload`}
            className="bg-green-600 text-white px-4 py-2 rounded text-xs font-bold !no-underline"
          >
            Upload PYQ
          </Link>
        )}
      </div>

      {/* 🔹 PDF LIST */}
      {pdfs.length === 0 ? (
        <p className="text-gray-500 font-bold">
          No PYQs uploaded yet
        </p>
      ) : (
        pdfs.map((pdf) => (
          <div
            key={pdf._id}
            className="border p-3 flex justify-between mb-2"
          >
            <p className="font-bold">{pdf.title}</p>
            <a
              href={pdf.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-bold text-xs"
            >
              View
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default PyqList;

