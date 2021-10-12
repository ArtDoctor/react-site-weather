import React, {useState} from 'react';

function LoginForm() {

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem("loggedIn", "yes");
        window.location.reload();
      }

    return (
        <div className="bodylogin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2" />
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-title">
                            Login form
                        </div>
                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form>
                            <div className = "form-inner">
                                <div className = "form-group">
                                    <label className ="form-control-label" htmlFor="name">Name:</label>
                                    <input className ="form-control" type="text" name="name" id="name" onChange={event => localStorage.setItem("name", event.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label className ="form-control-label" htmlFor="email">Email:</label>
                                    <input className ="form-control" type="text" name="email" id="email" onChange={event => localStorage.setItem("email", event.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label className ="form-control-label" htmlFor="password">Password:</label>
                                    <input className ="form-control" type="text" name="password" id="password" onChange={event => localStorage.setItem("password", event.target.value)}></input>
                                </div>
                                <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>Login</button>
                                
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;