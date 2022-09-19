import User from "./components/User";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="container">
      <Navbar title="Employee information"/>
      <hr />
      <User name="Mustafa Sert" department="Bilisim" salary="5000"/>
      <User name="Haydar Ulus"  salary="6000"/>
    </div>
  );
}

export default App;
