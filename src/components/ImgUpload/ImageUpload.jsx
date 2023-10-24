import React, { useState } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <h2>Selected Image Preview:</h2>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            width="200"
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
