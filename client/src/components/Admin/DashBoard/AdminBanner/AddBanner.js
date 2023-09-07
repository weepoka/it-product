import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AddBanner = () => {
  // const { profile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    let formDataObj = new FormData();
    if (image) {
      formDataObj.append("image", image);
    }

    try {
      let response;
      if (image && image.name) {
        response = await fetch(`${process.env.REACT_APP_SERVER}/banner`, {
          method: "POST",
          body: formDataObj,
          credentials: "include",
        });
      } else {
        toast.error("please provide a banner");
      }

      const data = await response.json();

      if (response.ok) {
        setImage({});
        toast.success("banner added successfully");
        // Reset form and image state or perform other actions
      } else {
        alert("upldoad faild");
        console.error("Update failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="m-5 p-5">
      <h2 className="text-3xl mb-5">Please provide a banner image</h2>
      <div className="col-span-2 flex justify-center items-center">
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button onClick={handleUpload} className="btn bg-[#006FBA]">
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddBanner;
