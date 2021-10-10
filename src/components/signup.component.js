import React, {useState} from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails]=useState({name: "", email: "", password: ""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="bodylogin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-title">
                            Registration form
                        </div>
                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form onSubmit={submitHandler}>
                            <div className = "form-inner">
                                {(error!="")?(
                                    <div className="error">
                                        {error}
                                    </div>
                                ):""}
                                <div className = "form-group">
                                    <label className ="form-control-label" htmlFor="name">Name:</label>
                                    <input className ="form-control" type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                                </div>
                                <div className="form-group">
                                    <label className ="form-control-label" htmlFor="email">Email:</label>
                                    <input className ="form-control" type="text" name="email" id="email"  onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                                </div>
                                <div className="form-group">
                                    <label className ="form-control-label" htmlFor="password">Password:</label>
                                    <input className ="form-control" type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                                </div>
                                <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                <input type="submit" className="btn btn-outline-primary" value="login" />
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