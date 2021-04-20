import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [errors, setErrors] = useState([]);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePixabayResponse(response) {
    setPhotos(response.data.hits);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    // axios.get(apiUrl).then(handleDictionaryResponse);
    axios.get(apiUrl).then(handleDictionaryResponse).catch(renderTheMessage);

    let pixabayApiKey = `21192164-738ba10232f68fdf8ebafce23`;
    let pixabayApiUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${keyword}&image_type=photo&per_page=9`;
    axios.get(pixabayApiUrl).then(handlePixabayResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  function renderTheMessage(error) {
    console.log(error.response.data.title);
    setErrors(error.response.data.title);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            {errors && <h5>{errors}</h5>}
          </form>
          <div className="hint">suggested words: sunset, forest, flower...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
