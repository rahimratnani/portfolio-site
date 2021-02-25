import memoryGame from "./memory-game.png";
import ticTacToe from "./tic-tac-toe.png";
import portfolio from "./portfolio.png";
import weatherApp from "./weather-app.png";
import calculator from "./calculator.png";

const data = [
  {
    img: weatherApp,
    title: "Weather App",
    builtWith: "React, OpenWeatherMap API, Country Flags API, Geolocation API",
    code: "https://github.com/rahimratnani/weather-app",
    live: "https://rahimratnani.github.io/weather-app/",
    description:
      "A weather app that shows current weather for a city. It uses OpenWeatherMap API to fetch current weather. It can show weather in two units (celsius and fahrenheit). It can also fetch weather based on your location if location service is enabled in your browser.",
  },
  {
    img: ticTacToe,
    title: "Tic-Tac-Toe",
    builtWith: "HTML, CSS, JavaScript, Minimax algorithm",
    code: "https://github.com/rahimratnani/tic-tac-toe",
    live: "https://rahimratnani.github.io/tic-tac-toe/",
    description:
      "Implementation of classic Tic-Tac-Toe game with JavaScript, HTML, and CSS. It has two game modes: Normal mode and AI mode. AI Mode uses the Minimax algorithm to make decisions against the human player.",
  },

  {
    img: portfolio,
    title: "Portfolio Site",
    builtWith: "React, Chakra UI, React Router",
    code: "https://github.com/rahimratnani/portfolio-site",
    live: "https://rahimratnani.me/",
    description: "Yay! You're already here. Why not take a look around!",
  },

  {
    img: memoryGame,
    title: "Memory Game",
    builtWith: "React, Bulma CSS, Sass",
    code: "https://github.com/rahimratnani/memory-game",
    live: "https://rahimratnani.github.io/memory-game/",
    description:
      "Built with React and Bulma CSS, this game puts your memory to the test. You'll be presented with multiple images. The images will shuffle every-time they are clicked. DO NOT click any images twice, else the score will reset to zero. The goal is to get the highest score possible.",
  },
  {
    img: calculator,
    title: "Calculator",
    builtWith: "HTML, CSS, JavaScript",
    code: "https://github.com/rahimratnani/calculator",
    live: "https://rahimratnani.github.io/calculator/",
    description:
      "As you might have already guessed, this is a JavaScript-based calculator. It handles all your day to day mathematical needs very well. Have a look.",
  },
];

export default data;
