import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import isTeacher from "../../middleware/isTeacher";

const PdfSection = () => {
  const { section } = useParams();
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    fetchPdfs();
  }, [section]);

  const fetchPdfs = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/record/pdfs/${section}`
    );
    setPdfs(res.data || []);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{section.toUpperCase()}</h1>

        {/* ✅ ONLY TEACHERS SEE THIS */}
        {isTeacher() && (
          <Link
            to={`/record/${section}/upload`}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Upload PDF
          </Link>
        )}
      </div>

      {pdfs.map(pdf => (
        <div key={pdf._id} className="border p-4 mb-3">
          <h3>{pdf.title}</h3>

          <a
            href={pdf.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            View
          </a>

          {/* ✅ Edit/Delete ONLY for teachers */}
          {isTeacher() && (
            <>
              <button className="ml-3 text-yellow-600">Edit</button>
              <button className="ml-3 text-red-600">Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PdfSection;
