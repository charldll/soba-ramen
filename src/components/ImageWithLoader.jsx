/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../Layout/imgs/favicon.svg";
const ImageWithLoader = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && (
        <p className="absolute inset-0 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-50 h-50 animate-spin" />
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
