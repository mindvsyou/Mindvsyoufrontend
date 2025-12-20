import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema(
  {
    title: { type: String, default: "Untitled PDF" },
    pdfUrl: { type: String, required: true },
    publicId: { type: String, required: true },
    section: { type: String, required: true },
  },
);

export const PdfDetails = mongoose.model("PdfDetails", PdfDetailsSchema);