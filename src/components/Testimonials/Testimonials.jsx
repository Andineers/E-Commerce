import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Ryandini",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Jeon Jungkook",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Park Jimin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Choi Beomgyu",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Park Jay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    image: "https://picsum.photos/200/300",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore
            saepe nihil.
          </p>
        </div>
        {/* Testimonials cards */}
        <div data-aos="zoom-in">
        <Slider {...settings}>
          {TestimonialsData.map((data) => (
            <div className="my-6">
              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
              >
                <div className="mb-4">
                  <img
                    src={data.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-400">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">"</p>
              </div>
            </div>
          ))}
        </Slider>
        <div></div>
      </div>
    </div>
        </div>
       
  );
};

export default Testimonials;
