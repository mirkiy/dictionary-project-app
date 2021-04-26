import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sun" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/mirkiy/dictionary-project-app"
              target="_blank "
              rel="noreferrer"
            >
              Open-source code -
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/miroslava-zacharova/"
              target="_"
              rel="noreferrer"
            >
              {" "}
              by Mirka Zacharova
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
