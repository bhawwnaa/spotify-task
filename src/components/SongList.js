// src/components/SongList.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SongList = ({ songs, currentSongIndex, setCurrentSongIndex }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter(song => 
    song.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ListContainer>
      <SearchBar 
        placeholder="Search Song, Artist" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredSongs.map((song, index) => (
        <SongItem 
          key={song.id} 
          active={index === currentSongIndex}
          onClick={() => setCurrentSongIndex(index)}
        >
          <Cover src={`https://cms.samespace.com/assets/${song.cover}`} alt="Cover" />
          <SongDetails>
            <Title>{song.name}</Title>
            <Artist>{song.artist}</Artist>
          </SongDetails>
        </SongItem>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  flex: 1;
  padding: 20px;
  color: #fff;
`;

const SongItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: #282828;
  }
`;

const Cover = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const SongDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  color: #fff;
`;

const Artist = styled.div`
  font-size: 14px;
  color: #b3b3b3;
`;

const SearchBar = styled.input`
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 8px;
  border: none;
  background-color: #282828;
  color: #fff;
  outline: none;
  width: -webkit-fill-available;
  font-size: 18px;

  &::placeholder {
    color: #b3b3b3;
  }
`;

export default SongList;
