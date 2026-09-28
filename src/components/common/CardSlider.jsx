import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const CardSlider = ({
  children,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = ''
}) => {
  const items = React.Children.toArray(children);
  const totalItems = items.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Determine items visible based on window width
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay || isPaused || maxIndex <= 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, currentIndex, maxIndex, autoPlayInterval]);

  if (totalItems === 0) return null;

  return (
    <div
      className={`card-slider-wrapper ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Track */}
      <div className="card-slider-container" ref={sliderRef}>
        <div
          className="card-slider-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {items.map((child, index) => (
            <div
              key={index}
              className="card-slider-item"
              style={{
                flex: `0 0 ${100 / itemsToShow}%`,
                maxWidth: `${100 / itemsToShow}%`,
                paddingInline: '12px'
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controls & Dots */}
      {maxIndex > 0 && (
        <div className="card-slider-controls">
          <button
            onClick={prevSlide}
            className="slider-arrow slider-arrow-prev"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="slider-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="slider-arrow slider-arrow-next"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardSlider;
