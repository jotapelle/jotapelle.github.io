import "./App.css";
import * as Icon from "react-bootstrap-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hi, I'm Jordi!</h2>
        <p>
          I'm a .Net developer with an emphasis on C#, .NET, MVC, and EF for web
          applications. Take a look at my GitHub profile!
        </p>
        <div>
          <a
            className="App-link"
            href="https://github.com/jotapelle?tab=repositories"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <Icon.Github />
          </a>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/jotapelle"
            target="_blank"
            rel="noreferrer"
            title="Freecodecamp"
          >
            <Icon.CodeSquare />
          </a>
          <a
            className="App-link"
            href="https://codepen.io/jotapelle/"
            target="_blank"
            rel="noreferrer"
            title="Codepen"
          >
            <Icon.BoxSeam />
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/jordi-p-50240a112/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <Icon.Linkedin />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
