import React from "react";
import "./HistoryVideos.css";
const HistoryVideos = () => {
  return (
    <div className="history-container">
      <div className="history-info">
        this is history section
        <div>NO. </div>
        <button>CLEAR ALL </button>
      </div>
      <div className="history-lists">
        <div className="flex-space-btw">
          <div>
            <div>
              <img />
            </div>
            <h2>title</h2>
            <h2>category</h2>
          </div>
          <div>icon</div>
        </div>
      </div>
    </div>
  );
};

export { HistoryVideos };
