import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SongList from "./components/SongList";
import Player from "./components/Player";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import { X } from 'react-bootstrap-icons';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://cms.samespace.com/items/songs"
        );
        setSongs(response.data.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  if (songs.length === 0) {
    return <p>Loading...</p>;
  }

  const currentSong = songs[currentSongIndex];

  return (
    <>
      <Header />
      <Container>
        <Row className="align-items-center justify-content-evenly">
          {/* Menu Button for Mobile */}
          <Col xs={12} className="d-block d-md-none text-center">
            <Button 
              variant="primary" 
              onClick={() => setShowMenu(true)}
              className="mb-3 bg-black border-0"
            >
              Show Song List
            </Button>
          </Col>

          {/* Offcanvas Menu for Mobile */}
          <Offcanvas 
            show={showMenu} 
            onHide={() => setShowMenu(false)} 
            placement="start"
            className="d-md-none bg-black"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="text-white">Song List</Offcanvas.Title>
              <Button variant="link" className="text-white" onClick={() => setShowMenu(false)}>
                <X size={30} />
              </Button>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SongList
                songs={songs}
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
              />
            </Offcanvas.Body>
          </Offcanvas>

          {/* Song List and Player */}
          <Col xs={12} lg={4} xl={4} className="d-none d-md-block">
            <SongList
              songs={songs}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
            />
          </Col>
          <Col xs={12} lg={5} xl={5}>
            <Player
              currentSong={currentSong}
              isPlaying={isPlaying}
              handlePlayPause={handlePlayPause}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
