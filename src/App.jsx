import React from 'react'
import'./App.css'
import'./index.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import What from './components/What I Do/What'
import Project from './components/Projects/Project'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Sidebar from './components/Sidebar/Sidebar'
function App() {
  
  return (
    
<div  className='app'>
   <Sidebar/>
   <main className='main-content'>
   <Hero/>
   <About/>
   <What/>
   <Project/>
   <Resume/>
   <Contact/>
   </main>
</div>



  )
}

export default App