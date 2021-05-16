import React, { ReactElement } from "react";
import {
  ReactBaseProps,
  ReactMarkdownProps,
} from "react-markdown/src/ast-to-react";

import ImageComponent from "../Image";

function Image({
  alt,
  src,
}: ReactBaseProps & ReactMarkdownProps): ReactElement {
  return (
    <ImageComponent
      hideCaption
      hidePaper
      hideTitle
      showAsImage
      media={{
        alternativeText: alt as string,
        url: src as string,
      }}
    />
  );
}

export default Image;
