import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/mirkiy/dictionary-project-app"
              target="_blank "
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Mirka Zacharova
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
