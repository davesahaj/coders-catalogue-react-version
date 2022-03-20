import React from "react";
import {
  MdRefresh as ReloadIcon,
  MdSettings as SettingsIcon,
} from "react-icons/md";

import { useSelector } from "react-redux";
import {
  isLoading as loading,
  fetchAsyncContests,
} from "../features/contests/contestSlice";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);
  return (
    <nav className="navbar sticky-top navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand fs-5">Coders Catalogue</div>
        <div>
          <button
            type="button"
            className={`btn text-light ${
              isLoading ? "icon-rotate-infinite" : ""
            }`}
            onClick={() => dispatch(fetchAsyncContests())}
          >
            <ReloadIcon className="fs-5" />
          </button>
          <button
            type="button"
            className="btn text-light"
            onClick={props.toggleSettings}
          >
            <SettingsIcon className="icon-rotate fs-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
