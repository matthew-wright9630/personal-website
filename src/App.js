import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__header">Hello! My name is Matthew Wright.</h1>
      <p className="app__description">
        I am a software engineer passionate about building robust, user-friendly
        websites. I specialize in responsive web design, front-end development
        with React, and creating seamless user experiences.
      </p>
      <p className="app__description">
        I enjoy turning ideas into functional web applications and am always
        learning new and better ways to craft web pages.
      </p>
      <h2 className="app__header">Projects:</h2>
      <ul className="app__projects">
        <li className="app__project">
          <p className="app__project-title">Forest Fire Project:</p>
          <div className="app__project-group">
            <p className="app__project-description app__paragraph">
              <b>Summary: </b>A browser-based interactive game that simulates
              how a wildfire may spread
            </p>
            <p className="app__project-description app__tech-stack">
              <b>Tech Stack: </b> HTML, CSS, JavaScript, React.js
            </p>
            <p className="app__project-description app__purpose">
              <b>Project Description: </b>Inspired by curricula from University
              of Alaska Outreach GI, this project virtualizes the board game.
              This allows for quicker and easier set-up, particularly for
              younger students.
            </p>
            <p className="app__project-description app__role">
              <b>My Role: </b>Built entire application logic, designed
              interactive interface, and optimized performance for smooth
              rendering.
            </p>
            <ul className="app__project-description app__features">
              <p className="app__feature-title">
                <b>Features:</b>
              </p>
              <li className="app__feature">
                Dynamic grid-based simulation of wildfire spread
              </li>
              <li className="app__feature">
                Adjustable conditions for various simulations
              </li>
              <li className="app__feature">
                Responsive UI for computer and tablet screen sizes
              </li>
            </ul>
            <div className="app__links">
              <p>
                <a
                  className="app__project-description app__link"
                  href="https://matthew-wright9630.github.io/forest-fire-game/"
                >
                  Live Website
                </a>
              </p>
              <p>
                <a
                  className="app__project-description app__link"
                  href="https://github.com/matthew-wright9630/forest-fire-game"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </li>
        <li className="app__project">
          <p className="app__project-title">Card Game Project:</p>
          <div className="app__project-group">
            <p className="app__project-description app__paragraph">
              <b>Summary: </b>A browser-based interactive game that allows users
              to play card games.
            </p>
            <p className="app__project-description app__tech-stack">
              <b>Tech Stack: </b> HTML, CSS, JavaScript, React.js, node.js,
              express.js, mongoDB, NoSQL
            </p>
            <p className="app__project-description app__purpose">
              This project was created as a final project. Seamless
              drag-and-drop allows users to use either a mouse or touch to play.
              Responsive web design has been implemented to work for most screen
              sizes.
            </p>
            <p className="app__project-description app__role">
              <b>My Role: </b>Built entire application logic, integrated REST
              APIs for real-time data, and created authentication system with
              JWT
            </p>
            <ul className="app__project-description app__features">
              <p className="app__feature-title">
                <b>Features:</b>
              </p>
              <li className="app__feature">
                Mobile Resopnsive Web Design
              </li>
              <li className="app__feature">
                User Authentication
              </li>
              <li className="app__feature">
                Drag-and-drop and Touch-and-drop functionality
              </li>
            </ul>
            <div className="app__links">
              <p>
                <a
                  className="app__project-description app__link"
                  href="https://matthew-wright9630.github.io/forest-fire-game/"
                >
                  Live Website
                </a>
              </p>
              <p>
                <a
                  className="app__project-description app__link"
                  href="https://github.com/matthew-wright9630/forest-fire-game"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </li>
        <li className="app__project">
          <p className="app__project-title">Around the US Project:</p>
          <div className="app__project-group">
            <p className="app__project-description app__paragraph">
              <b>Summary: </b>A browser-based interactive game that simulates
              how a wildfire may spread
            </p>
            <p className="app__project-description app__tech-stack">
              <b>Tech Stack: </b> HTML, CSS, JavaScript, React.js
            </p>
            <p className="app__project-description app__purpose">
              <b>Project Description: </b>Inspired by curricula from University
              of Alaska Outreach GI, this project virtualizes the board game.
              This allows for quicker and easier set-up, particularly for
              younger students.
            </p>
            <p className="app__project-description app__role">
              <b>My Role: </b>Built entire application logic, designed
              interactive interface, and optimized performance for smooth
              rendering.
            </p>
            <ul className="app__project-description app__features">
              <p className="app__feature-title">
                <b>Features:</b>
              </p>
              <li className="app__feature">
                Dynamic grid-based simulation of wildfire spread
              </li>
              <li className="app__feature">
                Adjustable conditions for various simulations
              </li>
              <li className="app__feature">
                Responsive UI for computer and tablet screen sizes
              </li>
            </ul>
            <div className="app__links">
              <p>
                <a
                  className="app__project-description app__link"
                  href="https://matthew-wright9630.github.io/forest-fire-game/"
                >
                  Live Website
                </a>
              </p>
              <p>
                <a
                  className="app__project-description app__link"
                  href="https://github.com/matthew-wright9630/forest-fire-game"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <p className="app__footer">
        <a href="https://www.freepik.com/free-vector/gradient-cyber-futuristic-background_18954497.htm">
          Image by freepik
        </a>
      </p>
    </div>
  );
}

export default App;
