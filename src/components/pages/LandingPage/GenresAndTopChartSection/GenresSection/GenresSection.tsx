import React from "react";

function GenresSection() {
  return (
    <div className="genres-section">
      <div className="sub-section-name pl-4">Genres</div>

      <div className="d-flex">
        <div className="w-25 pt-4 pb-2 pr-2 pl-4">
          <div className="genres-category-card p-1">
            <div className="genres-category-border">
              <div className="genres-category-main d-flex justify-content-center align-items-center text-center">
                <div className="genre-text">
                  Dance <br />
                  Beat
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-75 pt-4 pb-2 pr-4 pl-2">
          <div className="genres-category-card p-1">
            <div className="genres-category-border">
              <div className="genres-category-main d-flex justify-content-center align-items-center text-center">
                <div className="genre-text">
                  Pop <br />
                  Punk
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="w-75 pt-2 pb-2 pr-2 pl-4">
          <div className="genres-category-card p-1">
            <div className="genres-category-border">
              <div className="genres-category-main d-flex justify-content-center align-items-center text-center">
                <div className="genre-text">
                  Alternative <br />
                  Indie
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-25 pt-2 pb-2 pr-4 pl-2">
          <div className="genres-category-card p-1">
            <div className="genres-category-border">
              <div className="genres-category-main d-flex justify-content-center align-items-center text-center">
                <div className="genre-text">
                  Hip <br />
                  Hop
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="w-25 pt-2 pb-4 pr-2 pl-4">
          <div className="genres-category-card p-1">
            <div className="genres-category-border">
              <div className="genres-category-main d-flex justify-content-center align-items-center text-center">
                <div className="genre-text">Punk</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-75 pt-2 pb-4 pr-4 pl-2">
          <div className="genres-category-card p-1">
            <div className="genres-category-border">
              <div className="genres-category-main d-flex justify-content-center align-items-center text-center">
                <div className="genre-text">
                  Hip Hop <br />
                  Rap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresSection;
