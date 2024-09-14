import React from "react";
import { Button } from "@mui/material";
import jsPDF from "jspdf";

const ResumeGenerator = ({ resumeData }) => {
  const generateResume = () => {
    const doc = new jsPDF();
    let yPos = 20;

    // Set font styles
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);

    // Add personal information
    doc.text("Resume", 105, yPos, { align: "center" });
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`${resumeData.personalInfo.fullName}`, 20, yPos);
    yPos += 7;
    doc.text(`Email: ${resumeData.personalInfo.email}`, 20, yPos);
    yPos += 7;
    doc.text(`Phone: ${resumeData.personalInfo.phone}`, 20, yPos);
    yPos += 7;
    doc.text(`Address: ${resumeData.personalInfo.address}`, 20, yPos);
    yPos += 15;

    // Add education
    doc.setFont("helvetica", "bold");
    doc.text("Education", 20, yPos);
    yPos += 7;
    doc.setFont("helvetica", "normal");
    resumeData.education.forEach((edu) => {
      doc.text(`${edu.school} - ${edu.degree}`, 30, yPos);
      yPos += 7;
      doc.text(`Graduation Year: ${edu.graduationYear}`, 30, yPos);
      yPos += 10;
    });

    // Add work experience
    yPos += 5;
    doc.setFont("helvetica", "bold");
    doc.text("Work Experience", 20, yPos);
    yPos += 7;
    doc.setFont("helvetica", "normal");
    resumeData.workExperience.forEach((exp) => {
      doc.text(`${exp.company} - ${exp.position}`, 30, yPos);
      yPos += 7;
      doc.text(`${exp.startDate} - ${exp.endDate}`, 30, yPos);
      yPos += 7;
      doc.text(exp.description, 30, yPos, { maxWidth: 150 });
      yPos += 15;
    });

    // Add skills
    yPos += 5;
    doc.setFont("helvetica", "bold");
    doc.text("Skills", 20, yPos);
    yPos += 7;
    doc.setFont("helvetica", "normal");
    doc.text(resumeData.skills.join(", "), 30, yPos, { maxWidth: 150 });

    // Save the PDF
    doc.save("resume.pdf");
  };

  return (
    <Button variant="contained" color="primary" onClick={generateResume}>
      Generate PDF Resume
    </Button>
  );
};
export default ResumeGenerator;
