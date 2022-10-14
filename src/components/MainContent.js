import React from 'react'
import AnimeCard from './AnimeCard';
function MainContent(props) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box">
          <input type="search" placeholder="Search..." required />
        </form>
      </div>
      <div className="anime-list">
        {props.topAnime.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default MainContent
