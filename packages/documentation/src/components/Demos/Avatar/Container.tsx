import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

import "./Container.scss";

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("avatar-container", className)} {...props}>
    {children}
  </div>
);

export default Container;
