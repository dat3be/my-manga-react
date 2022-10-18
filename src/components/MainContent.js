import React from "react";
import MangaCard from "./MangaCard";

function MainContent(props) {
  return (
    <main>
      <div className="manga-list">
        {props.topManga.map((manga) => (
          <MangaCard manga={manga} key={manga.id} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
