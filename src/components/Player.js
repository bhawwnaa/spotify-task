import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const Player = ({ currentSong, isPlaying, handlePlayPause, handleNext, handlePrevious }) => {
  useEffect(() => {
    if (currentSong.cover) {
      const coverImageUrl = `https://cms.samespace.com/assets/${currentSong.cover}`;
      document.body.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${coverImageUrl})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.transition = 'background 0.5s ease-in-out';
    }
  }, [currentSong.cover]);

  return (
    <PlayerContainer>
      <SongInfo>
        <Title>{currentSong.name}</Title>
        <Artist>{currentSong.artist}</Artist>
      </SongInfo>
      <CoverImage src={`https://cms.samespace.com/assets/${currentSong.cover}`} alt="Cover" />
      <Controls>
        <Button onClick={handlePrevious}><FaBackward /></Button>
        <Button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button onClick={handleNext}><FaForward /></Button>
      </Controls>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #121212;
  color: #fff;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 65vh;
  border-radius: 4px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const SongInfo = styled.div`
  margin: 20px 0;
  text-align: left;
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
`;

const Artist = styled.h6`
  margin: 0;
  color: #b3b3b3;
`;

const Controls = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #1db954;
  }
`;

export default Player;








