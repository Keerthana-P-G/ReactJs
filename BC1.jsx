import LanguageSelector from '../LanguageSelector';
import React from 'react';
import { Link,  Outlet } from 'react-router-dom';
import './BC.css'
import book from './book.jpg'

const BC1 = () => {
  return (
    <div className="home-page-container" style={{ backgroundImage: `url(${book})`,  backgroundSize: 'cover'  }}>
      <nav className='navh'>
        <div style={{ textAlign: "center" }}>
          <h3>The Beast Warrior</h3>
          <br></br>
        </div>
        <ul className='chap'>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/1">Chapter 1</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/2">Chapter 2</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/3">Chapter 3</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/4">Chapter 4</Link>
          </li>
        </ul>
        <LanguageSelector/>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default BC1;