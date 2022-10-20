import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { StyledSearch, StyledTrackList } from "../styles";
import axios from "axios";

const BasedOnHistory = () => {
  // new line start
  const [profileData, setProfileData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "http://localhost:5000/data",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  //end of new line

  return (
    <div>
      <h1 className="">Based on History</h1>
      <br />
      <br />
      <StyledSearch onClick={getData}>Search</StyledSearch>
      {profileData && (
        <div>
          <p>Profile name: {profileData.profile_name}</p>
          <p>About me: {profileData.about_me}</p>
        </div>
      )}
      <StyledTrackList></StyledTrackList>
    </div>
  );
};
export default BasedOnHistory;
