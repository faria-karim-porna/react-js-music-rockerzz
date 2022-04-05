import React from "react";

function FormBody() {
  return (
    <div className="login-form-card p-1">
      <div className="login-form-border">
        <div className="login-form-main d-flex justify-content-center align-items-center text-center pt-4 pb-4">
          <div className="w-75 login-form-section">
            <div className="d-flex justify-content-center align-items-center">
              <div className="w-100">
                <div className="form-name">Log In</div>
                <form action="" className="d-flex justify-content-center">
                  <div className="w-100">
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
                    <div className="mb-4 mt-5">
                      <input type="submit" value="Log In" className="w-100" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <p className="login-text text-center">
              Don't Have An Account?
              <span className="login-link-text">Create One</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBody;
