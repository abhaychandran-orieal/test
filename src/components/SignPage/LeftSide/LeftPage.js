import React from 'react';
import './LeftPage.css'

function LeftPage() {
  return (
    <div className="left-section">
      <div className="leftpagecontent">
          <div className="logo">
            <img src="logo.png"  className="logo-img" />
          </div>
          <h1 className="heading">Sign In</h1>
          <p className="sub-text">Enter your Username and password to sign in!</p>
          <form className="form">
            <div className="input-group">
              <label className="label">Username*</label>
              <input type="text" placeholder="Username" className="input" />
            </div>
            <div className="input-group">
              <label className="label">Password*</label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                className="input"
              />
            </div>
            <div className="options">
              <label className="checkbox">
                <input type="checkbox" />
                Keep me logged in
              </label>
              <a href="/forgot-password" className="link">
                Forget password?
              </a>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            <p className="footer-text">
              Not registered yet?{' '}
              <a href="/register" className="link">
                Create an Account
              </a>
            </p>
          </form>
          </div>
    </div>
  
  );
}

export default LeftPage;