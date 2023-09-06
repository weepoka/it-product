import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductImageGalllery = ({ image }) => {
  // console.log(image);
  const { original, thumbnail } = image;

  return (
    <div>
      <div className="gallery mx-10" style={{ paddingTop: "100px" }}>
        <div className="image-box-container">
          <div className="gallery-box ">
            {/* <h2>Imges: {original.picture}</h2> */}
            {/* <img src={image.original.picture} alt="" /> */}
            {/* <ImageGallery items={image.original.picture} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGalllery;
