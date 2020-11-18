import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export const Footer = () => {
    return (
      <React.Fragment>
          <footer className="siteFooter">
              <div className="linkConatiner">
              <div className="navLinks">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/product">Womens</Link>
                    <Link className="link" to="/">The Brands</Link>
                    <Link className="link" to="/">Local Store</Link>
                    <Link className="link" to="/">Lock Book</Link>
                </div>
                
              </div>
          </footer>
      </React.Fragment>

    )
}
