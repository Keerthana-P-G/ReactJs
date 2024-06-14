import React from 'react';
import book from './bookc.jpg';

 const array = [
    {}
 ]
const AboutPage = () => {
    return (
        <div className="auth-section" style={{ backgroundImage:  `url(${book})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '60%', textAlign: 'center' }}>
                <h1>About </h1>
                <p style={{ fontSize: '20px' }}>
                    Welcome to The Book Hut, your go-to destination for an immersive reading experience. We are passionate about literature and believe in the power of storytelling to inspire, entertain, and enlighten.
                </p>

                <h2>Our Mission</h2>
                <p style={{ fontSize: '20px' }}>
                    At The Book Hut, our mission is to connect readers with captivating stories from various genres. We strive to create a platform where book enthusiasts can explore, discover, and share their love for literature.
                </p>

                <h2>Explore Our Collection</h2>
                <p style={{ fontSize: '20px' }}>
                    Discover a diverse collection of books, including novels, short stories, and more. Whether you're a fan of mystery, romance, or adventure, we have something for every reader.
                </p>

                <h2>Contact Us</h2>
                <p style={{ fontSize: '20px' }}>
                    Have questions or suggestions? Feel free to reach out to us. We value your feedback and are here to make your reading experience enjoyable.
                </p>

                <p style={{ fontSize: '22px', fontWeight: 'bold' }}>Happy Reading!!!</p>
            </div>
        </div>
    );
};

export default AboutPage;


