import React, { useEffect } from "react";

function PopularArtistsSection() {
  
  useEffect(() => {
    (document.getElementsByClassName("popular-artist-slider") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";
  }, []);

  const popularArtistForwardButton = () => {
    if (
      (parseInt((document.getElementsByClassName("popular-artist-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) !==
      -1470
    ) {
      const translateValue =
        (parseInt((document.getElementsByClassName("popular-artist-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) -
        210;
      (document.getElementsByClassName("popular-artist-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right = `${translateValue}px`;
    }
  };

  const popularArtistBackwardButton = () => {
    if (
      (parseInt((document.getElementsByClassName("popular-artist-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) !== 0
    ) {
      const translateValue =
        (parseInt((document.getElementsByClassName("popular-artist-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) +
        210;
      (document.getElementsByClassName("popular-artist-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right = `${translateValue}px`;
    }
  };

  // function updateForward() {
  //   const forwardInterval = setInterval(() => {
  //     if ((parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) !== -1470) {
  //       const translateValue = (parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) - 210;
  //       document.getElementsByClassName("popular-artist-slider")[0].style.right = `${translateValue}px`;
  //     } else {
  //       clearInterval(forwardInterval);
  //       updateBackward();
  //     }
  //   }, 1000);
  // }

  // function updateBackward() {
  //   const backwardInterval = setInterval(() => {
  //     if ((parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) !== 0) {
  //       const translateValue = (parseInt(document.getElementsByClassName("popular-artist-slider")[0].style.right, 10) || 0) + 210;
  //       document.getElementsByClassName("popular-artist-slider")[0].style.right = `${translateValue}px`;
  //     } else {
  //       clearInterval(backwardInterval);
  //       updateForward();
  //     }
  //   }, 1000);
  // }

  // updateForward();

  return (
    <div className="popular-artist-section">
      <div className="section-name w-100 text-center">Popular Artists</div>
      <div className="d-flex justify-content-around align-items-center mt-5">
        <div className="d-flex justify-content-center cursor-pointer pt-2 pb-2 pl-3 pr-3" onClick={() => popularArtistBackwardButton()}>
          <div className="popular-artist-button">&#10094;</div>
        </div>
        <div className="popular-artist-cards">
          <div className="d-flex align-items-center popular-artist-slider">
            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>

            <div className="popular-artist-card-border">
              <div className="popular-artist-card">
                <div className="popular-artist-image"></div>
                <div className="popular-artist-info-overlay">
                  <div className="d-flex justify-content-center align-items-center popular-artist-name">Artist Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center cursor-pointer pt-2 pb-2 pl-3 pr-3" onClick={() => popularArtistForwardButton()}>
          <div className="popular-artist-button">&#10095;</div>
        </div>
      </div>
    </div>
  );
}

export default PopularArtistsSection;
