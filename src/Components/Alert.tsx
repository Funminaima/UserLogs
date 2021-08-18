import React from "react";

interface Props {
  alert: any;
  closeAlert: () => void;
}

const Alert = ({ alert, closeAlert }: Props) => {
  return (
    <>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className="fa fa-info-circle" style={{ margin: "5px" }} />
          {alert.msg}
          <i
            className="fa fa-times"
            style={{ float: "right", cursor: "pointer" }}
            onClick={closeAlert}
          ></i>
        </div>
      )}
      )
    </>
  );
};

export default Alert;
