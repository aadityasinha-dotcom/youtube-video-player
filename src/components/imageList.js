import './ImageList.css';
import React from "react";

const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img alt={description} key={id} src={url.regular} />
    });
    
    return <div className='Image-List'>{images}</div>
};

export default ImageList;