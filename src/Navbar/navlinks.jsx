import React from "react";

const handleHome = () => {
  console.log("clicked");
};
const Navlinks = () => {
  return (
    <div className="task-bar">
      <ul className="no-bullets">
        <li>
          <button onClick={handleHome} className="text-btn btn2">
            Home
          </button>
        </li>
        <li>
          <button onClick={handleHome} className="text-btn">
            Explore
          </button>
        </li>
      </ul>
    </div>
  );
};

export { Navlinks };
