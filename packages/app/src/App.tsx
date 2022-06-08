import {
  Link,
  Route,
  Routes,
} from "react-router-dom";

import { imgPath, Music } from "./components/helpers";
import {
  SpoopyPage,
  AlienPage,
  AndyPage,
  BonesawPage,
  ChallengePage,
  ChickenPage,
  DoneskisPage,
  DunyunRingsPage,
  FacemanPage,
  FishingWithDadPage,
  FrenchPage,
  HoroscopesPage,
  JillSandwichPage,
  DunListPage,
  LiterallyRatchetPage,
  MoneyPage,
  PresidentialSlogansPage,
  RiddlePage,
  RipoffPage,
  SatanClausPage,
  SongLyricsPage,
  FeatureSuggestionPage,
  VladimirSnootinPage,
  DictionaryPage,
} from "./components/pages";

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

      <Link to="/ripoff">wsu rda calculator</Link>
      <Link to="/andy">andy are you okay</Link>
      <Link to="/money">a good many almighty dollar advisories</Link>
      <Link to="/horoscopes">ignoroscopes </Link>
      <Link to="/fishingwithdad">fishing with dad</Link>
      <br/><br/>

      <Link to="/alien">peaches alien regalia</Link>
      <Link to="/challenge">clicking challenge</Link>
      <Link to="/bonesaw">bonesaw is ready</Link>
      <Link to="/jillsandwich">jill sandwich</Link>
      <Link to="/words">dictionary useful</Link>
      <Link to="/satanclaus">satan claus</Link>
      <Link to="/riddle">difficult riddles!</Link>
      <Link to="/vladimirsnootin">resident of russia</Link>
      <Link to="/suggestafeature">suggest a feature</Link>
      <Link to="/presidentialslogans">presidential campaign slogans</Link>
      <Link to="/listofdun">list of dun</Link>
      <Link to="/dunyunrings">we're dunyun rings</Link>
      <Link to="/2spoopy">2spoopy4me</Link>
      <Link to="/faceman">face the truth</Link>
      <Link to="/chicken">chicken</Link>
      <Link to="/songlyrics">song lyrics</Link>
      <br/><br/>

      <a href="https://github.com/ryanmanny">my github</a>
      <br/><br/>

      {/** Donation tracker */}

      <div>
        all content copyright ryan manny 2014-2022 (unless i stole it from somewhere else)
      </div>
      <br/>&nbsp;
    </>
  )
}

function App() {
  return (
    <div
      className="App"
      style={{
        position: 'relative',
        width: '97%',
        left: '50%',
        transform: 'translate(-50%, 20px)',
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/2spoopy" element={<SpoopyPage />} />
        <Route path="/alien" element={<AlienPage />} />
        <Route path="/andy" element={<AndyPage />} />
        <Route path="/bonesaw" element={<BonesawPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/chicken" element={<ChickenPage />} />
        <Route path="/doneskis" element={<DoneskisPage />} />
        <Route path="/dunyunrings" element={<DunyunRingsPage />} />
        <Route path="/faceman" element={<FacemanPage />} />
        <Route path="/fishingwithdad" element={<FishingWithDadPage />} />
        <Route path="/french" element={<FrenchPage />} />
        <Route path="/horoscopes" element={<HoroscopesPage />} />
        <Route path="/jillsandwich" element={<JillSandwichPage />} />
        <Route path="/listofdun" element={<DunListPage />} />
        <Route path="/literallyratchet" element={<LiterallyRatchetPage />} />
        <Route path="/money" element={<MoneyPage />} />
        <Route path="/presidentialslogans" element={<PresidentialSlogansPage />} />
        <Route path="/riddle" element={<RiddlePage />} />
        <Route path="/ripoff" element={<RipoffPage />} />
        <Route path="/satanclaus" element={<SatanClausPage />} />
        <Route path="/songlyrics" element={<SongLyricsPage />} />
        <Route path="/suggestafeature" element={<FeatureSuggestionPage />} />
        <Route path="/vladimirsnootin" element={<VladimirSnootinPage />} />
        <Route path="/words" element={<DictionaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
