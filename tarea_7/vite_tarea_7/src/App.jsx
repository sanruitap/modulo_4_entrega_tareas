
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import CharacterPage from './pages/CharacterPage'
import './pages/css/CharactersPage.css'
import NotFound from './pages/error/notFound'
import './pages/error/notFound.css'
import EpisodesPage from './pages/EpisodesPage'
import './pages/css/episodesPage.css'
//import About from './pages/about'
//import User from './pages/user'

//import './pages/error/notFound.css'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        
        <Routes>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/characterpage' element={<CharacterPage/>}></Route>
        <Route path='/episodespage' element={<EpisodesPage/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
        

        </Routes>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
