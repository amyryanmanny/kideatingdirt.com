import {
  Link,
  Route,
  Routes,
} from "react-router-dom";

import BonesawPage from "./components/pages/Bonesaw";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Link to="/bonesaw">Bonesaw</Link>
        } />
        <Route path="/bonesaw" element={<BonesawPage />} />
      </Routes>
    </div>
  );
}

export default App;
