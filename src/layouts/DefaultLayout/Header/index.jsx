import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
  faMagnifyingGlass,
  faUpload,
  faGear,
  faCrown,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import SuggestSearch from "~/components/SuggestSearch";
import styles from "./Header.module.scss";
import ButtonControl from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);
  return (
    <header className={cx(`wrapper`)}>
      <div className={cx("content")}>
        <div className={cx("controls-left")}>
          <div className={cx("control-icon")}>
            <button type="button" className={`btn ${cx("btn-icon")}`}>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className={cx("control-icon_navigation")}
              />
            </button>
            <button type="button" className={`btn ${cx("btn-icon")}`}>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className={cx("control-icon_navigation")}
              />
            </button>
          </div>

          <HeadlessTippy
            visible={searchResult.length > 0}
            interactive
            content="Search"
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper inputSearch>
                  <h4 className={cx("search-title")}>Đề xuất cho bạn</h4>
                  <SuggestSearch />
                  <SuggestSearch />
                  <SuggestSearch />
                </PopperWrapper>
              </div>
            )}>
            <div className={cx("search")}>
              <button className={`btn ${cx("search-btn")}`}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={cx("search-icon")}
                />
              </button>
              <input placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
            </div>
          </HeadlessTippy>
        </div>

        <div className={cx("controls-right")}>
          {/* Theme */}
          <Tippy content="Theme" placement="bottom">
            <ButtonControl circle>
              <FontAwesomeIcon icon={faShirt} className={cx("theme-icon")} />
            </ButtonControl>
          </Tippy>

          <Tippy content="VIP">
            <ButtonControl circle>
              <FontAwesomeIcon icon={faCrown} />
            </ButtonControl>
          </Tippy>
          <Tippy content="Upload">
            <ButtonControl circle>
              <FontAwesomeIcon icon={faUpload} />
            </ButtonControl>
          </Tippy>

          {/* Setting */}
          <Tippy content="Setting">
            <HeadlessTippy
              visible
              interactive
              placement="bottom-start"
              render={(attrs) => (
                <div className={cx("setting-btn")} tabIndex="-1" {...attrs}>
                  <PopperWrapper setting></PopperWrapper>
                </div>
              )}>
              <ButtonControl circle>
                <FontAwesomeIcon icon={faGear} />
              </ButtonControl>
            </HeadlessTippy>
          </Tippy>

          {/* Current User */}
          <ButtonControl avatar>
            <img
              className={cx("avatar-img")}
              src="https://s120-ava-talk-zmp3.zmdcdn.me/4/5/0/7/5/120/e727bc573f733b38ddb84b516ae7aecd.jpg"
            />
          </ButtonControl>
        </div>
      </div>
    </header>
  );
}

export default Header;
