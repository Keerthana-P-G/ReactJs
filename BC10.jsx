import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import book from './book.jpg'

const BC10 = () => {
  return (
    <div className="home-page-container" style={{ backgroundImage: `url(${book})`,  backgroundSize: 'cover'  }}>
      <nav>
        <h3><center>Half the World</center></h3>
        <br></br>
        <ul className='chap'>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/12">Chapter 1</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/22">Chapter 2</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/32">Chapter 3</Link>
          </li>
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/chapter/42">Chapter 4</Link>
          </li>
        </ul>
        <LanguageSelector/>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};


export default BC10;
