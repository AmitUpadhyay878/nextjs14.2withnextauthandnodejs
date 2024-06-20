import Image from 'next/image'
import React from 'react'

const ImageComp = (file :any) => {
    const imageUrl = `https:${file.url}`;
  return (
   <Image
   src={imageUrl}
   alt={file.fileName}
   width={500} // Set a width based on your design
   height={300} // Set a height based on your design
   />
  )
}

export default ImageComp