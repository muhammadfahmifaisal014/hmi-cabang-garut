"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryGrid({ data }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = React.useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % data.length);
  }, [data.length]);

  const prevImage = React.useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + data.length) % data.length);
  }, [data.length]);

  // Handle Keyboard Navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage]);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-10 text-white/50 italic">
        Belum ada konten untuk kategori ini.
      </div>
    )
  };

  const currentImage = selectedImageIndex !== null ? data[selectedImageIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            role="button"
            tabIndex={0}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            aria-label={`Lihat detail foto: ${item.title || "Galeri HMI"}`}
            className="relative group w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-white/20 focus:outline-none focus:ring-4 focus:ring-[#FFA600]/50 transition-all"
          >
            {/* Background Image */}
            <Image
              src={item.image_url || "/img/placeholder.jpg"}
              alt={item.title || "Gallery Image"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={60}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/60 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-start text-white">
              <span className="text-[#FFA600] font-bold text-xs uppercase mb-2 tracking-wider drop-shadow-sm">
                {item.event_date}
              </span>
              <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-2 drop-shadow-md line-clamp-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs md:text-sm text-gray-200 mb-4 line-clamp-2 leading-relaxed opacity-90">
                  {item.description}
                </p>
              )}

              <button className="bg-[#FFA600] hover:bg-[#e69500] text-white text-[10px] md:text-xs font-bold py-2 px-6 rounded-full uppercase tracking-wider transition-all shadow-lg flex items-center gap-2">
                Discover More
                <span className="text-[8px]">▼</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Back Button (Top Left) */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-[#FFA600] transition border border-white px-4 py-2 rounded-full hover:bg-white hover:border-white z-50 group uppercase tracking-widest text-[10px] font-bold"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Kembali ke Galeri</span>
          </button>



          {/* Navigation Buttons (Sides) */}
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white hover:text-[#FFA600] transition w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 border border-white/10 backdrop-blur-sm z-50 hidden md:flex group"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white hover:text-[#FFA600] transition w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 border border-white/10 backdrop-blur-sm z-50 hidden md:flex group"
          >
            <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Main Content Container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
              <Image
                src={currentImage.image_url || "/img/placeholder.jpg"}
                alt={currentImage.title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>

            {/* Caption Overlay (Bottom) */}
            <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center text-center pointer-events-none">
              <div className="max-w-3xl space-y-3 pointer-events-auto">
                <span className="inline-block px-3 py-1 bg-[#FFA600] text-black text-[10px] font-black uppercase tracking-widest rounded-md mb-2">
                  {currentImage.event_date}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide leading-tight drop-shadow-lg">
                  {currentImage.title}
                </h3>
                {currentImage.description && (
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium max-w-2xl mx-auto opacity-90 line-clamp-3 md:line-clamp-none">
                    {currentImage.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
