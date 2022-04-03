import React from "react";

function ComingSoonSection() {
  return (
    <div className="coming-soon-section w-100 d-flex justify-content-center">
      <div className="d-flex w-75 justify-content-center">
        <div className="d-flex justify-content-start align-items-center w-50 mr-4">
          <div>
            <div className="coming-soon-main-text text-center">Coming Soon</div>
            <div className="coming-soon-sub-text text-center">Album Name</div>
            <div className="d-flex">
              <div className="coming-soon-sub-text mr-3">Artists Name</div>
              <div className="coming-soon-album-genre-border">
                <div className="coming-soon-album-genre">
                  <div className="coming-soon-album-genre-text">Genre Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-end">
          <div>
            <div className="coming-soon-album-card-border">
              <div className="coming-soon-album-card">
                <div className="coming-soon-album-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonSection;
