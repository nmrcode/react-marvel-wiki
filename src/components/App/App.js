import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import { Component, useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        {/*<ErrorBoundary>*/}
        {/*  <RandomChar />*/}
        {/*</ErrorBoundary>*/}
        {/*<div className="char__content">*/}
        {/*  <ErrorBoundary>*/}
        {/*    <CharList onCharSelected={onCharSelected} />*/}
        {/*  </ErrorBoundary>*/}
        {/*  <ErrorBoundary>*/}
        {/*    <CharInfo charId={selectedChar} />*/}
        {/*  </ErrorBoundary>*/}
        {/*</div>*/}
        <AppBanner />
        <ComicsList />
      </main>
    </div>
  );
};

export default App;
