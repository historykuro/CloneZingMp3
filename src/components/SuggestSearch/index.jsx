import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestSearch.module.scss";

const cx = classNames.bind(styles);

function SuggestSearch() {
  return (
    <div className={cx("wrapper")}>
      <FontAwesomeIcon icon={faArrowTrendUp} className={cx("suggest-icon")} />
      <h4 className={cx("suggest-title")}>có chơi</h4>
    </div>
  );
}

export default SuggestSearch;
