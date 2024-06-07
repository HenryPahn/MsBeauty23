import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Carousel.css";  

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const images = [
        "/carousel/slide_37.jpg",
        "/carousel/slide_38.jpg",
        "/carousel/slide_39.jpg",
        "/carousel/slide_40.jpg",
        "/carousel/slide_41.jpg",
        "/carousel/slide_42.jpg",
        "/carousel/slide_43.jpg",
        "/carousel/slide_44.jpg",
        "/carousel/slide_45.jpg",
        "/carousel/slide_46.jpg",
        "/carousel/slide_47.jpg",
        "/carousel/slide_48.jpg",
        "/carousel/slide_49.jpg",
    ];

    return (
        <div className="container mx-auto px-4 py-6 my-20 mt-20 md:mt-24">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} text-white `}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} text-white `}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}
