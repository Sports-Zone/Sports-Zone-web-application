import React from "react";
import {useRef, useEffect, useState } from "react"; 
import {Link, Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import jwt_decode from 'jwt-decode'; 

// import {faCheck, faTimes, faInfoCircle} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUpImg from "../images/signup.jpg";
import './SignIn.css';
import Navbar from "../includes/Navbar";


// Axios.defaults.withCredentials = true;
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignIn = () => {
    const Navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    const [Email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [Password, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // const [matchPwd, setMatchPwd] = useState('');
    // const [validMatch, setValidMatch] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    // useEffect(() => {
    //     setValidName(USER_REGEX.test(user));
    //     // console.log(result);
    //     // console.log(user);
    //     // setValidName(result);
    // }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(Email));
        // console.log(result);
        // console.log(user);
        // setValidName(result);
    }, [Email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(Password));
        // console.log(result);
        // console.log(pwd);
        // setValidPwd(result);
        // setValidMatch(pwd === matchPwd);
    })

    useEffect(() => {
        setErrMsg('');
    }, [Email, Password ])

    

    const HandleSignIn = (e) => {
        e.preventDefault()
      const data = { Email: Email, Password: Password};
        console.log(data);
        Axios.post("http://localhost:5000/SignUp/Authentication", {

                      Email: Email,
                      Password: Password,
                    })
                    .then((response) => {
                        console.log(response.data)
                        
                      if(response.data.error) {
                        alert(response.data.error);}
                      else{
                        // alert("successfully Logged in!");
                        const token = response.data;
                        console.log(token);
                        sessionStorage.setItem("token", token);
                        let sessionToken = sessionStorage.getItem("token");
                        console.log("Appjs",sessionToken);

                        if(sessionToken)
                            {
                                const users = jwt_decode(sessionToken);
                                console.log(users);
                                window.loggedUserType = users.User_type;
                                window.loggedUserId = users.User_ID;
                                Navigate("/");
                                console.log(users.User_type);

                                if(window.loggedUserType=="Pet Adopter")
                                {
                                    console.log("Customer dashboard called",window.loggedUserType);
                                    Navigate("/petadopter");
                                }
                                else if(window.loggedUserType=="Admin")
                                {
                                    console.log("Admin dashboard called",window.loggedUserType);
                                    Navigate("/AdminHome");
                                }
                               
                                else if(window.loggedUserType=="Pet Tool Store")
                                {
                                    console.log("PetToolStoreHome dashboard called",window.loggedUserType);
                                    Navigate("/PetToolStore");
                                }
                            
                            }
                            else
                            {
                                window.loggedUserType = null;
                                window.loggedUserId = null;
                            }
                            }
                           
                            });


    };

    const logout = (e) =>{
        sessionStorage.removeItem("token");

        // window.loggedUserType = null;
        // window.loggedUserId = null;


        Navigate("/");
        

    }

   
   

    
    return(
        <div>
            <Navbar/>
            
            <div>
               
            </div>
            <section className="section bg-c-light" >
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    
                                {/* <img src={SignUpImg}  alt="Services"/> */}
                                <div className="col-md-12">
                            <div className="card shadow">
                            <div className="card-body">
                                    <div className="row bg-success text-white mb-3"> 
                                        <div className="col-md-4 my-auto"></div>
                                        <h3 className="text-center">SignIn</h3>
                                    </div>
                                <h6>If you haven't Account? please SignUp</h6>
                                <Link to="/" class="nav-link active"><div>Sign Up</div></Link>
                                {/* <div className="underline"></div> */}
                                                                
                            </div>
                            <img src={SignUpImg}  alt="Services"/>                               
                            </div>
                        </div>
                                    
                                </div>
                                <div className="col-md-6 border-start">
                                    <section id="SignUpSection">
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <form id="SignUpForm">
                                       


                                            <label htmlFor="emailre" class="labels">
                                                Email:
                                                <span className={validEmail ? "valid" : "hide"}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                <span  className={validEmail || !Email ? "hide" : "invalid"}>
                                                    <FontAwesomeIcon icon={faTimes}/>
                                                </span>
                                               
                                            </label>
                                            <input class="inputFields"
                                                type="email"
                                                id="emailre"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={Email}
                                                placeholder="Enter Your Email"
                                                required
                                                aria-invalid={validEmail ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setEmailFocus(true)}
                                                onBlur={() => setEmailFocus(false)}
                                            />
                                            <p id="uidnote" className={emailFocus && Email && !validEmail ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                Input a valid email address.<br /> 
                                            </p>


                                            <label htmlFor="password" class="labels">
                                            Password:
                                                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                                <FontAwesomeIcon icon={faTimes} className={validPwd || !Password ? "hide" : "invalid"} />
                                            </label>
                                            <input class="inputFields"
                                                type="password"
                                                id="password"
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={Password}
                                                placeholder="Enter Your Password"
                                                required
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="pwdnote"
                                                onFocus={() => setPwdFocus(true)}
                                                onBlur={() => setPwdFocus(false)}
                                            />
                                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                    Enter Your Valid Password  
                                                
                                            </p>


                                           

                                            <div className="d-flex justify-content-center">
                                                <button className="mt-5"id="SignUpBtn" onClick={HandleSignIn} disabled={!validEmail || !validPwd  ? true : false}>SignIn</button>
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
        
    );
}

export default SignIn;