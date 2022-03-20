import React from "react";
import { MdOpenInNew as Link, MdAlarm as Alarm } from "react-icons/md";
import { data } from "../data";
import { useSelector } from "react-redux";
import { getContests } from "../features/contests/contestSlice";

const ContestCard = ({ site = "hackerrank", contest, date, duration, url }) => {
  return (
    <div className="container-fluid mb-2 bg-light p-1">
      <div className="row">
        <div className="container d-flex col-2 align-items-center justify-content-center">
          <img
            src={data[site].icon}
            alt={site}
            style={{ maxWidth: "30px", maxHeight: "30px" }}
          />
        </div>
        <div className="col-8">
          <div className="row fw-bold">{data[site].name}</div>
          <div className="row">{contest}</div>
          <div className="row">
            {date} - {duration}
          </div>
        </div>
        <div className="col-2">
          <div className="row h-50">
            <div className="container d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-light btn-sm  text-dark">
                <Alarm />
              </button>
            </div>
          </div>
          <div className="row h-50">
            <div className="container d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="btn btn-light btn-sm  text-dark"
                onClick={() => {
                  window.open(`${url}`, "_blank");
                }}
              >
                <Link />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contests = () => {
  const contests = useSelector(getContests);

  return !contests.length ? (
    <div>
      <p className="h6 m-3">No Active Contests</p>
    </div>
  ) : (
    contests.map((c) => {
      return (
        <div key={c.contest}>
          <ContestCard
            contest={c.contest}
            site={c.site}
            duration={c.duration}
            date={c.date}
            url={c.url}
          />
        </div>
      );
    })
  );
};

export default Contests;
