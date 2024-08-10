import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [activeTab, setActiveTab] = useState("For You");

  return (
    <HeaderContainer>
      <Logo>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify"
        />
      </Logo>
      <Tabs>
        <Tab
          isActive={activeTab === "For You"}
          onClick={() => setActiveTab("For You")}
        >
          For You
        </Tab>
        <Tab
          isActive={activeTab === "Top Tracks"}
          onClick={() => setActiveTab("Top Tracks")}
        >
          Top Tracks
        </Tab>
      </Tabs>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 0 20px;
  width: fit-content; /* Full width to ensure responsiveness */
  gap: 115px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px 10px;
  }
`;

const Logo = styled.div`
  img {
    height: 46px;
  }
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  margin-left: -87px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    flex-wrap: wrap; /* Allow tabs to wrap in smaller screens */
  }
`;

const Tab = styled.h4`
  margin: 0 20px;
  color: ${({ isActive }) => (isActive ? "#fff" : "#b3b3b3")};
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export default Header;
