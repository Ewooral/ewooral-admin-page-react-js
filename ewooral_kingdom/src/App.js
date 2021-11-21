import React from 'react'
import { Brand, CTA, Navbar} from './components';
import {Blog, Ewooral, Features, Header, Possibility, Footer} from './containers';
import './App.css';

const App = () => {
    return (
        <main className="App"> 
            <section className="gradient__bg">
                 <Navbar />   
                 <Header />            
            </section>
                 <Brand /> 
                 <Ewooral /> 
                 <Features />
                 <Possibility />
                 <CTA />
                 <Blog />
                 <Footer />

        
        </main>
    )
}

export default App
