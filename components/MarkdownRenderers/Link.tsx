import React, { ReactElement } from "react";

interface LinkProps {
  children: ReactElement;
  href: string;
}

function Link(props: LinkProps): ReactElement {
  return (
    <a
      href={props.href}
      target={
        props.href.startsWith(
          `${window.location.protocol}//${window.location.host}`
        )
          ? "_self"
          : "_blank"
      }>
      {props.children}
    </a>
  );
}

export default Link;
