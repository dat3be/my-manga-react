import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import MangaCard from "./MangaCard";
import "../styles/loader.css";

function MainContent(props) {
  return (
    <main>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.useLoadMore}
        hasMore={props.hasLoadMore}
        loader={
          <div className="loader" key={0}>
            <center>
              <div class="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </center>
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
