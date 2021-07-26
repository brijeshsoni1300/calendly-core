import React from "react";
import "./AppEngineMeetInfo.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CallIcon from '@material-ui/icons/Call';

function AppEngineMeetInfo() {
  return (
    <div className="appEngineMeetInfo">
      <button className="appEngineMeetInfo__backwordIcon">
        <ArrowBackIcon fontSize="large" color="primary" />
      </button>
      <div className="appEngineMeetInfo__host">
        <h4>Brijesh Soni</h4>
      </div>
      <div className="appEngineMeetInfo__title">
        <h1>Meeting with doreamon</h1>
      </div>
      <div className="appEngineMeetInfo__duration">
		<AccessTimeIcon  />
        <p>1 hr</p>
      </div>
      <div className="appEngineMeetInfo__mode">
	  	<CallIcon />
        <p>Phone call</p>
      </div>
      <div className="appEngineMeetInfo__disc">
        <p>meeting with doreamon for a testing purpose</p>
      </div>
    </div>
  );
}

export default AppEngineMeetInfo;
