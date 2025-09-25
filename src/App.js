import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import wildfireHomepage from "./assets/Wildfire-Homescreen.png";
import wildfireStartImage from "./assets/Wildfire-Gameboard-Start.png";
import wildfireEndImage from "./assets/Wildfire-Gameboard-End.png";
import cardGameHomepage from "./assets/Card-Game-Homepage.png";
import cardGameModal from "./assets/Card-Game-Modal.png";
import cardGameSolitaire from "./assets/Solitaire-Game.png";
import cardGameSolitaireStart from "./assets/Solitaire-Game-Start.png";
import cardGameSolitaireInGame from "./assets/Solitaire-In-Game.png";
import cardGameMobile from "./assets/Card-Game-Hompage_mobile.png";
import cardGameMobileMenu from "./assets/Card-Game-Hompage_mobile-menu.png";
import cardGameMobileSolitaire from "./assets/Solitaire-Mobile.png";
import cardGameMobileSolitaireInGame from "./assets/Solitaire-In-Game-Mobile.png";
import ATUSHomepage from "./assets/ATUS-Homepage.png";
import ATUSImageModal from "./assets/ATUS-Image-Modal.png";
import ATUSNewImageModal from "./assets/ATUS-New-Image-Modal.png";
import ATUSUpdateProfileModal from "./assets/ATUS-Update-Profile-Modal.png";
import "./App.css";
import { useState } from "react";

function App() {
  
  let swiperInstance = null;
  console.log(swiperInstance);

  const [selectedImage, setSelectedImage] = useState(null);

  const wildfireImages = [
    wildfireHomepage,
    wildfireStartImage,
    wildfireEndImage,
  ];

  const cardGameImages = [
    cardGameHomepage,
    cardGameModal,
    cardGameSolitaire,
    cardGameSolitaireStart,
    cardGameSolitaireInGame,
  ];

  const cardGameImagesMobile = [
    cardGameMobile,
    cardGameMobileMenu,
    cardGameMobileSolitaire,
    cardGameMobileSolitaireInGame,
  ];

  const aroundTheUsImages = [
    ATUSHomepage,
    ATUSImageModal,
    ATUSNewImageModal,
    ATUSUpdateProfileModal,
  ];

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
          <div className="app__project-content">
            <div className="app__project-header">
              <p className="app__project-title">
                <b>Forest Fire Project:</b>
              </p>
            </div>
            <div className="app__project-group">
              <p className="app__project-description app__paragraph">
                <b>Summary: </b>An interactive browser game that simulates the
                spread of a wildfire, designed to help students learn about fire
                dynamics in a fun way
              </p>
              <p className="app__project-description app__tech-stack">
                <b>Tech Stack: </b> HTML, CSS, JavaScript, React.js
              </p>
              <p className="app__project-description app__purpose">
                <b>Project Description: </b>Inspired by curricula from
                University of Alaska Outreach GI, this project virtualizes the
                board game. This allows for quicker and easier set-up,
                particularly for younger students.
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
          </div>
          <div className="app__slideshow-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              onSwiper={(swiper) => (swiperInstance = swiper)}
              className="app__swiper"
            >
              {wildfireImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="app__swiper__img"
                    onClick={() => setSelectedImage(src)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Popup Modal */}
            <div
              className={`app__image-modal ${
                selectedImage ? "app__image-modal_open" : ""
              }`}
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                type="button"
                className="modal__close-button"
              />
              <img
                src={selectedImage}
                alt="Expanded"
                className="app__image-popup"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </li>
        <li className="app__project">
          <div className="app__project-content">
            <div className="app__project-header">
              <p className="app__project-title">Card Game Project:</p>
            </div>
            <div className="app__project-group">
              <p className="app__project-description app__paragraph">
                <b>Summary: </b>An interactive browser-based solitaire game that
                supports both mouse and touch input, designed with responsive
                web design for seamless play across devices.
              </p>
              <p className="app__project-description app__tech-stack">
                <b>Tech Stack: </b> HTML, CSS, JavaScript, React.js, node.js,
                express.js, mongoDB, NoSQL
              </p>
              <p className="app__project-description app__purpose">
                <b>Project Description: </b>This solitaire web application
                allows users to play using mouse or touch input with a seamless
                drag-and-drop interface. Responsive web design has been
                implemented to work for most screen sizes.
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
                <li className="app__feature">Mobile-responsive design for seamless play across devices</li>
                <li className="app__feature">Secure user authentication system</li>
                <li className="app__feature">
                  Drag-and-drop and touch-and-drop gameplay
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
                  Github: 
                  <a
                    className="app__project-description app__link"
                    href="https://github.com/matthew-wright9630/Card-Games-Frontend"
                  >
                    Frontend
                  </a>
                  <a
                    className="app__project-description app__link"
                    href="https://github.com/matthew-wright9630/Card-Games-Backend"
                  >
                    Backend
                  </a>
                </p>
                <p className="app__link-paragraph">
                  
                </p>
              </div>
            </div>
          </div>
          <div className="app__slideshow-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              onSwiper={(swiper) => (swiperInstance = swiper)}
              className="app__swiper"
            >
              {!window.matchMedia("(max-width: 650px)").matches ? (
                <>
                  {cardGameImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="app__swiper__img"
                        onClick={() => setSelectedImage(src)}
                      />
                    </SwiperSlide>
                  ))}
                </>
              ) : (
                <>
                  {cardGameImagesMobile.map((src, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="app__swiper__img"
                        onClick={() => setSelectedImage(src)}
                      />
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
            {/* Popup Modal */}
            <div
              className={`app__image-modal ${
                selectedImage ? "app__image-modal_open" : ""
              }`}
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                type="button"
                className="modal__close-button"
              />
              <img
                src={selectedImage}
                alt="Expanded"
                className="app__image-popup"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </li>
        <li className="app__project">
          <div className="app__project-content">
            <div className="app__project-header">
              <p className="app__project-title">Around the US Project:</p>
            </div>
            <div className="app__project-group">
              <p className="app__project-description app__paragraph">
                <b>Summary: </b> A mock social media site that allows users to
                add and share photos.
              </p>
              <p className="app__project-description app__tech-stack">
                <b>Tech Stack: </b> HTML, CSS, JavaScript, React.js
              </p>
              <p className="app__project-description app__purpose">
                <b>Project Description: </b> The website simulates a social
                media website, such as Instagram, that allows a user to add
                photos. The user can share their profile with other users so
                they can view and like their photos.
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
          </div>
          <div className="app__slideshow-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              onSwiper={(swiper) => (swiperInstance = swiper)}
              className="app__swiper"
            >
              {aroundTheUsImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="app__swiper__img"
                    onClick={() => setSelectedImage(src)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Popup Modal */}
            <div
              className={`app__image-modal ${
                selectedImage ? "app__image-modal_open" : ""
              }`}
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                type="button"
                className="modal__close-button"
              />
              <img
                src={selectedImage}
                alt="Expanded"
                className="app__image-popup"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </li>
      </ul>
      <div className="app__contact-me">
        <p className="app__description__paragraph">
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
        <p className="app__description__paragraph">
          Or if you are interested in following my projects and coding journey,
          follow me on{" "}
          <a className="app__link" href="https://github.com/matthew-wright9630">
            GitHub
          </a>
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
