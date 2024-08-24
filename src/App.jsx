import Header from "./components/Header"
import './index.css'
import GameInfoSection from "./components/GameInfoSection"
import { gameGenres } from './data'
import { useState } from "react"
import GameGenres from "./components/GameGenres/GameGenres"
import TabsSection from "./components/Tabssection"
import FeedbackSection from "./components/FeedbackSection"





function App() {

  const [tab, setTab] = useState('feedback')

  const [genresType, setGenresType] = useState(null);

  const handleClick = (type) => {
    setGenresType(type);
  }
  const genresTypeData = gameGenres.find(genre => genre.name === genresType);




  return (
    <>
      <Header />
      <main className="main">
        <TabsSection active={'tab'} onChange={(current) => setTab(current)} />
        {tab === 'main' && (
          <>
            <GameGenres gameGenres={gameGenres} onClick={handleClick} genresTypeData={genresTypeData} />
            <GameInfoSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}
      </main>


    </>
  )
};

export default App;
