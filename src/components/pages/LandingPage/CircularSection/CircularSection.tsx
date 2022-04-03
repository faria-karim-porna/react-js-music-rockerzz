import React, { useEffect } from "react";
import popularAlbumImage from "../../../../assets/images/1.jpg";

function CircularSection() {
  useEffect(() => {
    (document.getElementsByClassName("disk-1") as HTMLCollectionOf<HTMLElement>)[0].style.left = "24%";
    (document.getElementsByClassName("disk-1") as HTMLCollectionOf<HTMLElement>)[0].style.top = "160px";
    (document.getElementsByClassName("disk-1") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";

    (document.getElementsByClassName("disk-2") as HTMLCollectionOf<HTMLElement>)[0].style.left = "42%";
    (document.getElementsByClassName("disk-2") as HTMLCollectionOf<HTMLElement>)[0].style.top = "10px";
    (document.getElementsByClassName("disk-2") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";

    (document.getElementsByClassName("disk-3") as HTMLCollectionOf<HTMLElement>)[0].style.left = "60%";
    (document.getElementsByClassName("disk-3") as HTMLCollectionOf<HTMLElement>)[0].style.top = "160px";
    (document.getElementsByClassName("disk-3") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";

    (document.getElementsByClassName("disk-4") as HTMLCollectionOf<HTMLElement>)[0].style.left = "70%";
    (document.getElementsByClassName("disk-4") as HTMLCollectionOf<HTMLElement>)[0].style.top = "510px";
    (document.getElementsByClassName("disk-4") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";

    (document.getElementsByClassName("disk-5") as HTMLCollectionOf<HTMLElement>)[0].style.left = "60%";
    (document.getElementsByClassName("disk-5") as HTMLCollectionOf<HTMLElement>)[0].style.top = "860px";
    (document.getElementsByClassName("disk-5") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";

    (document.getElementsByClassName("disk-6") as HTMLCollectionOf<HTMLElement>)[0].style.left = "42%";
    (document.getElementsByClassName("disk-6") as HTMLCollectionOf<HTMLElement>)[0].style.top = "1010px";
    (document.getElementsByClassName("disk-6") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";

    (document.getElementsByClassName("disk-7") as HTMLCollectionOf<HTMLElement>)[0].style.left = "24%";
    (document.getElementsByClassName("disk-7") as HTMLCollectionOf<HTMLElement>)[0].style.top = "860px";
    (document.getElementsByClassName("disk-7") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";

    (document.getElementsByClassName("disk-8") as HTMLCollectionOf<HTMLElement>)[0].style.left = "14%";
    (document.getElementsByClassName("disk-8") as HTMLCollectionOf<HTMLElement>)[0].style.top = "510px";
    (document.getElementsByClassName("disk-8") as HTMLCollectionOf<HTMLElement>)[0].style.transition = "0.5s";
  }, []);

  const circularLeftTopValueForward = (className: string): void => {
    const leftValue = (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left;
    const topValue = (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top;
    if (leftValue === "24%" && topValue === "160px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "42%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "10px";
    } else if (leftValue === "42%" && topValue === "10px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "60%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "160px";
    } else if (leftValue === "60%" && topValue === "160px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "70%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "510px";
    } else if (leftValue === "70%" && topValue === "510px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "60%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "860px";
    } else if (leftValue === "60%" && topValue === "860px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "42%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "1010px";
    } else if (leftValue === "42%" && topValue === "1010px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "24%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "860px";
    } else if (leftValue === "24%" && topValue === "860px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "14%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "510px";
    } else {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "24%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "160px";
    }
  };

  const circularLeftTopValueBackward = (className: string): void => {
    const leftValue = (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left;
    const topValue = (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top;
    if (leftValue === "24%" && topValue === "160px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "14%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "510px";
    } else if (leftValue === "42%" && topValue === "10px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "24%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "160px";
    } else if (leftValue === "60%" && topValue === "160px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "42%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "10px";
    } else if (leftValue === "70%" && topValue === "510px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "60%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "160px";
    } else if (leftValue === "60%" && topValue === "860px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "70%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "510px";
    } else if (leftValue === "42%" && topValue === "1010px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "60%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "860px";
    } else if (leftValue === "24%" && topValue === "860px") {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "42%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "1010px";
    } else {
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.left = "24%";
      (document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>)[0].style.top = "860px";
    }
  };

  const circularForwardButton = (): void => {
    circularLeftTopValueForward("disk-1");
    circularLeftTopValueForward("disk-2");
    circularLeftTopValueForward("disk-3");
    circularLeftTopValueForward("disk-4");
    circularLeftTopValueForward("disk-5");
    circularLeftTopValueForward("disk-6");
    circularLeftTopValueForward("disk-7");
    circularLeftTopValueForward("disk-8");
  };

  const circularBackwardButton = (): void => {
    circularLeftTopValueBackward("disk-1");
    circularLeftTopValueBackward("disk-2");
    circularLeftTopValueBackward("disk-3");
    circularLeftTopValueBackward("disk-4");
    circularLeftTopValueBackward("disk-5");
    circularLeftTopValueBackward("disk-6");
    circularLeftTopValueBackward("disk-7");
    circularLeftTopValueBackward("disk-8");
  };
  return (
    <div>
      <div className="section-name w-100 text-center">Latest Songs</div>
      <div className="circular-section">
        <div className="d-flex w-100">
          <div
            className="circular-section-button d-flex justify-content-center align-items-center prev-button"
            onClick={() => circularBackwardButton()}
          >
            &#10094;
          </div>
          <div className="circular-slider">
            <div className="cd-disk d-flex justify-content-center align-items-center disk-1">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cd-disk d-flex justify-content-center align-items-center disk-2">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cd-disk d-flex justify-content-center align-items-center disk-3">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cd-disk d-flex justify-content-center align-items-center disk-4">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cd-disk d-flex justify-content-center align-items-center disk-5">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cd-disk d-flex justify-content-center align-items-center disk-6">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cd-disk d-flex justify-content-center align-items-center disk-7">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cd-disk d-flex justify-content-center align-items-center disk-8">
              <div className="circular-slide-image d-flex justify-content-center align-items-center">
                <div className="cd-disk-border d-flex justify-content-center align-items-center">
                  <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                    <div className="cd-disk-hole"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="circular-section-button d-flex justify-content-center align-items-center next-button"
            onClick={() => circularForwardButton()}
          >
            &#10095;
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default CircularSection;
