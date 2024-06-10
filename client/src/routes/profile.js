import React from "react";
import ProfileBody from "../components/ProfileBody";
import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="App">
      <Sidebar />
      <div className="HeaderAndFeed">
        
        <ProfileBody />
      </div>
    </div>
  );
}

export default Profile;
