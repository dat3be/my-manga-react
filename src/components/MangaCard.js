import React from "react";

function MangaCard({ manga }) {
  return (
    <article className="manga-card">
      <a href="#" target="_blank" rel="noreferrer">
        <figure>
          <img src={manga.posterUrl} alt="Manga Image" />
        </figure>
        <h3>
          <strong>{manga.mangaName}</strong>
        </h3>
        <span id="chapterName">{manga.newestChapter.chapterName}</span>
        <span id="chapterUpdateAt">{manga.newestChapter.updatedAt}</span>
      </a>
    </article>
  );
}

export default MangaCard;
