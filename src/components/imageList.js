import React from "react";

const ImageList = (props) => {
    return images = props.images.map((image) => {
        return <img src={image.url.regular} />
    });
    
};

export default ImageList;