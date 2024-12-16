import React from 'react'
import {pageLinks, socialLinks} from '../data'
const footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
      {pageLinks.map((link) => {
        
        const{id,href,text} = link;
        return(
        
          <li key = {id}>
        <a href={href} className="footer-link">{text}</a>
      </li>
        )
        
      })}
    </ul>
    
    <ul className="footer-icons">
      {socialLinks.map((social)=>{
        const{id,href,class2} = social;
        return(
          <li key = {id}>
          <a href={href} target="_blank" className="footer-icon"
            ><i className={class2}></i
          ></a>
        </li>
        )
      })}
      
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default footer
