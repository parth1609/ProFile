import * as React from "react";
import { TextField } from "@mui/material";

const Skills = ({ skills, setSkills }) => {
  const handleChange = (e) => {
    setSkills(e.target.value.split(",").map((skill) => skill.trim()));
  };

  return (
    <TextField
      fullWidth
      margin="normal"
      name="skills"
      label="Skills (comma-separated)"
      variant="outlined"
      multiline
      rows={3}
      value={skills.join(", ")}
      onChange={handleChange}
    />
  );
};
export default Skills;
