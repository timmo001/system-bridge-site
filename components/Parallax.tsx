import React, { ReactElement, useEffect, useState } from "react";

interface ParallaxProps {
  children?: ReactElement;
  image?: string;
}

function Parallax({ children, image }: ParallaxProps): ReactElement {
  const [transform, setTransform] = useState<string>();

  useEffect(() => {
    let windowScrollTop: string | number;
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  }, []);
  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: 380,
        transform: transform,
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;
