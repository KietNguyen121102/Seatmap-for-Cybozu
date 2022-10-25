import React from "react";

const  ErrorBox = ({ messageError, showErrorBox }) =>{
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          id="exclamation-triangle-fill"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>

      {showErrorBox && (
        <div className="row justify-content-center">
          <div className="alert alert-danger w-75" role="alert" id="login">
            <svg
              className="bi flex-shrink-0 mx-4"
              width="24"
              height="24"
              role="img"
              aria-label="Danger:"
            >
              <use href="#exclamation-triangle-fill" />
            </svg>
            {messageError}
          </div>
        </div>
      )}

      {showErrorBox || (
        <div className="row justify-content-center">
          <div className="alert w-75" role="alert" id="login">
            <svg
              className="bi flex-shrink-0 mx-4"
              width="24"
              height="24"
              role="img"
              aria-label="Danger:"
            ></svg>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default ErrorBox