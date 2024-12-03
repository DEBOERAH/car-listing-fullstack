import React from 'react'
import { useState } from 'react';

const Imagegallery = () => {

    const imgUrls=[
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/6718243/1.jpg?4345",
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/6718243/2.jpg?4345",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/8917851/1.jpg?4604",
        "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/40/8917851/2.jpg?4604"

];
// state
const [imgUrl, setImgUrl] = useState(imgUrls[0]);

// handle change image
const handleChangeImage = (urlIndex) => {
    setImgUrl(imgUrls[urlIndex]);
    
}



const styles = {
    img: {
        width: '100px',
        height: '100px',
        border: '1px solid black',
        margin: '10px'
    }


}


  return (
    <div>


        <img src={imgUrl} alt=" pictures" />

        <div>

        {imgUrls.map((url,index) =>( 
            <img key={index} src={url} alt=" pictures" style={styles.img} onClick={() => handleChangeImage(index)} />
    ))}

        </div> 
       

    </div>
  )
}

export default Imagegallery