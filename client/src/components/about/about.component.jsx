import React from 'react'
import { aboutData } from './aboutData';

function About() {
    return (
        <section>
            <div className="row">
               { aboutData.map((data, index)=>(
                   <>
                        <div className="col-md-8" style={{
                            display:'flex',
                            justifyContent:'center',
                            flexDirection:'column',
                            alignItems: 'center'
                        }} key={index}>
                            <h1>About us</h1>
                            <p className="text">{data.paragraphOne}</p>
                            <p className="text">{data.paragraphTwo}</p>
                            <p className="text">{data.paragraphThree}</p>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid"  src={data.imageURl} alt="..."/>
                        </div>
                    </>
               ))}
            </div>
        </section>
    )
}

export default About
