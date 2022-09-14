import React from "react";
import {useRef, useEffect, useState } from "react"; 
import {Link, Navigate} from 'react-router-dom';
import Axios from 'axios';


import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../images/signup.jpg";
import './SignUp.css';
import Navbar from "../includes/Navbar";

import { useNavigate } from "react-router-dom";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "http://localhost:5000/SignUp";
const SignUp = () => {
    const Navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [type, setType] = useState('Pet Adopter');

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [buttontext,setButtontext]=useState('Sign up');
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
        
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
        
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd, email])


    

      const handleSubmit = async e => {
        

        e.preventDefault();
        // setButtontext('... We sent mail for you');
        try {
          const body = {type, user, email, pwd };
          const response = await fetch(
            "http://localhost:5000/SignUp",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)

              }
              
          );
          console.log(response);
        //   Navigate("/OTPverify");
        }
        catch (err) {
            console.log("Falil");
          }
      
    }

    return(
        <>
        <div>
            
            <Navbar/>
            <section className="section bg-c-light" >
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">

                                    <div className="col-md-6 border-left">
                                  
                                    <div className="col-md-12">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <div className="row bg-success text-white mb-3"> 
                                                <div className="col-md-4 my-auto"></div>
                                                <h3 className="text-center">Sign Up</h3>
                                            </div>
                                        <h6>Already Sign Up?</h6>
                                        <Link to="/SignIn" class="nav-link active"><div>Sign In</div></Link>
                               
                                        </div>
                                    <img src={SignUpImg}  alt="Services"/>                               
                                    </div>
                                    </div>
                                        
                                    </div>

                                    <div className="col-md-6 border-start">
                                    

                                    <section id="SignUpSection">
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <form id="SignUpForm" >
                                        
                                        <div id="dropDownMenu" className="mb-4">
                                            <select value={type} onChange={(e)=>setType(e.target.value)} class="form-control dropdown-toggle" data-bs-toggle="dropdown">
                                                
                                                <option value="Pet Adopter">Pet Adopter</option>
                                                <option value="Pet Tool Store">Pet Tool Store</option>
                                                
                                            </select>
                                        </div>

                                  
                                            <label htmlFor="username" class="labels">
                                                Username:
                                                <span className={validName ? "valid" : "hide"}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span  className={validName || !user ? "hide" : "invalid"}>
                                                    <FontAwesomeIcon icon={faTimes}/>
                                                </span>
                                                
                                            </label>
                                            <input class="inputFields"
                                                type="text"
                                                id="username"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setUser(e.target.value)}
                                                value={user}
                                                placeholder="Enter Your User Name"
                                                required
                                                aria-invalid={validName ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setUserFocus(true)}
                                                onBlur={() => setUserFocus(false)}
                                            />
                                            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                4 to 20 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.<br /> 
                                            </p>


                                            <label htmlFor="emailre" class="labels">
                                                Email:
                                                <span className={validEmail ? "valid" : "hide"}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span  className={validEmail || !email ? "hide" : "invalid"}>
                                                    <FontAwesomeIcon icon={faTimes}/>
                                                </span>
                                               
                                            </label>
                                            <input class="inputFields"
                                                type="email"
                                                id="emailre"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                placeholder="Enter Your Email"
                                                required
                                                aria-invalid={validEmail ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setEmailFocus(true)}
                                                onBlur={() => setEmailFocus(false)}
                                            />
                                            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Input a valid email address.<br /> 
                                            </p>


                                            <label htmlFor="password" class="labels">
                                            Password:
                                                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                            </label>
                                            <input class="inputFields"
                                                type="password"
                                                id="password"
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={pwd}
                                                placeholder="Enter Your Password"
                                                required
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="pwdnote"
                                                onFocus={() => setPwdFocus(true)}
                                                onBlur={() => setPwdFocus(false)}
                                            />
                                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character.
                                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                            </p>


                                            <label htmlFor="confirm_pwd" class="labels">
                                                Confirm Password:
                                                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                            </label>
                                            <input class="inputFields"
                                                type="password"
                                                id="confirm_pwd"
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                value={matchPwd}
                                                placeholder="Enter Your Password Again"
                                                required
                                                aria-invalid={validMatch ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                onFocus={() => setMatchFocus(true)}
                                                onBlur={() => setMatchFocus(false)}
                                            />
                                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Must match the first password input field.
                                            </p>

                                                {console.log(user)}
                                            <div className="d-flex justify-content-center">
                                            
                                                <button className="mt-5"id="SignUpBtn" onClick={handleSubmit} >{buttontext}</button>
                                            
                                            </div>
                                            

                                        </form>
                                    </section>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        // </>
    );
}

export default SignUp;
