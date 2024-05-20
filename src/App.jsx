import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ArticlesSection from './components/ArticlesSection'
import Footer from './components/Footer'


import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/containers/Home'
import Products from './components/containers/Products'
import Story from './components/containers/Story'
import Blog from './components/containers/Blog'
import Collections from './components/containers/Collections'
import Contact from './components/containers/Contact'
import Notfound from './components/containers/Notfound'


const App = () => {
  return (
    <> 
    <BrowserRouter >
    <div className='container '>
<Navbar />

{/* <ArticlesSection /> */}
    </div>
    
    <Routes> 
      <Route path='/' element= {<Home />} />
      <Route path='/Products' element= {<Products />} />
      <Route path='/Story' element= {<Story/>} />
      <Route path='/Blog' element= {<Blog />} />
      <Route path='/Collections' element= {<Collections />} />
      <Route path='/Contact' element= {<Contact/>} />
      <Route path='*' element= {<Notfound/>}/>
    </Routes>
    <Footer />


    </BrowserRouter>
    </>
    
  )
}

export default App
