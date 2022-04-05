import React, { useEffect } from "react";

function AudioPageBody() {
  let isPlaying = false;
  let audioSource: MediaElementAudioSourceNode;
  let analyzer: AnalyserNode;

  // The number of bars that should be displayed
  const NBR_OF_BARS = 20;

  const playSong = () => {
    isPlaying = true;
    //  Add CD rotation
    const cdDisk = document.getElementById("cd-disk");
    (cdDisk as HTMLElement).classList.add("cd-disk-rotation");

    //  Remove Pause Icon and Add Play Icon
    const icon = document.getElementById("play-pause-icon");
    (icon as HTMLElement).classList.remove("fa-play-circle");
    (icon as HTMLElement).classList.add("fa-pause-circle");

    // Get the audio element tag
    const audio = document.querySelector("audio");
    (audio as HTMLAudioElement).src =
      "https://greggman.github.io/doodles/sounds/DOCTOR VOX - Level Up.mp3";
    // (audio as HTMLAudioElement).load();

    // Create an audio context
    const ctx = new AudioContext();

    // Create an audio source
    if (audioSource === undefined) {
      audioSource = ctx.createMediaElementSource(audio as HTMLAudioElement);
      // Create an audio analyzer
      analyzer = ctx.createAnalyser();

      // Connect the source, to the analyzer, and then back the the context's destination
      audioSource.connect(analyzer);
      audioSource.connect(ctx.destination);
    }

    // Print the analyze frequencies
    const frequencyData = new Uint8Array(
      (analyzer as AnalyserNode).frequencyBinCount
    );
    (analyzer as AnalyserNode).getByteFrequencyData(frequencyData);
    console.log("frequencyData", frequencyData);

    // Get the visualizer container
    const visualizerContainer = document.querySelector(".visualizer-container");

    // Create a set of pre-defined bars
    for (let i = 0; i < NBR_OF_BARS; i++) {
      const bar = document.createElement("DIV");
      (bar as HTMLElement).setAttribute("id", "bar" + i);
      (bar as HTMLElement).setAttribute("class", "visualizer-container__bar");
      (visualizerContainer as Element).appendChild(bar);
    }

    // This function has the task to adjust the bar heights according to the frequency data
    const renderFrame = () => {
      // Update our frequency data array with the latest frequency data
      (analyzer as AnalyserNode).getByteFrequencyData(frequencyData);

      for (let i = 0; i < NBR_OF_BARS; i++) {
        // Since the frequency data array is 1024 in length, we don't want to fetch
        // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
        const index = (i + 10) * 2;
        // fd is a frequency value between 0 and 255
        let fd = frequencyData[index];
        fd = fd / 3;
        // Fetch the bar DIV element
        const bar = document.querySelector("#bar" + i);
        if (!bar) {
          continue;
        }

        // If fd is undefined, default to 0, then make sure fd is at least 4
        // This will make make a quiet frequency at least 4px high for visual effects
        const barHeight = Math.max(1, fd || 0);
        (bar as HTMLElement).style.height = barHeight + "px";
      }

      // At the next animation frame, call ourselves
      window.requestAnimationFrame(renderFrame);
    };

    renderFrame();

    (audio as HTMLAudioElement).volume = 0.1;
    (audio as HTMLAudioElement).play();
  };

  const pauseSong = () => {
    isPlaying = false;
    //  Remove CD rotation
    const cdDisk = document.getElementById("cd-disk");
    (cdDisk as HTMLElement).classList.remove("cd-disk-rotation");

    //  Remove Play Icon and Add Pause Icon
    const icon = document.getElementById("play-pause-icon");
    (icon as HTMLElement).classList.remove("fa-pause-circle");
    (icon as HTMLElement).classList.add("fa-play-circle");

    // Remove a set of pre-defined bars
    for (let i = 0; i < NBR_OF_BARS; i++) {
      const bar = document.getElementById("bar" + i);
      (bar as HTMLElement).remove();
    }

    // Get the audio element tag
    const audio = document.querySelector("audio");
    (audio as HTMLAudioElement).pause();
  };

  const playPause = () => {
    isPlaying ? pauseSong() : playSong();
  };

  const changeDuration = () => {
    // Get the audio element tag
    const audio = document.querySelector("audio");

    //change audio time based on slider
    let durationSlider = document.querySelector("#duration-slider");
    const sliderPosition =
      (audio as HTMLAudioElement).duration *
      (Number((durationSlider as HTMLInputElement).value) / 100);
    (audio as HTMLAudioElement).currentTime = sliderPosition;
    const sliderPoint =
      (audio as HTMLAudioElement).currentTime *
      (100 / (audio as HTMLAudioElement).duration);
    // change slider fill
    (
      durationSlider as HTMLInputElement
    ).style.background = `linear-gradient(90deg, transparent ${sliderPoint}%, white ${
      sliderPoint + 0.1
    }%)`;
  };

  const changeVolume = () => {
    // Get the audio element tag
    const audio = document.querySelector("audio");

    //change audio volume based on slider
    let volumeSlider = document.querySelector("#volume-slider");
    const volumeSliderPosition =
      Number((volumeSlider as HTMLInputElement).value) / 100;
    (audio as HTMLAudioElement).volume = volumeSliderPosition;
    const volumeSliderPoint = volumeSliderPosition * 100;
    // change volume slider fill
    (
      volumeSlider as HTMLElement
    ).style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${
      volumeSliderPoint + 0.1
    }%)`;
  };

  const upDateDuration = () => {
    // Get the audio element tag
    const audio = document.querySelector("audio");

    //change slider based on audio time
    let durationSlider = document.querySelector("#duration-slider");
    if (!isNaN((audio as HTMLAudioElement).duration)) {
      const sliderPosition =
        (audio as HTMLAudioElement).currentTime *
        (100 / (audio as HTMLAudioElement).duration);
      (durationSlider as HTMLInputElement).value = String(sliderPosition);
      // change slider fill
      (
        durationSlider as HTMLInputElement
      ).style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
        sliderPosition + 0.1
      }%)`;
    }
  };

  const forwardDuration = () => {
    // Get the audio element tag
    const audio = document.querySelector("audio");

    //change slider based on audio time
    let durationSlider = document.querySelector("#duration-slider");
    if (!isNaN((audio as HTMLAudioElement).duration)) {
      // to speed up the audio
      // (audio as HTMLAudioElement).playbackRate = (audio as HTMLAudioElement).playbackRate + 0.5;
      // forward the current audio for 10s
      (audio as HTMLAudioElement).currentTime =
        (audio as HTMLAudioElement).currentTime + 10;
      const sliderPosition =
        (audio as HTMLAudioElement).currentTime *
        (100 / (audio as HTMLAudioElement).duration);
      (durationSlider as HTMLInputElement).value = String(sliderPosition);
      // change slider fill
      (
        durationSlider as HTMLInputElement
      ).style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
        sliderPosition + 0.1
      }%)`;
    }
  };

  const backwardDuration = () => {
    // Get the audio element tag
    const audio = document.querySelector("audio");

    //change slider based on audio time
    let durationSlider = document.querySelector("#duration-slider");
    if (!isNaN((audio as HTMLAudioElement).duration)) {
      // to speed down the audio
      // (audio as HTMLAudioElement).playbackRate = (audio as HTMLAudioElement).playbackRate - 0.5;
      // backward the current audio for 10s
      (audio as HTMLAudioElement).currentTime =
        (audio as HTMLAudioElement).currentTime - 10;
      const sliderPosition =
        (audio as HTMLAudioElement).currentTime *
        (100 / (audio as HTMLAudioElement).duration);
      (durationSlider as HTMLInputElement).value = String(sliderPosition);
      // change slider fill
      (
        durationSlider as HTMLInputElement
      ).style.background = `linear-gradient(90deg, transparent ${sliderPosition}%, white ${
        sliderPosition + 0.1
      }%)`;
    }
  };

  const addToFavorite = () => {
    const favorite = document.getElementById("favorite");
    (favorite as HTMLElement).classList.toggle("add-to-favorite");
  };

  setInterval(upDateDuration, 1000);

  // change volume slider fill
  useEffect(() => {
    const volumeSlider = document.querySelector("#volume-slider");
    const volumeSliderPosition =
      Number((volumeSlider as HTMLInputElement).value) / 100;
    const volumeSliderPoint = volumeSliderPosition * 100;
    (
      volumeSlider as HTMLInputElement
    ).style.background = `linear-gradient(90deg, transparent ${volumeSliderPoint}%, white ${
      volumeSliderPoint + 0.1
    }%)`;
  }, []);

  return (
    <div className="audio-page p-5">
      <div className="d-none">
        <audio controls crossOrigin="1"></audio>
      </div>

      <div className="d-flex audio-section">
        <div className="w-50">
          <div className="">
            <div className="sub-section-name pl-4">Now Playing...</div>

            <div className="w-100 pt-4 pb-2 pr-4 pl-2">
              <div className="audio-player-card p-1">
                <div className="audio-player-border">
                  <div className="audio-player-main d-flex justify-content-center align-items-center text-center pt-4 pb-4">
                    <div className="w-75 audio-player-section">
                      <div className="d-flex justify-content-center">
                        <div
                          className="cd-disk d-flex justify-content-center align-items-center disk-3"
                          id="cd-disk"
                        >
                          <div className="circular-slide-image d-flex justify-content-center align-items-center">
                            <div className="cd-disk-border d-flex justify-content-center align-items-center">
                              <div className="cd-disk-inner d-flex justify-content-center align-items-center">
                                <div className="cd-disk-hole"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center position-relative">
                        <div className="visualizer-container"></div>
                      </div>

                      <div className="audio-player-actions">
                        <input
                          type="range"
                          name=""
                          min="0"
                          max="100"
                          value="0"
                          id="duration-slider"
                          onChange={() => changeDuration()}
                        />
                        <div className="range-fill"></div>

                        <div className="audio-player-buttons d-flex justify-content-between align-items-center">
                          <div
                            className="w-25"
                            onClick={() => addToFavorite()}
                            id="favorite"
                          >
                            <i className="fa fa-heart"></i>
                          </div>
                          <div className="d-flex align-items-center">
                            <div onClick={() => backwardDuration()}>
                              <i className="fa fa-step-backward"></i>
                            </div>
                            <div onClick={() => playPause()}>
                              <i
                                className="fa fa-play-circle"
                                id="play-pause-icon"
                              ></i>
                            </div>
                            <div onClick={() => forwardDuration()}>
                              <i className="fa fa-step-forward"></i>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-end w-25">
                            <i className="fa fa-volume-up mr-2"></i>
                            <div className="volume-range">
                              <input
                                type="range"
                                name=""
                                id="volume-slider"
                                min="0"
                                max="100"
                                value="10"
                                onClick={() => changeVolume()}
                              />
                              <div className="volume-range-fill"></div>
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

        <div className="w-50">
          <div className="">
            <div className="sub-section-name pl-4">Playlist</div>

            <div className="w-100 pt-4 pb-2 pr-4 pl-4">
              <div className="playlist-card p-1">
                <div className="playlist-border">
                  <div className="playlist-main d-flex justify-content-center">
                    <div className="d-flex align-items-center text-center w-90">
                      <div className="top-chart-text w-5 d-flex justify-content-center">
                        1
                      </div>
                      <div className="w-20 d-flex justify-content-center">
                        <div className="top-chart-image"></div>
                      </div>
                      <div className="top-chart-text w-70">
                        <div>audio album Name</div>
                        <div>Song Name - Artist Name</div>
                      </div>
                      <div className="top-chart-button d-flex align-items-center justify-content-center">
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 pt-2 pb-2 pr-4 pl-4">
              <div className="playlist-card p-1">
                <div className="playlist-border">
                  <div className="playlist-main d-flex justify-content-center">
                    <div className="d-flex align-items-center text-center w-90">
                      <div className="top-chart-text w-5 d-flex justify-content-center">
                        1
                      </div>
                      <div className="w-20 d-flex justify-content-center">
                        <div className="top-chart-image"></div>
                      </div>
                      <div className="top-chart-text w-70">
                        <div>audio album Name</div>
                        <div>Song Name - Artist Name</div>
                      </div>
                      <div className="top-chart-button d-flex align-items-center justify-content-center">
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 pt-2 pb-2 pr-4 pl-4">
              <div className="playlist-card p-1">
                <div className="playlist-border">
                  <div className="playlist-main d-flex justify-content-center">
                    <div className="d-flex align-items-center text-center w-90">
                      <div className="top-chart-text w-5 d-flex justify-content-center">
                        1
                      </div>
                      <div className="w-20 d-flex justify-content-center">
                        <div className="top-chart-image"></div>
                      </div>
                      <div className="top-chart-text w-70">
                        <div>audio album Name</div>
                        <div>Song Name - Artist Name</div>
                      </div>
                      <div className="top-chart-button d-flex align-items-center justify-content-center">
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 pt-2 pb-2 pr-4 pl-4">
              <div className="playlist-card p-1">
                <div className="playlist-border">
                  <div className="playlist-main d-flex justify-content-center">
                    <div className="d-flex align-items-center text-center w-90">
                      <div className="top-chart-text w-5 d-flex justify-content-center">
                        1
                      </div>
                      <div className="w-20 d-flex justify-content-center">
                        <div className="top-chart-image"></div>
                      </div>
                      <div className="top-chart-text w-70">
                        <div>audio album Name</div>
                        <div>Song Name - Artist Name</div>
                      </div>
                      <div className="top-chart-button d-flex align-items-center justify-content-center">
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 pt-2 pb-4 pr-4 pl-4">
              <div className="playlist-card p-1">
                <div className="playlist-border">
                  <div className="playlist-main d-flex justify-content-center">
                    <div className="d-flex align-items-center text-center w-90">
                      <div className="top-chart-text w-5 d-flex justify-content-center">
                        1
                      </div>
                      <div className="w-20 d-flex justify-content-center">
                        <div className="top-chart-image"></div>
                      </div>
                      <div className="top-chart-text w-70">
                        <div>audio album Name</div>
                        <div>Song Name - Artist Name</div>
                      </div>
                      <div className="top-chart-button d-flex align-items-center justify-content-center">
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="sub-section-name w-100 text-center">
          Popular Audio Albums
        </div>
        <div className="w-100 d-flex justify-content-center mt-5">
          <div className="d-flex align-items-center audio-album-slider-section">
            <div className="d-flex audio-album-slider">
              <div className="d-flex audio-album-group justify-content-around">
                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-4">
                        <i className="fa fa-play-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-4">
                        <i className="fa fa-play-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
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
              <div className="d-flex audio-album-group justify-content-around">
                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-4">
                        <i className="fa fa-play-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-4">
                        <i className="fa fa-play-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
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
              <div className="d-flex audio-album-group justify-content-around">
                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-4">
                        <i className="fa fa-play-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-4">
                        <i className="fa fa-play-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audio-album-card-border">
                  <div className="audio-album-card">
                    <div className="d-flex justify-content-center">
                      <img
                        src="images/1.jpg"
                        alt=""
                        className="img-fluid audio-album-image"
                      />
                    </div>
                    <div className="audio-album-detail">
                      <div className="text-center audio-album-text">
                        Song Name - Album Name
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="text-center audio-album-text mr-3">
                          Artists Name
                        </div>
                        <div className="d-flex justify-content-center audio-album-genre-border">
                          <div className="audio-album-genre">
                            <div className="text-center audio-album-genre-text">
                              Genre Name
                            </div>
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
  );
}

export default AudioPageBody;
