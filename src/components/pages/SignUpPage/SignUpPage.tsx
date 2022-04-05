import React from "react";

function SignUpPage() {
  return (
    <div className="signup-page d-flex justify-content-center align-items-center">
      <div className="d-flex signup-section justify-content-center">
        <div className="w-50">
          <div>
            <div className="sub-section-name pl-4 text-center">RockerZZ</div>

            <div className="w-100 pt-4 pb-2 pr-4 pl-2">
              <div className="signup-form-card p-1">
                <div className="signup-form-border">
                  <div className="signup-form-main d-flex justify-content-center align-items-center text-center pt-4 pb-4">
                    <div className="w-75 signup-form-section">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="w-100">
                          <div className="form-name">Sign Up</div>
                          <form
                            action=""
                            className="d-flex justify-content-center"
                          >
                            <div className="w-100">
                              <div className="input-field">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  className="w-100"
                                />
                              </div>
                              <div className="input-field">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="w-100"
                                />
                              </div>
                              <div className="input-field">
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="w-100"
                                />
                              </div>
                              <div className="input-field">
                                <input
                                  type="tel"
                                  placeholder="Phone Number"
                                  className="w-100"
                                />
                              </div>
                              <div className="checkbox-field">
                                <label className="checkbox-container">
                                  <p className="checkbox-text">
                                    Agree To Our{" "}
                                    <span className="signup-link-text">
                                      Terms And Services
                                    </span>
                                  </p>
                                  <input type="checkbox" />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              <div className="checkbox-field">
                                <label className="checkbox-container">
                                  <p className="checkbox-text">
                                    Receive Upcoming Offers & Events Malls
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </p>
                                </label>
                              </div>
                              <div className="mb-4 mt-5">
                                <input
                                  type="submit"
                                  value="Sign Up"
                                  className="w-100"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      <p className="signup-text text-center">
                        Already Have An Account?
                        <span className="signup-link-text">Log In Here</span>
                      </p>
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

export default SignUpPage;
