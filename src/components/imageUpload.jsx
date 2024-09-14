import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const ImageUpload = ({ setProfileImage }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <input
        accept="image/*"
        type="file"
        id="image-upload"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload">
        <Button variant="contained" component="span">
          Upload Profile Picture
        </Button>
      </label>
      {preview && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <img
            src={preview}
            alt="Profile Preview"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        </Box>
      )}
    </Box>
  );
};
export default ImageUpload;
