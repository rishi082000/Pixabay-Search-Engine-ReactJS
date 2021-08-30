import React from 'react';

const ImageList = (props) => {
    console.log(props)
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="image" className="ui medium spaced image"/>
    })
    return(
        <div className="ui center aligned orange inverted segment">
            {images}
        </div>
    )
}

export default ImageList;