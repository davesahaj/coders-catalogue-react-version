import React from "react";

const Spinner = () => {
  return (
    <div class="d-flex justify-content-center align-items-center spinner-wrapper">
      <div class="spinner-grow  text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
