import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const UploadPdf = () => {
  const { section, subject } = useParams(); // 👈 subject added
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please select a PDF");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subject", subject); // 👈 important
    formData.append("pdf", file);

    await axios.post(
      `http://localhost:5000/record/upload/${section}/${subject}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    alert("PDF uploaded successfully");
    navigate(`/record/${section}`);
  };

  return (
    <form className="p-6 max-w-md mx-auto" onSubmit={handleUpload}>
      <h2 className="text-xl font-bold mb-4">
        Upload {subject.toUpperCase()} PDF ({section})
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="PDF Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
        Upload
      </button>
    </form>
  );
};

export default UploadPdf;

