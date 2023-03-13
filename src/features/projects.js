import hangmanImg from "../assets/images/hangman3.png";
import justReadImg from "../assets/images/just-read.png";
import todoImg from "../assets/images/todo.png";
import justFightImg from "../assets/images/just-fight.png";
import hangmanBig from "../assets/images/hangman-big.png";
import justReadBig from "../assets/images/just-read-big.png";
import todoBig from "../assets/images/todo-big.png";
import justFightBig from "../assets/images/just-fight-big.png";

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

const justFight = new Project(
  "Just Fight",
  "https://ionpara.github.io/Just-Fight/",
  "https://github.com/IonPara/Just-Fight",
  "The project contains a website built to showcase a hobby and has a goal to provide information about the experience working on the frontend side using object-oriented design. In this project, I've used flexbox to design and build the layout and media queries to make it responsive. The project is updated regularly .",
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

const justRead = new Project(
  "Just Read",
  "https://just-read.onrender.com/",
  "https://github.com/IonPara/just-read-app-server",
  " Just Read is a book store app where the user can create an account, search for his/her favorite books, purchase a book and leave a review. The application allows for normal end-user access and admin access. An administrator can monitor and make changes to user's behavior.",
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

const todo = new Project(
  "To Do",
  "https://todo-app-g1mr.onrender.com/",
  "https://github.com/IonPara/Todo-app-client",
  "This project is a web application. The app is interactive and it lets the user to sign up and save his/her to do list.",
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

export { projects };
