import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react";

function Details() {
  const [urlManga, setUrlManga] = useState("");

  async function getData() {
    const response = await fetch(`https://manganami.herokuapp.com/list?page=1`);
    const data = await response.json();
    console.log(data.data[0].id);
    setUrlManga(data.data[0].id);
  }
    let { url } = useParams();
  return (
    <div>
      Hello number { url }  <br />
          <button onClick={getData}>Click me</button>
          {urlManga}
    </div>
  );
}

export default Details;
