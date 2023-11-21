import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Homes'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProjects'
import Projects from './pages/Projects'
import Project from './pages/Project'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'



function App() {

  return (
  <Router>
    <NavBar />
    <Container customClass="min-height">
      <Routes>
        <Route  path='/' element={<Home />}> 
        </Route>
        <Route  path='/company' element={<Company />}> 
        </Route>
        <Route  path='/projects' element={<Projects/>}> 
        </Route>
        <Route path='/contact' element={<Contact />}> 
        </Route>
        <Route  path='/newproject' element={<NewProject />}> 
        </Route>
        <Route  path="/project/:id" element={<Project />}> 
        </Route>
      </Routes>
    </Container>
    <Footer />
  </Router>
  );
}

export default App;