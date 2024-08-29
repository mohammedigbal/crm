import BottomPanel from "./BottomPanel";
import TopPanel from "./TopPanel";
import LeadsDataEntry from "./LeadsDataEntry";

function Leads() {
  return (
    <div className="container">
      {/* Top Panel */}
      <TopPanel header="Opportunity" />
      {/* Middle Panel */}
      <LeadsDataEntry />
      {/* Botton Panel */}
      <BottomPanel />
    </div>
  );
}

export default Leads;
