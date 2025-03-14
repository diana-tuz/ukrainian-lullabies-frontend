import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { languageChanged } from "../../redux/currentLanguage/currentLanguageSlice";
import { LogoDark, LogoLight } from "../SVGComponents/Logo";
import "./Header.css";
import { HeaderResponsiveSidebar } from "./HeaderResponsiveSidebar";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderThemeToggle } from "./HeaderThemeToggle";
import { HeaderUserIcon } from "./HeaderUserIcon";

export const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  // dropdown menu
  const dropdownWrapperRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownMenuClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      dropdownWrapperRef.current.style.borderColor = "transparent";
    } else {
      setIsDropdownOpen(true);
      dropdownWrapperRef.current.style.borderColor = "var(--red-700)";
    }
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        !e.target.parentElement?.classList.contains("header-dropdown-button")
      ) {
        setIsDropdownOpen(false);
        dropdownWrapperRef.current.style.borderColor = "transparent";
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  // scroll to target
  const scrollToTarget = (target) => {
    setTimeout(() => {
      const scrollTo = document.querySelector(target);
      scrollTo.scrollIntoView();
    }, 50);
  };

  // language menu
  const languageMenuRef = useRef();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languageMenuClick = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(languageChanged(lng));
  };
  const currentLanguage = i18n.language;

  useEffect(() => {
    const closeLanguageMenu = (e) => {
      if (
        !e.target.parentElement?.classList.contains("header-languages-button")
      ) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.body.addEventListener("click", closeLanguageMenu);

    return () => document.body.removeEventListener("click", closeLanguageMenu);
  }, []);

  // search bar
  const searchBarRef = useRef();
  const headerOptionsWrapperRef = useRef();
  const closeSearchBar = () => {
    // openSearchBar is called searchIconClick() and placed in HeaderSearch.jsx

    const parent = headerOptionsWrapperRef.current.parentNode;
    const headerAboutLink = document.querySelector(".header-about-link");
    const headerDropdownWrapper = document.querySelector(
      ".header-dropdown-wrapper"
    );

    headerAboutLink.style.display = "block";
    headerDropdownWrapper.style.display = "block";

    headerOptionsWrapperRef.current.style.display = "grid";
    parent.classList.remove("header-with-search-bar-open");
    parent.classList.add("container");
    searchBarRef.current.classList.remove("header-search-bar-open");
    searchBarRef.current.classList.add("hidden");
  };

  // theme toggle
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  return (
    <div className="header" id="header">
      <div className="header-logo">
        <Link to="/" aria-label="Go to main page">
          {isLightTheme ? (
            <LogoLight width="56" height="53" />
          ) : (
            <LogoDark width="56" height="53" />
          )}
        </Link>
      </div>
      <NavLink
        to="/about"
        className="header-about-link text-2xl"
        aria-label="Go to page About us"
      >
        {t("aboutUs")}
      </NavLink>
      <div className="header-dropdown-wrapper" ref={dropdownWrapperRef}>
        <div
          className={classNames("header-dropdown-button", {
            "header-dropdown-button-light": isLightTheme,
          })}
          onClick={dropdownMenuClick}
        >
          <span className="text-2xl">{t("lullabiesMuseum")}</span>
          <IoIosArrowDown style={{ width: "31px", height: "21px" }} />
        </div>
        <div
          className={classNames({
            "header-dropdown-menu": isDropdownOpen,
            hidden: !isDropdownOpen,
            "header-dropdown-menu-light": isLightTheme,
          })}
        >
          <Link
            aria-label="Go to section map"
            to="/map"
            className="text-base"
            onClick={() => scrollToTarget("#mapTabsId")}
          >
            {t("traditionalLullabies")}
          </Link>
          <Link
            aria-label="Go to section songs together"
            to="/songs"
            className="text-base"
            onClick={() => scrollToTarget("#mapTabsId")}
          >
            {t("singingTogether")}
          </Link>
          <Link
            aria-label="Go to section animation lullabies"
            to="/anima"
            className="text-base"
            onClick={() => scrollToTarget("#mapTabsId")}
          >
            {t("animatedLullabies")}
          </Link>
        </div>
      </div>

      {/* HEADER OPTION BUTTONS */}
      <div className="header-options-wrapper" ref={headerOptionsWrapperRef}>
        <div className="header-languages-wrapper" onClick={languageMenuClick}>
          <div
            className={classNames("header-languages-button", {
              "header-languages-button-light": isLightTheme,
            })}
          >
            <span className="text-2xl">{currentLanguage.toUpperCase()}</span>
            <IoIosArrowDown style={{ width: "31px", height: "21px" }} />
          </div>
          <div
            className={classNames({
              "header-languages-menu": isLanguageMenuOpen,
              hidden: !isLanguageMenuOpen,
              "header-language-menu-light": isLightTheme,
            })}
            ref={languageMenuRef}
          >
            <button
              aria-label="Change language"
              className="text-2xl"
              onClick={() => changeLanguage("ua")}
            >
              UA
            </button>
            <button
              aria-label="Change language"
              className="text-2xl"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
        <HeaderUserIcon isLightTheme={isLightTheme} />
        <div className="header-search-wrapper">
          <HeaderSearch
            isLightTheme={isLightTheme}
            searchBarRef={searchBarRef}
            headerOptionsWrapperRef={headerOptionsWrapperRef}
          />
        </div>
        <HeaderThemeToggle isLightTheme={isLightTheme} />
      </div>

      {/* opened search bar */}
      <div
        className={classNames("header-search-bar", "hidden", {
          "header-search-bar-light": isLightTheme,
        })}
        ref={searchBarRef}
      >
        <input
          type="text"
          placeholder={t("searchUnavailable")}
          className="text-xl headerSearchInput"
          onBlur={closeSearchBar}
        />
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 22L8.35 17.65M6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4C9.58172 4 6 7.58172 6 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pointerEvents="none"
          />
        </svg>
      </div>

      {/* responsive menu */}
      <HeaderResponsiveSidebar
        isLightTheme={isLightTheme}
        dispatch={dispatch}
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
        scrollToTarget={scrollToTarget}
      />
    </div>
  );
};
