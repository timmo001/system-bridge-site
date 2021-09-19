import React, { ReactElement, useEffect, useState } from "react";
import clsx from "clsx";

import useStyles from "assets/jss/components/parallax";

interface ParallaxProps {
  children?: ReactElement;
  filter?: boolean;
  image?: string;
  small?: boolean;
}

function Parallax({
  children,
  filter,
  image,
  small,
}: ParallaxProps): ReactElement {
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
  const classes = useStyles();
  const parallaxClasses = clsx({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;
