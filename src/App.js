import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__header__title">
          Hello! My name is Matthew Wright.
        </h1>
        <div className="app__headshot"></div>
      </div>
      <div className="app__description">
        <p className="app__description__paragraph">
          I am a software engineer passionate about building robust,
          user-friendly websites. I specialize in responsive web design,
          front-end development with React, and creating seamless user
          experiences.
        </p>
        <p className="app__description__paragraph">
          I enjoy turning ideas into functional web applications and am always
          learning new and better ways to craft web pages.
        </p>
      </div>
      <h2 className="app__project__title">Projects:</h2>
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
              <p className="app__link-paragraph">
                <a
                  className="app__project-description app__link"
                  href="https://matthew-wright9630.github.io/forest-fire-game/"
                >
                  Live Website
                </a>
              </p>
              <p className="app__link-paragraph">
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
              <b>Project Description: </b>This project was created as a final
              project. Seamless drag-and-drop allows users to use either a mouse
              or touch to play. Responsive web design has been implemented to
              work for most screen sizes.
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
              <li className="app__feature">Mobile Resopnsive Web Design</li>
              <li className="app__feature">User Authentication</li>
              <li className="app__feature">
                Drag-and-drop and Touch-and-drop functionality
              </li>
            </ul>
            <div className="app__links">
              <p className="app__link-paragraph">
                <a
                  className="app__project-description app__link"
                  href="https://mwcardgames.csproject.org/"
                >
                  Live Website
                </a>
              </p>
              <p className="app__link-paragraph">
                <a
                  className="app__project-description app__link"
                  href="https://github.com/matthew-wright9630/Card-Games-Frontend"
                >
                  GitHub - Frontend
                </a>
              </p>
              <p className="app__link-paragraph">
                <a
                  className="app__project-description app__link"
                  href="https://github.com/matthew-wright9630/Card-Games-Backend"
                >
                  GitHub - Backend
                </a>
              </p>
            </div>
          </div>
        </li>
        <li className="app__project">
          <p className="app__project-title">Around the US Project:</p>
          <div className="app__project-group">
            <p className="app__project-description app__paragraph">
              <b>Summary: </b> A mock social media site that allows users to add
              and share photos.
            </p>
            <p className="app__project-description app__tech-stack">
              <b>Tech Stack: </b> HTML, CSS, JavaScript, React.js
            </p>
            <p className="app__project-description app__purpose">
              <b>Project Description: </b> The website simulates a social media
              website, such as Instagram, that allows a user to add photos. The
              user can share their profile with other users so they can view and
              like their photos.
            </p>
            <p className="app__project-description app__role">
              <b>My Role: </b>Built application from Figma design, Built
              application logic.
            </p>
            <ul className="app__project-description app__features">
              <p className="app__feature-title">
                <b>Features:</b>
              </p>
              <li className="app__feature">Responsive web design</li>
              <li className="app__feature">Adding and deleting cards.</li>
            </ul>
            <div className="app__links">
              <p className="app__link-paragraph">
                <a
                  className="app__project-description app__link"
                  href="https://matthew-wright9630.github.io/se_project_aroundtheus_MW/"
                >
                  Live Website
                </a>
              </p>
              <p className="app__link-paragraph">
                <a
                  className="app__project-description app__link"
                  href="https://github.com/matthew-wright9630/se_project_aroundtheus_MW/tree/main?tab=readme-ov-file"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="app__contact-me">
        <p className="app__description">
          Feel free to contact me via{" "}
          <a className="app__link" href="mailto:matthew.wright9630@gmail.com">
            Email
          </a>
          , and connect with me on{" "}
          <a
            className="app__link"
            href="https://www.linkedin.com/in/matthew-wright-a76142149/"
          >
            LinkedIn
          </a>
          !
        </p>
      </div>
      <p className="app__footer">
        <a
          className="app__link"
          href="https://www.freepik.com/free-vector/gradient-cyber-futuristic-background_18954497.htm"
        >
          Image by freepik
        </a>
      </p>
    </div>
  );
}

export default App;
