import React from 'react';
import ReactDom from 'react-dom'

const ErrorDiv = () => {
    return <div>Error Came</div>
}

function ErrorModel() {
  return (
    <React.Fragment>
     {ReactDom.createPortal(<ErrorDiv />, document.getElementById("form-root"))}
    </React.Fragment>
  );
}

export default ErrorModel;
