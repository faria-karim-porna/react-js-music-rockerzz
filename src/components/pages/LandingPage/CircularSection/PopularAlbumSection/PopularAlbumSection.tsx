import React, { useEffect } from "react";
import popularAlbumImage from "../../../../../assets/images/1.jpg";
function PopularAlbumSection() {
  useEffect(() => {
    (document.getElementsByClassName("popular-album-slider") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "1s";
  }, []);

  const updatePopularAlbumSectionForward = () => {
    const forwardInterval = setInterval(() => {
      if (
        (parseInt((document.getElementsByClassName("popular-album-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) !==
        -2100
      ) {
        const translateValue =
          (parseInt((document.getElementsByClassName("popular-album-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) -
          1050;
        (document.getElementsByClassName("popular-album-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right = `${translateValue}px`;
      } else {
        clearInterval(forwardInterval);
        updatePopularAlbumSectionBackward();
      }
    }, 2000);
  };

  const updatePopularAlbumSectionBackward = () => {
    const backwardInterval = setInterval(() => {
      if (
        (parseInt((document.getElementsByClassName("popular-album-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) !== 0
      ) {
        const translateValue =
          (parseInt((document.getElementsByClassName("popular-album-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right, 10) || 0) +
          1050;
        (document.getElementsByClassName("popular-album-slider") as HTMLCollectionOf<HTMLElement>)[0].style.right = `${translateValue}px`;
      } else {
        clearInterval(backwardInterval);
        updatePopularAlbumSectionForward();
      }
    }, 2000);
  };

  updatePopularAlbumSectionForward();

  return (
    <div className="popular-album-section">
      <div className="section-name w-100 text-center">Popular Albums</div>
      <div className="w-100 d-flex justify-content-center mt-5">
        <div className="d-flex align-items-center popular-album-slider-section">
          <div className="d-flex popular-album-slider">
            <div className="d-flex album-group justify-content-around">
              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex album-group justify-content-around">
              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex album-group justify-content-around">
              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="album-card-border">
                <div className="album-card">
                  <div className="d-flex justify-content-center">
                    <img src={popularAlbumImage} alt="" className="img-fluid album-image" />
                  </div>
                  <div className="album-detail">
                    <div className="text-center album-text">Song Name - Album Name</div>
                    <div className="d-flex justify-content-center">
                      <div className="text-center album-text mr-3">Artists Name</div>
                      <div className="d-flex justify-content-center album-genre-border">
                        <div className="album-genre">
                          <div className="text-center album-genre-text">Genre Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularAlbumSection;
