import React, { ReactElement, useMemo } from "react";
import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react";
import Highlight from "react-highlight";

import "highlight.js/styles/atom-one-dark.css";

function Code({
  className,
  children,
}: JSX.IntrinsicElements["code"] &
  ReactMarkdownProps & {
    inline?: boolean;
  }): ReactElement {
  const code = useMemo<string>(
    () => String(children).replace(/\n$/, ""),
    [children]
  );
  const language = useMemo<string>(
    () => className?.replace("language-", ""),
    []
  );

  return <Highlight className={language}>{code}</Highlight>;
}

export default Code;
