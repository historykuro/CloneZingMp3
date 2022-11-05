import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);
function Wrapper({ children, inputSearch, setting }) {
  return (
    <div
      className={cx("wrapper", {
        inputSearch,
        setting,
      })}>
      {children}
    </div>
  );
}

export default Wrapper;
