/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../Layout/imgs/favicon.svg";
const ImageWithLoader = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && (
        <p className="absolute inset-0 flex items-center justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-[60px] w-[60px] animate-spin lg:h-[200px] lg:w-[200px]"
          />
        </p>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => console.error("Błąd ładowania obrazka")}
        style={{ display: loaded ? "block" : "none" }}
        className={className}
      />
    </div>
  );
};

export default ImageWithLoader;
