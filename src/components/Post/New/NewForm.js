import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewForm = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [author, setAuthor] = useState("");
    const [location, setLoaction] = useState("");
    const [discription, setDiscription] = useState("");
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    };
  
    const [formData, setFormData] = useState({
      image: null,
      author: "",
      location: "",
      description: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formValues = new FormData(e.target);
      navigate("/postview");
    };
  return (
    <div>
    
    <form className="max-w-md mx-auto mt-3 border border-gray-500 p-4 rounded-lg" onSubmit={handleSubmit}>
    <div className="mb-4">
      <input
        className="w-full border border-gray-300 rounded px-3 py-2"
        type="file"
        id="fileInput"
        name="image"
        placeholder="choose file"
        onChange={handleFileChange}
      />
    </div>

    <div className="mb-4">

      <input
        className="w-full border border-gray-300 rounded px-3 py-2"
        type="text"
        id="nameInput"
        placeholder="Author"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
    </div>

    <div className="mb-4">
  
      <input
        className="w-full border border-gray-300 rounded px-3 py-2"
        type="text"
        id="emailInput"
        placeholder="location"
        name="location"
        value={location}
        onChange={(e) => setLoaction(e.target.value)}
      />
    </div>

    <div className="mb-4">
      <textarea
        className="w-full border border-gray-300 rounded px-3 py-2"
        id="messageInput"
        placeholder="discription"
        value={discription}
        name="discription"
        onChange={(e) => setDiscription(e.target.value)}
      />
    </div>

    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      Post
    </button>
  </form></div>
  )
}

export default NewForm