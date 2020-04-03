import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import Image1 from './images/images-about-me2.png'
import Image2 from './images/images-About-us.png'
import Image3 from './images/images-accordion.png'
import Image4 from './images/images-cart_item.jpg'
import Image5 from './images/images-comment1.png'
import Image6 from './images/images-comment2.png'
import Image7 from './images/images-dress.png'

const options = {
  items: 4,
  autoplay: true
};

function App() {
  return (
    <>
    <OwlCarousel 
    className="owl-theme"
    loop
    margin={10}
    nav
    >   
    <div className="item"><img src={Image1} /></div>
    <div className="item"><img src={Image2} /></div>
    <div className="item"><img src={Image3} /></div>
    <div className="item"><img src={Image4} /></div>
    <div className="item"><img src={Image5} /></div>
    <div className="item"><img src={Image6} /></div>
    <div className="item"><img src={Image7} /></div>
    </OwlCarousel>
    <div><h1>Hello</h1></div>
    </>
  );
}

export default App;
