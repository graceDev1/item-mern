import React from 'react'
import About from '../about/about.component'
import Hero from '../hero/hero.component'

function Home() {
    return (
        <div>
            <Hero/>
            <div className="container">
                <About/>
            </div>
        </div>
    )
}

export default Home
