import React from "react";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { DropdownList } from "./components/DropdownList/DropdownList";
import { ResultSection } from "./components/ResultSection/ResultSection";

function App() {
  return (
    <div className="App">
      <NavigationBar className="navigation-bar" />
      <SearchBar />
      <DropdownList />
      <ResultSection />
    </div>
  );
}

export default App;
