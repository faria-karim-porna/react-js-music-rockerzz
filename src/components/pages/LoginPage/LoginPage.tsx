import React from "react";
import FormBody from "../../common/FormBody";

function LoginPage() {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="d-flex login-section justify-content-center">
        <div className="w-50">
          <div>
            <div className="sub-section-name pl-4 text-center">RockerZZ</div>
            <div className="w-100 pt-4 pb-2 pr-4 pl-2">
              <FormBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
