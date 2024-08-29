import "bootstrap/dist/css/bootstrap.min.css";
import Leads from "./components/Leads.tsx";

const handleonOptionChange = (id: number | null) => {
  console.log("Id: " + id); // Corrected variable name
};

function App() {
  return (
    <div>
      <Leads />
    </div>
  );
}

export default App;
