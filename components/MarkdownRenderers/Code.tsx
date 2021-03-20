import React, { ReactElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeProps {
  language: string;
  value: string;
}

function Code(props: CodeProps): ReactElement {
  return (
    <SyntaxHighlighter language={props.language} style={shadesOfPurple}>
      {props.value}
    </SyntaxHighlighter>
  );
}

export default Code;
