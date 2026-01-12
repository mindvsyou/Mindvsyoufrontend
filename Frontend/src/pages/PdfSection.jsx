import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import isTeacher from "../../middleware/isTeacher";
import { ChevronDown } from "lucide-react";

const PdfSection = () => {
  const { section } = useParams();

  const [openSubject, setOpenSubject] = useState(null);
  const [pdfs, setPdfs] = useState({
    science: [],
    maths: [],
  });

  useEffect(() => {
    fetchPdfs("science");
    fetchPdfs("maths");
  }, [section]);

  const fetchPdfs = async (subject) => {
    const res = await axios.get(
      `http://localhost:5000/record/pdfs/${section}/${subject}`
    );

    setPdfs((prev) => ({
      ...prev,
      [subject]: res.data || [],
    }));
  };

  const toggle = (subject) => {
    setOpenSubject(openSubject === subject ? null : subject);
  };

  const renderSubject = (subject, label) => (
    <div className="border rounded-lg mb-4">
      <button
        onClick={() => toggle(subject)}
        className="w-full flex justify-between items-center px-5 py-4 text-lg font-semibold"
      >
        {label}
        <ChevronDown
          className={`transition-transform ${
            openSubject === subject ? "rotate-180" : ""
          }`}
        />
      </button>

      {openSubject === subject && (
        <div className="px-5 pb-4 space-y-3">
          {isTeacher() && (
            <Link
              to={`/record/${section}/${subject}/upload`}
              className="inline-block bg-green-600 text-white px-4 py-2 rounded mb-2"
            >
              Upload {label} PDF
            </Link>
          )}

          {pdfs[subject].length === 0 ? (
            <p className="text-gray-500">No PDFs uploaded yet</p>
          ) : (
            pdfs[subject].map((pdf) => (
              <div key={pdf._id} className="border p-3 rounded">
                <h3 className="font-medium">{pdf.title}</h3>

                <a
                  href={pdf.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600"
                >
                  View PDF
                </a>

                {isTeacher() && (
                  <>
                    <button className="ml-3 text-yellow-600">Edit</button>
                    <button className="ml-3 text-red-600">Delete</button>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{section.toUpperCase()} PDFs</h1>

      {renderSubject("science", "Science")}
      {renderSubject("maths", "Maths")}
    </div>
  );
};

export default PdfSection;
