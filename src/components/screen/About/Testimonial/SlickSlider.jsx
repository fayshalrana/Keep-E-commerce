
import React, { useState, useEffect } from 'react';
import './SlickSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderItem from './SliderItem';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const SlickSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [thumbnailSlideIndex, setThumbnailSlideIndex] = useState(0);
  const slidesData = [
    {
      id: 1,
      name: 'Nur-Alom',
      comment: 'Dolorem officiis temporibus. Lorem Ipsum is simply dummy text of the printing and typesetting industry. consectetur adipisicing elit. Praesentium amet ipsum officia harum, adipisci qui ullam asperiores minus perferendis natus',
      rating: '5',
      prof: "CEO",
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Al-Amin',
      comment: 'Officia non provident dolor esse et neque. Lorem Ipsum is simply dummy text of the printing and typesetting industry. consectetur adipisicing elit. Praesentium amet ipsum officia harum, adipisci qui ullam asperiores minus perferendis natus',
      rating: '4.8',
      prof: "Web Developer",
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Fayshal Rana',
      comment: 'Ut recusandae vel vitae molestiae id soluta. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet ipsum officia harum, adipisci qui ullam asperiores minus perferendis natus',
      rating: '4.0',
      prof: "Front-End Developer",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
    {
      id: 4,
      name: 'Raif Rahman',
      comment: 'Qui vel consequatur recusandae illo repellendus. Lorem Ipsum is simply dummy text of the printing e illo repellendus. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet ipsum officia harum, adipisci qui ullam asperiores minus perferendis natus',
      rating: '5',
      prof: "Business Man",
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      name: 'Afran Niso',
      comment: 'Placeat odit velit itaque voluptatem. ecusandae illo repellendus. Lorem Ipsum is simply dummy text of the printing e ill Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet ipsum officia harum, adipisci qui ullam asperiores minus perferendis natus',
      rating: '4.5',
      prof: "Actor",
      image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 6,
      name: 'Sharuk Khan',
      comment: 'Adipisci officiis repudiandae. lor esse et neque. Lorem Ipsum is simply dummy text of the pri Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet ipsum officia harum, adipisci qui ullam asperiores minus perferendis natus',
      rating: '4.5',
      prof: "Actor",
      image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D'
    },
  ];
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const customArrowClick = (direction) => {
    const currentSlide = thumbnailSlideIndex;

    if (direction === 'next') {
      const nextSlide = currentSlide + 1 < slidesData.length ? currentSlide + 1 : 0;
      slider1.slickGoTo(nextSlide);
      slider2.slickGoTo(nextSlide);
    } else if (direction === 'prev') {
      const prevSlide = currentSlide - 1 >= 0 ? currentSlide - 1 : slidesData.length - 1;
      slider1.slickGoTo(prevSlide);
      slider2.slickGoTo(prevSlide);
    }
  };

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: true,
    asNavFor: '.slider-nav',
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    infinite: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    afterChange: (currentSlide) => {
      setThumbnailSlideIndex(currentSlide);
    },
  };




  return (
    <div>
      <div className="slider-wrapper">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide) => (
          <SliderItem key={slide.id} slideInfo={slide}/>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide, index) => (
              <div
                className="slick-slide thumbItem"
                key={`thumbnail-${slide.id}`}
                onClick={() => {
                  slider1.slickGoTo(index);
                  slider2.slickGoTo(index);
                }}
              >
                <img
                  className="slick-slide-image"
                  src={slide.image}
                  alt={`Thumbnail ${slide.id}`}
                />
              </div>
            ))}
          </Slider>
          {/* Custom arrow */}
      <div className="custom-arrow prev" onClick={() => customArrowClick('prev')}>
      <IoIosArrowBack />
      </div>
      <div className="custom-arrow next" onClick={() => customArrowClick('next')}>
      <IoIosArrowForward />
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default SlickSlider;
