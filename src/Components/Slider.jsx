import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import Img1 from '../assets/Images/ganpati.jpg';
import Img2 from '../assets/Images/drumming.jpg';

const slides = [
  {
    img: Img1,
    title: "A Place For Peace And Worship",
    subtitle: "Welcome to a sacred haven devoted to Prabhu Darshan, spiritual growth, and cultural gatherings for all generations and backgrounds in Alberta",
  },
  {
    img: Img2,
    title: "Ancient Wisdom, Modern Understanding "
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  
  useEffect(() => {
    AOS.refresh();
  }, [activeIndex]);

  return (
    <section className="hero-slider"sm={12} md={12}>
      <Carousel
        fade
        controls
        indicators
        interval={5000}
        activeIndex={activeIndex}
        onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        className="custom-carousel mx-auto"
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={`${idx}-${activeIndex}`}>
            <img
              className="hero-img"
              src={slide.img}
              alt={`Slide ${idx}`}
              data-aos="zoom-in"
            />
            <Carousel.Caption>
              <h2 data-aos="zoom-in" data-aos-delay="300">{slide.title}</h2>
              <p data-aos="zoom-in" data-aos-delay="600">{slide.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
