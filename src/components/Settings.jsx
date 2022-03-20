import React, { useEffect, useLayoutEffect, useState } from "react";
import { data } from "../data";

const Settings = () => {
  const storedSites = JSON.parse(localStorage.getItem("enabledSites"));
  const [sites, setSites] = useState([]);
  const [checkedSites, setCheckedSites] = useState([]);

  useEffect(() => {
    for (let site in data) {
      setSites((prevSites) => [...prevSites, site]);

      if (storedSites.includes(site)) {
        setCheckedSites((sites) => [...sites, site]);
      }
    }
  }, []);

  useEffect(() => {
    function saveSettings() {
      localStorage.setItem("enabledSites", JSON.stringify(checkedSites));
    }
    saveSettings();
  }, [checkedSites]);

  const handleOnChange = (e) => {
    if (checkedSites.includes(e.target.value)) {
      setCheckedSites((prevSites) =>
        prevSites.filter((item) => item !== e.target.value)
      );
    } else {
      setCheckedSites((prevSites) => [...prevSites, e.target.value]);
    }
  };

  return (
    <>
      {sites.map((site) => {
        return (
          <div className="container-fluid bg-light mt-2" key={site}>
            <div className="row">
              <div className="col-10">
                <label className="form-check-label" htmlFor={`${site}Switch`}>
                  {data[site].name}
                </label>
              </div>
              <div className="col-2">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`${site}Switch`}
                    value={`${site}`}
                    checked={checkedSites.includes(site)}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Settings;
