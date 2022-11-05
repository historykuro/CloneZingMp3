import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("")}>
      <div className={`row`}>
        <div className={`col-2`}>
          <Sidebar />
        </div>
        <div className={`col-10`}>
          <div className={`container`}>
            <div className={`row`}>
              <Header />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
