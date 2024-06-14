import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import book from './book.jpg'

const BC7 = () => {
  return (
    <div className="home-page-container" style={{ backgroundImage: `url(${book})`,  backgroundSize: 'cover'  }}>
      <nav>
        <h3><center>Those above</center></h3>
        <br></br>
        <ul className='chap'>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/12">Chapter 1</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/22">Chapter 2</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/3">Chapter 3</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/2">Chapter 4</Link>
          </li>
        </ul>
        <LanguageSelector/>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};



export default BC7;
