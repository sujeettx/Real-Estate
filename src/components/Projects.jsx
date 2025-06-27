import React, { useEffect, useState } from "react";

import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateCardToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsToShow(4);
        setIsMobile(false);
      } else if (width >= 768) {
        setCardsToShow(2);
        setIsMobile(false);
      } else {
        setCardsToShow(1);
        setIsMobile(true);
      }
    };

    updateCardToShow();
    window.addEventListener("resize", updateCardToShow);
    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);

  const nextProject = () => {
    const maxIndex = Math.max(0, projectsData.length - cardsToShow);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    const maxIndex = Math.max(0, projectsData.length - cardsToShow);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <div className="py-4 pt-20 my-20 w-full h-full mt-0" id="Projects">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Projects{" "}
          <span className="underline underline-offset-4 decoration-1 font-light text-2xl">
            Completed
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 max-w-80 mx-auto">
          Crafting spaces, Building Legacies – Explore Our Portfolio
        </p>
      </div>

      {/* Main Container */}
      <div className="relative">
        
        {/* Desktop Arrow Buttons */}
        {!isMobile && (
          <>
            <button
              onClick={prevProject}
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-4 md:left-8 lg:left-12 z-10 p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg transition-colors border border-gray-200"
              aria-label="Previous Projects"
            >
              <img src={assets.left_arrow} alt="Previous" className="w-4 h-4 cursor-pointer" />
            </button>

            <button
              onClick={nextProject}
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-12 z-10 p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg transition-colors border border-gray-200"
              aria-label="Next Projects"
            >
              <img src={assets.right_arrow} alt="Next" className="w-4 h-4 cursor-pointer"  />
              </button>
          </>
        )}

        {/* Slider Container */}
        <div className="mx-6 md:mx-20 lg:mx-32">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                gap: '1.5rem'
              }}
            >
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ 
                    width: `calc((100% - ${(cardsToShow - 1) * 1.5}rem) / ${cardsToShow})`
                  }}
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="px-4 py-4">
                      <h2 className="text-lg font-bold text-gray-800 mb-1 truncate">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {project.price} | {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Arrow Buttons - Below cards */}
        {isMobile && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg transition-colors border border-gray-200"
              aria-label="Previous Projects"
            >
              <img src={assets.left_arrow} alt="Previous" className="w-4 h-4" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg transition-colors border border-gray-200"
              aria-label="Next Projects"
            >
              <img src={assets.right_arrow} alt="Next" className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;