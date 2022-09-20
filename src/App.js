import User from "./components/User";
import Navbar from "./components/Navbar";


function App() {
state={
  users:[
    {
      id:1,
      name: "Haydar Sermez",
      salary: "5000",
      department: "Bilisim"
    },
    {
      id:2,
      name: "Selim Tarcan",
      salary: "4000",
      department: "Muhasebe"
    },
    {
      id:3,
      name: "Mehmet Kurt",
      salary: "6000",
      department: "Insan Kaynaklari"
    }
  ]
}

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
