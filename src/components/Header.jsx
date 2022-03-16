import React from "react";
import {
  MdRefresh as ReloadIcon,
  MdSettings as SettingsIcon,
} from "react-icons/md";

const Header = (props) => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand fs-5">Coders Catalogue</div>
        <div>
          <button type="button" className="btn text-light">
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
