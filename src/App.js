import { Navbar } from "./components/Navbar"
import Heros from "./components/Heros"
import Card from "./components/Cards";
import Info from "./components/Info";

function App() {
  const Cards = Info.map((info) => {
    return <Card key={info.id}
      {...info}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Heros />
      <section className="cards-list">
        <div className="container">
          <div className="cards">
            {Cards}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
