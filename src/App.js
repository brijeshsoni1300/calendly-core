import "./App.css";
import AppEngineMeetInfo from "./AppEngineMeetInfo";
import AppEngineCalender from "./AppEngineCalender";
import AppEngineSlots from "./AppEngineSlots";
import CalenderHeader from "./CalenderHeader";
function App() {
  return (
    <div className="app">
      <div className="app__engine">
        <div className="app__engine__meetinfo">
          <AppEngineMeetInfo />
        </div>
        <div className="app__verticleLine"></div>
        <div className="app__calenderLogic">
          <div className="app__calenderLogic__Header">
            <CalenderHeader />
          </div>
          <div className="app__calenderLogic__Info">
            <div className="app__engine__calender">
              <AppEngineCalender />
            </div>
            <div className="app__engine__slots">
              <AppEngineSlots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
