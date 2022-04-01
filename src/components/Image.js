import React, {useState} from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Image = ({src, alt}) => {
  const [isbroken, setIsBroken] = useState(false);

  if (isbroken) {
    return null;
    // return <FontAwesomeIcon icon={["far", "image"]} />
  } else {
    return <img src={src} alt={alt} onError={() => setIsBroken(true)} />
  }
}

export default Image;