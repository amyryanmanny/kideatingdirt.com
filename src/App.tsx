import {
  useLocation,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import * as Pages from "./components/pages";
import {
  imgPath,
  Background,
  Music,
} from "./components/media";


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

      <Link to="/ripoff">wsu rda calculator</Link><br/>
      <Link to="/andy">andy are you okay</Link><br/>
      <Link to="/money">a good many almighty dollar advisories</Link><br/>
      <Link to="/horoscopes">ignoroscopes </Link><br/>
      <Link to="/fishingwithdad">fishing with dad</Link>
      <br/><br/>

      <Link to="/alien">peaches alien regalia</Link><br/>
      <Link to="/challenge">clicking challenge</Link><br/>
      <Link to="/bonesaw">bonesaw is ready</Link><br/>
      <Link to="/jillsandwich">jill sandwich</Link><br/>
      <Link to="/words">dictionary useful</Link><br/>
      <Link to="/satanclaus">satan claus</Link><br/>
      <Link to="/riddle">difficult riddles!</Link><br/>
      <Link to="/vladimirsnootin">resident of russia</Link><br/>
      <Link to="/suggestafeature">suggest a feature</Link><br/>
      <Link to="/presidentialslogans">presidential campaign slogans</Link><br/>
      <Link to="/listofdun">list of dun</Link><br/>
      <Link to="/dunyunrings">we're dunyun rings</Link><br/>
      <Link to="/2spoopy">2spoopy4me</Link><br/>
      <Link to="/faceman">face the truth</Link><br/>
      <Link to="/chicken">chicken</Link><br/>
      <Link to="/songlyrics">song lyrics</Link>
      <br/><br/>

      <a href="https://github.com/amyryanmanny">my github</a>
      <br/><br/>

      {/** Donation tracker */}

      <div>
        all content copyright amy ryan manny 2011-{new Date().getFullYear()} (unless i stole it from somewhere else)
      </div>
      <br/>
    </>
  )
}

export default function App() {
  const location = useLocation();

  return (<>
    {location.pathname === "/" && <Background path="dirt.png"/>}
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/2spoopy" element={<Pages.SpoopyPage />} /> */}
        <Route path="/alien" element={<Pages.AlienPage />} />
        <Route path="/andy" element={<Pages.AndyPage />} />
        <Route path="/bonesaw" element={<Pages.BonesawPage />} />
        {/* <Route path="/challenge" element={<Pages.ChallengePage />} /> */}
        <Route path="/chicken" element={<Pages.ChickenPage />} />
        {/**<Route path="/doneskis" element={<Pages.DoneskisPage/>}/> */}
        {/**<Route path="/dunyunrings" element={<Pages.DunyunRingsPage/>}/> */}
        {/**<Route path="/faceman" element={<Pages.FacemanPage/>}/> */}
        {/**<Route path="/fishingwithdad" element={<Pages.FishingWithDadPage/>}/> */}
        {/**<Route path="/french" element={<Pages.FrenchPage/>}/> */}
        {/**<Route path="/horoscopes" element={<Pages.HoroscopesPage/>}/> */}
        {/**<Route path="/jillsandwich" element={<Pages.JillSandwichPage/>}/> */}
        {/**<Route path="/listofdun" element={<Pages.DunListPage/>}/> */}
        {/**<Route path="/literallyratchet" element={<Pages.LiterallyRatchetPage/>}/> */}
        {/**<Route path="/money" element={<Pages.MoneyPage/>}/> */}
        {/**<Route path="/presidentialslogans" element={<Pages.PresidentialSlogansPage/>}/> */}
        {/**<Route path="/riddle" element={<Pages.RiddlePage/>}/> */}
        {/**<Route path="/ripoff" element={<Pages.RipoffPage/>}/> */}
        {/**<Route path="/satanclaus" element={<Pages.SatanClausPage/>}/> */}
        {/**<Route path="/songlyrics" element={<Pages.SongLyricsPage/>}/> */}
        {/**<Route path="/suggestafeature" element={<Pages.FeatureSuggestionPage/>}/> */}
        {/**<Route path="/vladimirsnootin" element={<Pages.VladimirSnootinPage/>}/> */}
        {/**<Route path="/words" element={<Pages.DictionaryPage/>}/> */}
      </Routes>
    </div>
  </>);
}
