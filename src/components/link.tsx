import { Link } from "gatsby";
// tslint:disable-next-line:no-submodule-imports
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as React from "react";
import { ComponentProps } from "react";

const FADE_TIME = 0.5;

type Props = Partial<ComponentProps<typeof Link>>;

export const FadeLink = (props: Props) => {
  const { children, ...linkProps } = props;
  console.log(linkProps);
  console.log(children);

  return (
    <AniLink fade={true} duration={FADE_TIME} {...linkProps}>
      {children}
    </AniLink>
  );
};
