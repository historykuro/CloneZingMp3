import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const ButtonControl = forwardRef(
  (
    {
      children,
      circle = false,
      avatar = false,
      to,
      href,
      onClick,
      ...passProps
    },
    ref
  ) => {
    let Comp = "button";

    const props = {
      onClick,
      ...passProps,
    };
    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = "a";
    }

    const classes = cx("wrapper", { circle, avatar });

    return (
      <Comp className={classes} {...props} ref={ref}>
        {avatar ? (
          <figure className={cx("avatar-btn")}>{children}</figure>
        ) : (
          <span>{children}</span>
        )}
      </Comp>
    );
  }
);

export default ButtonControl;
