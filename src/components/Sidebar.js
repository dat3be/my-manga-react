import React from "react";

function Sidebar( {topManga} ) {
  return (
    <aside>
      <nav>
        <h3>Top Manga</h3>
        {topManga.map((manga) => (
          <a
            href={manga.url}
            target="_blank"
            key={manga.mal_id}
            rel="noreferrer"
          >
            {manga.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
