import logo from './logo.svg';
import './App.css';
import IdCard from "./components/idCard/IdCard";
import Wrapper from "./components/wrapper/Wrapper";
import Film from "./components/film/Film";
import Knjiga from "./components/knjiga/Knjiga";

function App() {
  return (
    <div className="App" id="container">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
        <Wrapper>
      <IdCard fullName="Luka Boskovic" dateOfBirth="30.09.1988." src="vault-boy-fallout.png" />
      <IdCard fullName="Marko Markovic" dateOfBirth="14.07.1989." city="Cetinje" src="vault-boy-fallout.png" />
      <IdCard fullName="Janko Jankovic" dateOfBirth="05.06.1990." src="vault-boy-fallout.png" />
        </Wrapper>
      <Wrapper>
    <Film name="Kum" year="1972." genre="Triler" director="Fracis Ford Coppola" starring="Al Pacino, Robert DeNiro" src="vault-boy-fallout.png" />
    <Film name="Amadeus" year="1984." genre="Biopic" director="Miloš Forman" starring="Tom Hulce, F. Abraham" src="vault-boy-fallout.png" />
    <Film name="K-Pax" year="2001." genre="Drama" director="Francis Ford Coppola" starring="Jeff Bridges, Kevin Spacey" src="vault-boy-fallout.png" />
      </Wrapper>
        <Wrapper>
          <Knjiga name="Na Drini Ćuprija" year="1961." src="vault-boy-fallout.png" quote="Blaaaa bla bla bla bla bla bla." />
          <Knjiga name="Sandman" year="2016." author="Lars Kepler" src="vault-boy-fallout.png" quote="Haaaaaa haa ha ha ha bla bla." />
          <Knjiga name="Prokleta avlija" year="1960." src="vault-boy-fallout.png" quote="Blaaaa bla bla bla bla bla bla." />
        </Wrapper>
    </div>
  );
}

export default App;
