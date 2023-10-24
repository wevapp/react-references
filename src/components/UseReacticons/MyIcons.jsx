import { useState } from 'react';
import * as FcIcons from 'react-icons/fc';
import * as FaIcons from 'react-icons/fa';

const MyIcons = () => {
    const [isLiked, setLiked] =useState(false)

    const HandleClick = () => {
        setLiked(!isLiked)
    }

  return (
    <div>
        {isLiked ? (
            <FcIcons.FcHome onClick={HandleClick}/> // icon from fc
            ) : ( 
            <FaIcons.FaHome onClick={HandleClick}/> // icon from fontawesome
        )}
    </div>
  )
}

export default MyIcons