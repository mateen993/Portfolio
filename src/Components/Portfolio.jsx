import React from "react";
import Assiraat from "../assets/portfolio/Assiraat.png";
import movie from "../assets/portfolio/movie.png";
import blog from "../assets/portfolio/blog.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 7,
      title: "As-Siraat",
      src: Assiraat,
      link: "https://as-siraat.com/"
    },
    {
      id: 8,
      title: "Trending movies",
      link: "https://trending-movie-beta.vercel.app/",
      src: movie,
    },
    {
      id: 9,
      title: "Blog Application",
      link: "https://blog-app-next-js-three.vercel.app/",
      src: blog,
    },
  ];
  return (
    <div
      name="portfolio"
      className="px-2 bg-gradient-to-b to-gray-800 from-black w-full text-white md:h-fit pt-14"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pt-0">
            Portfolio
          </p>
          <p className="mt-2">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-4 px-3">
          {portfolios.map(({ id, src, title,link }) => {
            return (
            <a target="_blank" rel="noreferrer" href={link} key={id}>
              <div
                
                className="shadow-md shadow-gray-600 rounded-lg hover:scale-110 duration-150"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md w-full h-[250px] "
                />
                <h1 className="text-xl font-semibold text-center mt-2" > {title} </h1>
               
              </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
