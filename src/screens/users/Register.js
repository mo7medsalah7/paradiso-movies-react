import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import MainButton from './../../components/MainButton';
import Footer from "../../components/Footer";


const RegisterStyles = styled.div`
  @media screen and (max-width: 1023px) {
    background: #f8f8f8;
    min-height: 100vh;
  }
  .register__inner {
    background-color: var(--white-color);
    @media screen and (min-width: 1024px) {
      width: 100%;
      display: flex;
    }
  }
  .register_aside {
    @media screen and (min-width: 1024px) {
      display: none;
    }
    @media screen and (min-width: 1024px) {
      width: 400px;
      background: #9796f0; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #fbc7d4,
        #9796f0
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #fbc7d4,
        #9796f0
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      display: flex;
      flex-direction: column;
      color: var(--main-color);
    }

    a {
      padding-top: 40px;
      margin: 0 auto;
      background: -webkit-linear-gradient(#eee, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      .logo-name {
        font-weight: bolder;
        font-size: 40px;
        letter-spacing: 1.1px;
        span {
          font-family: var(--main-font);
        }
        span:nth-child(odd) {
          color: rgba(255, 255, 255, 1);
        }
        span:nth-child(even) {
          color: rgba(0, 150, 136, 1);
        }
      }
    }
  }

  .register_content {
    @media screen and (min-width: 1024px) {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
      position: relative;
    }
    @media screen and (max-width: 1023px) {
      max-width: 600px;
      padding: 0 25px;
      margin: 30px auto;
    }
    .register_content_inner {
      width: 100%;
      .content_title {
        font-size: 55px;
        margin-bottom: 50px;
        text-align: center;
        line-height: 1;
        @media screen and (max-width: 1023px) {
          font-size: 30px;
          margin-bottom: 30px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
      }
      @media screen and (min-width: 1024px) {
        padding: 0px 50px;
      }
      .have_acc_alert {
        margin-top: 8px;
        span {
          color: var(--main-color);
          text-decoration: underline;
        }
      }
    }
  }
`;


export default function Register() {
        const genders = [
            { id: "1", gender_type: "Male" },
            { id: "2", gender_type: "Female" },
            { id: "3", gender_type: "Bisexual" },
            { id: "4", gender_type: "Prefer Not To Say" },
          ];
        
          const [name, setName] = useState("");
          const [userName, setUserName] = useState("");
          const [email, setEmail] = useState("");
          const [gender, setGender] = useState([]);
          const [password, setPassword] = useState("");
          const [confirmPassword, setConfirmPassword] = useState("");
          const [message, setMessage] = useState(null);
        
          const submitHandler = (e) => {
            e.preventDefault();
        
            if (password !== confirmPassword) {
              setMessage(`Password Don't Match`);
            } 
          };
          return (
            <RegisterStyles>
        
              <div className="register__inner">
                <div className="register_aside">
                  <Link href="/">
                    <a>
                      <span className="logo-name">
                        <span>p</span>
                        <span>a</span>
                        <span>r</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>s</span>
                        <span>o</span>
                      </span>
                    </a>
                  </Link>
                </div>
        
                <div className="register_content">
                  <div className="register_content_inner">
                    <div className="content_title">
                      <span className="content_highlight">Sign Up</span>
                    </div>
                    {message && <p>{message}</p>}
                      <div className="content_form">
                      <form onSubmit={submitHandler}>
                        <div>
                          <label for="name">Name</label>
                          <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label for="username">User Name</label>
                          <input
                            type="text"
                            placeholder="Enter User Name"
                            name="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label for="email">Email Address</label>
                          <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <label for="gender">Gender</label>
                          <select onChange={(e) => setGender(e.target.value)}>
                            {genders.map((gender) => {
                              return (
                                <option key={gender.id} value={gender.gender_type}>
                                  {gender.gender_type}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div>
                          <label for="password">Password</label>
                          <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div>
                          <label for="confirmPassword">Confirm Password</label>
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <MainButton button_title="Sign Up" />
                        <div className="have_acc_alert">
                          Have an Account?{" "}
                          <Link href="/users/login">
                            <a>
                              <span>Log In</span>
                            </a>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </RegisterStyles>
    )
}
