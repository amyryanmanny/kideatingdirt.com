import {
  Link,
  Route,
  Routes,
} from "react-router-dom";

import TemplatePage from "./components/pages/Template";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Link to="/template">Template</Link>
        } />
        <Route path="/template" element={<TemplatePage />} />
      </Routes>
    </div>
  );
}

export default App;
