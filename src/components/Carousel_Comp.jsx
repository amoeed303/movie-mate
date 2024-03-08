
import { Carousel } from "flowbite-react";

import React, { useEffect, useState } from "react";
import Carosel from "../assets/images/carosel.jpg";
export function Carousel_Comp({images} ) {
  return (
    <div
      className="h-screen sm:h-80 md:h-96 lg:h-screen
      overflow-hidden    "
    >
      <Carousel>
       {images.map((image, id) => (
          <img
            id={id}
            key={image.imageUrl}
            src={image.imageUrl}
            alt="Movie Poster"
            className="object-fit:cover"
          />
        ))}  
        {/* <img src={Carosel} alt="poster " /> */}
      
      </Carousel>
    </div>
  );
}
