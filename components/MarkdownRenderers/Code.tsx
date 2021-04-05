import React, { ReactElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeProps {
  language: string;
  value: string;
}

function Code(props: CodeProps): ReactElement {
  return (
    <SyntaxHighlighter language={props.language} style={atomOneDark}>
      {props.value}
    </SyntaxHighlighter>
  );
}

export default Code;
