import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className="col-md-6 m-auto" >
                <div className="card card-body mt-5">
                    <h2 className="text-center text-weight-bold">CONNECT HERE </h2>
                    <form className="form">
                        <div className="form-group">
                            <input type="email" name="Email Address ..."   placeholder="email" className="form-control rounded"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password"  placeholder="Your password" className="form-control rounded"/>
                        </div>
                        <p>
                            Avez-vous Compte?<Link to="/register">S'inscrire</Link>
                        </p>
                        <button type="submit" className="btn btn-primary rounded">Connection</button>
                       
                    </form>
                </div>
            </section>
    )
}

export default Login
