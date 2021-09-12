import Scenario from "./components/scenario/scenarioComponent";
import Spaceship from "./components/spaceship/spaceshipComponent";
function App() {
  return (
    <div className="App">
      <Scenario>
        <Spaceship/>
      </Scenario>
    </div>
  );
}

export default App;
