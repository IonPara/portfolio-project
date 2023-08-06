import hangmanImg from "../assets/images/hangman3.png";
import justReadImg from "../assets/images/just-read-small.png";
import todoImg from "../assets/images/todo.png";
import justFightImg from "../assets/images/just-fight.png";
import hangmanBig from "../assets/images/hangman-big.png";
import justReadBig from "../assets/images/just-read-big2.png";
import todoBig from "../assets/images/todo-big.png";
import justFightBig from "../assets/images/just-fight-big.png";
import ticTacToeBig from "../assets/images/tic-tac-big2.png";
import ticTacToeSm from "../assets/images/tic-tac-sm.png";
import carApiSm from "../assets/images/cars-api-sm.png";
import carApiBig from "../assets/images/cars-api-big.png";
import mmdbLg from "../assets/images/MyMovieDatabase.png";
import mmdbSm from "../assets/images/mmdb-Sm.png";

class Project {
  constructor(
    name,
    url,
    repository,
    description,
    technologies,
    img,
    bigImg,
    id
  ) {
    this.name = name;
    this.url = url;
    this.repository = repository;
    this.description = description;
    this.technologies = technologies;
    this.img = img;
    this.id = id;
    this.bigImg = bigImg;
  }
}

const projects = [];

const justRead = new Project(
  "Just Read",
  "https://just-read.netlify.app/",
  "https://github.com/IonPara/just-read-app-server",
  "Just Read is a book store application that provides users with the ability to create an account, search for their favorite books, and leave reviews. The app supports both standard end-user access and admin access. Administrators have the ability to monitor user behavior and make any necessary changes.",
  [
    <p
      className="d-flex justify-evenly flex-wrap tech-icons-container"
      key={100}
    >
      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
          width="50"
          height="50"
        />
        <img
          src="https://skillicons.dev/icons?i=express&theme=light"
          alt="express"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="50"
          height="50"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width="50"
          height="50"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="50"
          height="50"
        />
      </span>

      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="50"
          height="50"
        />
        <img src="https://skillicons.dev/icons?i=css&theme=light" alt="css" />
        <img src="https://skillicons.dev/icons?i=html&theme=light" alt="html" />
        <img src="https://skillicons.dev/icons?i=vscode&theme=light" alt="vs" />
        <img
          src="https://img.icons8.com/color/48/null/java-web-token.png"
          alt="jwt"
        />
      </span>
    </p>,
  ],
  justReadImg,
  justReadBig,
  "just-read"
);
projects.push(justRead);

const hangman = new Project(
  "Hangman",
  "https://hangman-game-101.netlify.app/",
  "https://github.com/IonPara/hangman-game-app",
  `This project contains the "Hangman" game. Hangman is a simple word guessing game. The player has to try to figure out the unknown word by guessing letters. If too many letters which do not appear in the word are guessed, the player is hanged (and loses).`,
  [
    <p className="d-flex justify-evenly mt-4 " key={130}>
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="react"
        width="50"
        height="50"
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="nodejs"
        width="50"
        height="50"
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="javascript"
        width="50"
        height="50"
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        alt="bootstrap"
        width="50"
        height="50"
      />
      <img src="https://skillicons.dev/icons?i=css&theme=light" alt="css" />
      <img src="https://skillicons.dev/icons?i=html&theme=light" alt="html" />
      <img src="https://skillicons.dev/icons?i=vscode&theme=light" alt="vs" />
    </p>,
  ],

  hangmanImg,
  hangmanBig,
  "hangman"
);
projects.push(hangman);

const justFight = new Project(
  "Just Fight",
  "https://ionpara.github.io/Just-Fight/",
  "https://github.com/IonPara/Just-Fight",
  "This project features a website designed to showcase a hobby and provide information about the experience working with object-oriented design in frontend development. The layout was built using flexbox and grid, and made responsive with media queries. Regular updates are made to the project.",
  [
    <p className="d-flex justify-evenly mt-4" key={101}>
      <img
        src="https://skillicons.dev/icons?i=javascript&theme=light"
        alt="javascript"
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        alt="bootstrap"
        width="50"
        height="50"
      />
      <img src="https://skillicons.dev/icons?i=css&theme=light" alt="css" />
      <img src="https://skillicons.dev/icons?i=html&theme=light" alt="html" />
    </p>,
  ],
  justFightImg,
  justFightBig,
  "just-fight"
);
projects.push(justFight);

