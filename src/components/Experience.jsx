import * as React from "react";
import { Box, Button, TextField } from "@mui/material";

const WorkExperience = ({ workExperience, setWorkExperience }) => {
  const handleAdd = () => {
    setWorkExperience([
      ...workExperience,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newWorkExperience = [...workExperience];
    newWorkExperience[index] = { ...newWorkExperience[index], [name]: value };
    setWorkExperience(newWorkExperience);
  };

  return (
    <Box>
      {workExperience.map((exp, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            name="company"
            label="Company"
            variant="outlined"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
          />
          <TextField
            fullWidth
            margin="normal"
            name="position"
            label="Position"
            variant="outlined"
            value={exp.position}
            onChange={(e) => handleChange(index, e)}
          />
          <TextField
            fullWidth
            margin="normal"
            name="startDate"
            label="Start Date"
            variant="outlined"
            value={exp.startDate}
            onChange={(e) => handleChange(index, e)}
          />
          <TextField
            fullWidth
            margin="normal"
            name="endDate"
            label="End Date"
            variant="outlined"
            value={exp.endDate}
            onChange={(e) => handleChange(index, e)}
          />
          <TextField
            fullWidth
            margin="normal"
            name="description"
            label="Description"
            variant="outlined"
            multiline
            rows={3}
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
          />
        </Box>
      ))}
      <Button variant="outlined" onClick={handleAdd}>
        Add Work Experience
      </Button>
    </Box>
  );
};
export default WorkExperience;
