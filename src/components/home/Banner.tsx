"use client";
import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import "./banner-styles.css";

import {
  bannerSlides,
  animationConfig,
  trackBannerInteraction,
  generateAriaLabel,
} from "./banner-content";
import type { BannerSlide } from "./banner-content";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, animationConfig.autoSlideInterval);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          setCurrentSlide(
            (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
          );
          break;
        case "ArrowRight":
          setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
          break;
        case " ":
          event.preventDefault();
          setIsPaused(!isPaused);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPaused]);

  const currentSlideData = bannerSlides[currentSlide];

  const handleCTAClick = () => {
    trackBannerInteraction(
      "cta_click",
      currentSlideData.id,
      currentSlideData.ctaText
    );
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    trackBannerInteraction("slide_change", bannerSlides[index].id);
  };

  return (
    <section
      className="banner-container"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPaused(false);
      }}
      role="banner"
      aria-live="polite"
      aria-label="Khuyến mãi và sản phẩm nổi bật"
    >
      {/* Background gradient */}
      <div className="banner-bg-gradient"></div>

      {/* Ambient floating elements */}
      <div className="banner-ambient-elements">
        <div className="ambient-bubble-1"></div>
        <div className="ambient-bubble-2"></div>
        <div className="ambient-bubble-3"></div>
      </div>

      <div className="max-w-7xl mx-auto h-full flex items-center relative z-10 px-4 md:px-6">
        {/* Left Content Section - Responsive width */}
        <div className="w-full lg:w-[55%] space-y-6 md:space-y-8 animate-fade-in-up">
          {/* Promotion Badge */}
          {currentSlideData.promotion && (
            <div className="banner-promotion-badge animate-fade-in-up-delay-200">
              <div className="promotion-indicator"></div>
              <span className="promotion-text">
                {currentSlideData.promotion}
              </span>
            </div>
          )}

          {/* Main Headline - Focus on care message */}
          <div className="space-y-4 animate-fade-in-up-delay-400">
            <h1 className="banner-headline">
              {currentSlideData.headline.split("–").map((part, index) => (
                <span key={index}>
                  {index === 0 && (
                    <span className="banner-headline-primary">
                      {part.trim()}
                    </span>
                  )}
                  {index === 1 && (
                    <>
                      <span className="text-gray-600"> – </span>
                      <span className="text-gray-800">{part.trim()}</span>
                    </>
                  )}
                </span>
              ))}
            </h1>
          </div>

          {/* Sub-headline with warmth */}
          <p className="banner-subheadline animate-fade-in-up-delay-600">
            {currentSlideData.subheadline}
          </p>

          {/* Trust indicators */}
          <div className="banner-trust-indicators animate-fade-in-up-delay-600">
            <div className="trust-item">
              <svg
                className="trust-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              100% chính hãng
            </div>
            <div className="trust-item">
              <svg
                className="trust-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Giao hàng 2h nội thành
            </div>
            <div className="trust-item">
              <svg
                className="trust-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Đổi trả 30 ngày
            </div>
          </div>

          {/* CTA Button - Prominent but friendly */}
          <div className="flex items-center space-x-4 pt-4 animate-fade-in-up-delay-600">
            <a
              href={currentSlideData.ctaLink}
              className="banner-cta-button"
              onClick={handleCTAClick}
              role="button"
              tabIndex={0}
            >
              <ShoppingCartIcon className="cta-icon" />
              <span>{currentSlideData.ctaText}</span>
              <div className="cta-underline"></div>
            </a>
          </div>
        </div>

        {/* Right Image Section - Happy family imagery */}
        <div className="hidden lg:flex w-[45%] h-full items-center justify-center relative animate-fade-in-up">
          {/* Main Image Container with soft effect */}
          <div className="banner-image-container">
            {/* Soft glow effect */}
            <div className="image-soft-glow"></div>

            {/* Image container */}
            <div className="image-backdrop">
              <img
                src={currentSlideData.image}
                alt={currentSlideData.altText}
                className="banner-main-image"
                loading="lazy"
              />
            </div>

            {/* Floating trust badge */}
            <div className="banner-trust-badge">
              <div className="trust-badge-content">
                <div className="trust-badge-percent">100%</div>
                <div className="trust-badge-text">An toàn</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators - Clean and minimal */}
        <div className="banner-slide-indicators">
          {bannerSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`slide-indicator ${
                index === currentSlide ? "active" : ""
              }`}
              aria-label={generateAriaLabel(slide, index, bannerSlides.length)}
            />
          ))}
        </div>
      </div>

      {/* SEO Optimized Alt Text - Hidden for accessibility */}
      <span className="sr-only">
        {currentSlideData.headline} - {currentSlideData.subheadline} - Shop mẹ
        và bé chất lượng cao
      </span>
    </section>
  );
}
