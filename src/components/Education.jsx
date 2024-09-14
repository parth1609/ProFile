import { useState } from "react";
import * as React from "react";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";

const Education= ({ education, setEducation }) => {
  const handleAdd = () => {
    setEducation([
      ...education,
      { school: "", degree: "", graduationYear: "" },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setEducation(newEducation);
  };

  return (
    <Box>
      {education.map((edu, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            name="school"
            label="School"
            variant="outlined"
            value={edu.school}
            onChange={(e) => handleChange(index, e)}
          />
          <TextField
            fullWidth
            margin="normal"
            name="degree"
            label="Degree"
            variant="outlined"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
          />
          <TextField
            fullWidth
            margin="normal"
            name="graduationYear"
            label="Graduation Year"
            variant="outlined"
            value={edu.graduationYear}
            onChange={(e) => handleChange(index, e)}
          />
        </Box>
      ))}
      <Button variant="outlined" onClick={handleAdd}>
        Add Education
      </Button>
    </Box>
  );
}
export default Education;