import React from "react";
import ProfileBody from "../components/ProfileBody";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
    <div className="App">
      <Sidebar />
      <div className="HeaderAndFeed">
        
        <ProfileBody />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Profile;
