import React, { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

import Code from "./MarkdownRenderers/Code";
import Image from "./MarkdownRenderers/Image";
import Link from "./MarkdownRenderers/Link";

interface MarkdownProps {
  escapeHtml: boolean;
  source: string;
}

function Markdown(props: MarkdownProps): ReactElement {
  return (
    <ReactMarkdown
      source={props.source}
      escapeHtml={props.escapeHtml}
      renderers={{ code: Code, image: Image, link: Link }}
    />
  );
}

export default Markdown;
