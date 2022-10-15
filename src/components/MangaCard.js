import React from "react";

function MangaCard({ manga }) {
  return (
    <article className="manga-card">
      <a href="#" target="_blank" rel="noreferrer">
        <figure>
          <img src={manga.posterUrl} alt="Manga Image" />
        </figure>
        <h3>{manga.mangaName}</h3>
        <h4>{manga.newestChapter.chapterName}</h4>
        <h5>{manga.newestChapter.updatedAt}</h5>
      </a>
    </article>
  );
}

export default MangaCard;
