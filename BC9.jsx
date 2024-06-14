import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import book from './book.jpg'

const BC9 = () => {
  return (
    <div className="home-page-container" style={{ backgroundImage: `url(${book})`,  backgroundSize: 'cover'  }}>
      <nav>
        <h3><center>Realm of Ice</center></h3>
        <br></br>
        <ul className='chap'>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/13">Chapter 1</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/23">Chapter 2</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/33">Chapter 3</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/43">Chapter 4</Link>
          </li>
        </ul>
        <LanguageSelector/>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};



export default BC9;
