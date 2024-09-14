import React, { useState } from "react";
import PersonalInfo from "./components/Personal";
import Education from "./components/Education";
import WorkExperience from "./components/Experience";
import Skills from "./components/Skills";
import ImageUpload from "./components/imageUpload";
import ResumeGenerator from "./components/ResumeGenerator";
import "./App.css";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
} from "@mui/material";

export default function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const resumeData = {
    personalInfo,
    education,
    workExperience,
    skills,
    profileImage,
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Resume Builder
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Profile Picture
        </Typography>
        <ImageUpload setProfileImage={setProfileImage} />
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Personal Information
        </Typography>
        <PersonalInfo setPersonalInfo={setPersonalInfo} />
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Education education={education} setEducation={setEducation} />
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Work Experience
        </Typography>
        <WorkExperience
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Skills skills={skills} setSkills={setSkills} />
      </Paper>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
        <ResumeGenerator resumeData={resumeData} />
      </Box>
    </Container>
  );
}
