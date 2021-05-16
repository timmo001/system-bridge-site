import React, { ReactElement, useMemo } from "react";
import {
  ReactBaseProps,
  ReactMarkdownProps,
} from "react-markdown/src/ast-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function Code({
  className,
  children,
  inline,
}: ReactBaseProps &
  ReactMarkdownProps & {
    inline?: boolean;
  }): ReactElement {
  console.log(className, inline);
  const language = useMemo<string>(
    () => className?.replace("language-", ""),
    []
  );
  // return !inline && language ? (
  return (
    <SyntaxHighlighter
      style={atomOneDark}
      customStyle={
        inline && !language ? { display: "inline", padding: "0.2em" } : {}
      }
      language={language || "text"}
      children={String(children).replace(/\n$/, "")}
    />
  );
  // ) : (
  //   <code {...props} className={className} children={children} />
  // );
}

export default Code;
