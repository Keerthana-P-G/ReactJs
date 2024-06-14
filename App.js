import React from 'react';
import HomePage from './HomePage';
import LanguageSelector from './LanguageSelector';
import {Routes,Route} from 'react-router-dom'
import Chapter1 from './Chapters/Chapter1';
import Chapter2 from './Chapters/Chapter2';
import Chapter3 from './Chapters/Chapter3';
import Chapter4 from './Chapters/Chapter4';
import Chapter12 from './Chapters2/Chapter1';
import Chapter22 from './Chapters2/Chapter2';
import Chapter32 from './Chapters2/Chapter3';
import Chapter42 from './Chapters2/Chapter4';
import Chapter13 from './Chapters3/Chapter1';
import Chapter23 from './Chapters3/Chapter2';
import Chapter33 from './Chapters3/Chapter3';
import Chapter43 from './Chapters3/Chapter4';
import BC1 from './BookChapters/BC1';
import BC2 from './BookChapters/BC2';
import BC3 from './BookChapters/BC3';
import BC4 from './BookChapters/BC4';
import BC5 from './BookChapters/BC5';
import BC6 from './BookChapters/BC6';
import BC7 from './BookChapters/BC7';
import BC8 from './BookChapters/BC8';
import BC9 from './BookChapters/BC9';
import BC10 from './BookChapters/BC10';
import BC11 from './BookChapters/BC11';
import BC12 from './BookChapters/BC12';
import Navbar from './Navbar';
import AuthPage from './AuthPage';
import Contactpage from './Contactpage';
import AboutPage from './AboutPage';

function App() {
  return(
    <div>
      <Navbar />
      <div>
      <Routes>
            <Route path="/chapter/1" element={<Chapter1 />} />
            <Route path="/chapter/2" element={<Chapter2 />} />
            <Route path="/chapter/3" element={<Chapter3 />} />
            <Route path="/chapter/4" element={<Chapter4 />} />
            <Route path="/chapter/12" element={<Chapter12/>} />
            <Route path="/chapter/22" element={<Chapter22/>} />
            <Route path="/chapter/32" element={<Chapter32/>} />
            <Route path="/chapter/42" element={<Chapter42/>} />
            <Route path="/chapter/13" element={<Chapter13/>} />
            <Route path="/chapter/23" element={<Chapter23/>} />
            <Route path="/chapter/33" element={<Chapter33/>} />
            <Route path="/chapter/43" element={<Chapter43/>} />
            <Route path="/BC/1" element={<BC1/>}/>
            <Route path="/BC/2" element={<BC2/>}/>
            <Route path="/BC/3" element={<BC3/>}/>
            <Route path="/BC/4" element={<BC4/>}/>
            <Route path="/BC/5" element={<BC5/>}/>
            <Route path="/BC/6" element={<BC6/>}/>
            <Route path="/BC/7" element={<BC7/>}/>
            <Route path="/BC/8" element={<BC8/>}/>
            <Route path="/BC/9" element={<BC9/>}/>
            <Route path="/BC/10" element={<BC10/>}/>
            <Route path="/BC/11" element={<BC11/>}/>
            <Route path="/BC/12" element={<BC12/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<AuthPage/>}/>
            <Route path="/language/selector" element={<LanguageSelector/>}/>
            <Route path="/contact" element={<Contactpage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
