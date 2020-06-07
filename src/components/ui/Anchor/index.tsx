import React, { FC, HTMLProps } from "react";
import Link, { LinkProps } from "next/link";
import * as R from "ramda";
import anchor from "./Anchor.module.scss";

type Props = {
  children: string;
};

export const Anchor: FC<Props & LinkProps & HTMLProps<HTMLAnchorElement>> = (
  props
) => {
  const { children, href, className } = props;

  return (
    <Link href={href}>
      <a
        {...R.omit(["children", "href"])(props)}
        className={`${anchor.button} ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};
