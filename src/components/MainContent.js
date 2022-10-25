import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import MangaCard from "./MangaCard";

function MainContent(props) {
  return (
    <main>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.useLoadMore}
        hasMore={props.hasLoadMore}
        loader={
          <div className="loader" key={0}>
            Đang tải truyện ...
          </div>
        }
      >
        <div className="manga-list">
          {props.topManga.map((manga) => (
            <MangaCard manga={manga} key={manga.id} />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
}

export default MainContent;
