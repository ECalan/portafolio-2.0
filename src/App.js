import Menu from "./componentes/menu/Menu";
import Title from "./componentes/title/Title";
import About from "./componentes/about/About";
import Skills from "./componentes/skills/Skills";
import Hobbies from "./componentes/hobbies/Hobbies";
import Academy from "./componentes/academy/Academy";
import Experiences from "./componentes/experiences/Experiences";
import "./App.css";

function App() {
  return (
    <div>
      <Menu />
      <Title />
      <About />
      <Skills />
      <Hobbies />
      <Academy />
      <Experiences />
    </div>
  );
}

export default App;
