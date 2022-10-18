import React from 'react'
import MangaCard from './MangaCard';
import Navbar from './Navbar';

function MainContent(props) {
  return (
    <main>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-head">
        <form className="search-box">
          <input type="search" placeholder="Tìm truyện..." required />
        </form>
      </div>
      <div className="manga-list">
        {props.topManga.map((manga) => (
          <MangaCard manga={manga} key={manga.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