const todo = new Project(
  "To Do",
  "https://todo-app-g1mr.netlify.app/",
  "https://github.com/IonPara/Todo-app-client",
  "This project is a web application that allows users to create an interactive to-do list. Users can sign up and save their to-do lists.",
  [
    <p className="d-flex justify-evenly flex-wrap " key={140}>
      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
          width="50"
          height="50"
        />
        <img
          src="https://skillicons.dev/icons?i=express&theme=light"
          alt="express"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="50"
          height="50"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width="50"
          height="50"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="50"
          height="50"
        />
      </span>
      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="50"
          height="50"
        />
        <img src="https://skillicons.dev/icons?i=css&theme=light" alt="css" />
        <img src="https://skillicons.dev/icons?i=html&theme=light" alt="html" />
        <img src="https://skillicons.dev/icons?i=vscode&theme=light" alt="vs" />
        <img
          src="https://img.icons8.com/color/48/null/java-web-token.png"
          alt="jwt"
        />
      </span>
    </p>,
  ],
  todoImg,
  todoBig,
  "todo"
);
projects.push(todo);

const ticTacToe = new Project(
  "Tic Tac Toe",
  "https://tic-tac-toe-13.netlify.app/",
  "https://github.com/IonPara/tic-tac-toe-app",
  `This is a simple implementation of the classic game Tic Tac Toe using React and CSS. 
  To start playing, simply click on any empty square on the game board to place your X or O. Players take turns placing their symbol until one player gets three in a row horizontally, vertically, or diagonally, or all squares on the board are filled.`,
  [
    <p className="d-flex justify-evenly mt-4 " key={130}>
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="react"
        width="50"
        height="50"
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="nodejs"
        width="50"
        height="50"
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="javascript"
        width="50"
        height="50"
      />
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        alt="bootstrap"
        width="50"
        height="50"
      />
      <img src="https://skillicons.dev/icons?i=css&theme=light" alt="css" />
      <img src="https://skillicons.dev/icons?i=html&theme=light" alt="html" />
      <img src="https://skillicons.dev/icons?i=vscode&theme=light" alt="vs" />
    </p>,
  ],

  ticTacToeSm,
  ticTacToeBig,
  "tic-tac-toe"
);
projects.push(ticTacToe);

const carsApi = new Project(
  "Cars Store",
  "",
  "https://github.com/IonPara/cars-api",
  "This project contains a full stack web application, it was built using MERN (MongoDB, Express, React, Node.js) stack. The app pulls the data from the database and displays it in the form of a table, the app is interactive and it lets the user add a new car, remove a car and update the information of a car in the app and in the database.",
  [
    <p className="d-flex justify-evenly flex-wrap " key={140}>
      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
          width="50"
          height="50"
        />
        <img
          src="https://skillicons.dev/icons?i=express&theme=light"
          alt="express"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="50"
          height="50"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width="50"
          height="50"
        />
      </span>
      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="50"
          height="50"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="50"
          height="50"
        />
        <img src="https://skillicons.dev/icons?i=css&theme=light" alt="css" />
        <img src="https://skillicons.dev/icons?i=vscode&theme=light" alt="vs" />
      </span>
    </p>,
  ],
  carApiSm,
  carApiBig,
  "cars-api"
);
projects.push(carsApi);

const mmdb = new Project(
  "MMDB (My Movie Database)",
  "",
  "https://github.com/IonPara/mmdb-front-end",
  "MMDB (My Movie Database) MMDB is a web application built using React, Vite, TypeScript, and CSS. It allows users to browse and search for popular movies, top-rated movies, and more.",
  [
    <p className="d-flex justify-evenly flex-wrap " key={140}>
      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="50"
          height="50"
        />
        <img
          src="https://skillicons.dev/icons?i=redux&theme=light"
          alt="redux"
          width="50"
          height="50"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="typescript"
          width="50"
          height="50"
        />
      </span>
      <span className="icons-span d-flex justify-evenly tech-icons-span">
        <img src="https://skillicons.dev/icons?i=css&theme=light" alt="css" />
        <img src="https://skillicons.dev/icons?i=vite&theme=light" alt="vite" />
        <img src="https://skillicons.dev/icons?i=vscode&theme=light" alt="vs" />
      </span>
    </p>,
  ],
  mmdbSm,
  mmdbLg,
  "mmdb"
);
projects.unshift(mmdb);

export { projects };
