import React,{useState} from "react";
import icon from "../../../images/icon.png";
import camera from "../../../images/camera.png";


const NewPost = () => {

  const [file, setFile] = useState(null);
  const [Author, setAuthor] = useState('');
  const [location, setLoaction] = useState('');
  const [discription, setDiscription] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form values (file, Author, location, discription) from the state variables
  };
  return (
    <div>
      <nav className="flex justify-between m-5">
       <div className="flex">
       <img src={icon} alt="icon" className="w-[50px] h-[50px] rounded-[50%]"/>
       <h3 className="text-green-600 text-3xl">Instagram Clone</h3>
       </div>
        <img src={camera} alt="camera" className="w-[40px] h-[50px]" />
      </nav>
      <hr className="bg-black" />


      <form className="max-w-md mx-auto mt-3" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="file"
          id="fileInput"
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
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="mb-4">
    
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="text"
          id="emailInput"
          placeholder="location"
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
          onChange={(e) => setDiscription(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Post
      </button>
    </form>
    </div>
  );
};

export default NewPost;
