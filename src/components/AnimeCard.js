import React from "react";

function AnimeCard({ anime }) {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.images.webp.image_url} alt="Anime Image" />
        </figure>
              <h3>{anime.title_english} - { anime.title_japanese}</h3>
      </a>
    </article>
  );
}

export default AnimeCard;
