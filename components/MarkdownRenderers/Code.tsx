import React, { ReactElement, useMemo } from "react";
import { ReactMarkdownProps } from "react-markdown/lib/ast-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function Code({
  className,
  children,
  inline,
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
    [className]
  );

  return (
    <SyntaxHighlighter
      style={atomOneDark}
      customStyle={
        inline && !language
          ? { display: "inline", padding: "0.2em" }
          : undefined
      }
      language={language || "text"}
      // eslint-disable-next-line react/no-children-prop
      children={code}
    />
  );
}

export default Code;
