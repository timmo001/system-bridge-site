import React, { ReactElement } from "react";

import ImageComponent from "../Image";

interface ImageProps {
  alt: string;
  src: string;
}

function Image(props: ImageProps): ReactElement {
  return (
    <ImageComponent
      hideCaption
      hidePaper
      hideTitle
      showAsImage
      media={{
        alternativeText: props.alt,
        url: props.src,
      }}
    />
  );
}

export default Image;
