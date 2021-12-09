import React from "react";

const ImageList = (props) => {
    props.images.map((image) => {
        return <img src={image.url.regular} />
    });

    return <div>ImageList</div>
};

export default ImageList;