import "./App.css";
import List from "./components/professionals-list";
import ServiceCard from "./components/service-card";
import { data } from "./data";

function App() {
  const service = {
    title: "Plumber",
    name: "maintenance",
  };

  return (
    <div className="App">
      <ServiceCard
        service={service}
        steps={data.steps.stepsWithCreated}
        status={data.status.statusWithCreated}
      />
      <ServiceCard
        service={service}
        steps={data.steps.stepsWithAssigned}
        status={data.status.statusWithAssigned}
      />
      <ServiceCard
        service={service}
        steps={data.steps.stepsWithStarted}
        status={data.status.statusWithStarted}
      />
      <ServiceCard
        service={service}
        steps={data.steps.stepsWithClosed}
        status={data.status.statusWithClosed}
      />
      <ServiceCard
        service={service}
        steps={data.steps.stepsWithCancelled}
        status={data.status.statusWithCancelled}
      />
      <List />
    </div>
  );
}

export default App;
