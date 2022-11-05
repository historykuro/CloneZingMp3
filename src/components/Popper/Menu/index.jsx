import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function Menu({ children }) {
  return (
    <Tippy
      visible
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx("menu")} tabIndex="-1" {...attrs}>
          <PopperWrapper></PopperWrapper>
        </div>
      )}>
      {children}
    </Tippy>
  );
}

export default Menu;
