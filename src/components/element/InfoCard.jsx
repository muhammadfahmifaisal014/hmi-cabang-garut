import Image from "next/image";
import Link from "next/link";

export default function InfoCard({
  title,
  date,
  image,
  description,
  link,
  subtitle,
}) {
  // Helper to truncate text
  function shortText(text, count = 10) {
    if (!text) return "";
    return text.split(" ").slice(0, count).join(" ") + "...";
  }

  return (
    <div className="relative outline rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300">
      {/* Background image */}
      <div className="relative h-72 w-full">
        <Image
          src={image || "/img/BgEvent.jpg"} // Fallback image
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay Color - Green #00773A with opacity */}
        <div className="absolute inset-0 bg-[#00773A]/80 group-hover:bg-[#00773A]/70 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white">
        <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
          {date}
        </span>
        <h3 className="text-lg font-bold leading-tight mb-1">{title}</h3>

        {subtitle && (
          <p className="text-xs font-medium text-gray-200 mb-1">{subtitle}</p>
        )}

        <p className="text-xs text-gray-100 opacity-90 mb-4 line-clamp-3">
          {shortText(description, 15)}
        </p>

        <div>
          <Link
            href={link || "#"}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded text-xs transition-colors duration-200"
          >
            DISCOVER MORE ▼
          </Link>
        </div>
      </div>
    </div>
  );
}
