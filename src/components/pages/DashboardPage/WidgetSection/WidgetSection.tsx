import React from "react";

function WidgetSection() {
  return (
    <div className="dashboard-widget-section d-flex justify-content-between">
      <div className="dashboard-widget-box">
        <div className="dashboard-widget-box-inner d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="dashboard-widget-text-main">Video</div>
            <div>Albums</div>
            <div>256</div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget-box">
        <div className="dashboard-widget-box-inner d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="dashboard-widget-text-main">Audio</div>
            <div>Albums</div>
            <div>113</div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget-box">
        <div className="dashboard-widget-box-inner d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="dashboard-widget-text-main">
              Total Downloaded Video
            </div>
            <div>Albums</div>
            <div>1000+</div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget-box">
        <div className="dashboard-widget-box-inner d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="dashboard-widget-text-main">
              Total Downloaded Audio
            </div>
            <div>Albums</div>
            <div>2121+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetSection;
