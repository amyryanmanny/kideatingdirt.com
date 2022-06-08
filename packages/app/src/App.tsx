import {
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Music from "components/helpers/Music";
import BonesawPage from "./components/pages/Bonesaw";

const imgPath = (path: string) => `${process.env['PUBLIC_URL']}/pic/${path}`

function HomePage() {
  document.title = "home of the kid eating dirt";

  return (
    <>
      <Music path="rap.mp3"/>

      {/** Google ad */}

      <img
        src={imgPath('kideatingdirt_moving.gif')}
        width="600" height="482"
        alt="kid eating dirt"
      />
      <br/><br/>

      <Link to="/bonesaw">bonesaw is ready</Link>

      {/** Links
        <a href="ripoff.html">wsu rda calculator</a><br/>
        <a href="andy.html">andy are you okay</a><br/>
        <a href="money.html">a good many almighty dollar advisories</a><br/>
        <a href="horoscopes.html">ignoroscopes </a><br/>
        <a href="fishingwithdad.html">fishing with dad</a><br/>
        <br/>
        <a href="alien.html">peaches alien regalia</a><br/>
        <a href="challenge.html">clicking challenge</a><br/>
        BONESAW
        <a href="jillsandwich.html">jill sandwich</a><br/>
        <a href="words.html">dictionary useful</a><br/>
        <a href="satanclaus.html">satan claus</a><br/>
        <a href="riddle.html">difficult riddles!</a><br/>
        <a href="vladimirsnootin.html">resident of russia</a><br/>
        <a href="suggestafeature.html">suggest a feature</a><br/>
        <a href="presidentialslogans.html">presidential campaign slogans</a><br/>
        <a href="listofdun.html">list of dun</a><br/>
        <a href="dunyunrings.html">we're dunyun rings</a><br/>
        <a href="2spoopy.html">2spoopy4me</a><br/>
        <a href="faceman.html">face the truth</a><br/>
        <a href="chicken.html">chicken</a><br/>
        <a href="songlyrics.html">song lyrics</a><br/>
      */}

      <br/><br/>
      <Link to="https://github.com/ryanmanny">my github</Link>

      {/** Donation tracker */}

      <br/><br/>
      <div>
        all content copyright ryan manny 2014-2022 (unless i stole it from somewhere else)
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bonesaw" element={<BonesawPage />} />
      </Routes>
    </div>
  );
}

export default App;
