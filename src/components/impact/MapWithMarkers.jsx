import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * MapWithMarkers
 * ──────────────
 * Renders the geographic map inside a bounded stage matching the exact aspect ratio of the SVG.
 * Pins are upright, symmetric SVG vector markers pointing straight down, perfectly proportioned.
 */
const MapWithMarkers = ({
  mapSrc,
  mapRatio = "1 / 1",
  locations = [],
  selectedId,
  hoveredId,
  onSelect,
  onHover
}) => {
  return (
    <div className="map-stage" style={{ aspectRatio: mapRatio }}>
      {/* Real Geographic SVG Map */}
      <img
        src={mapSrc}
        alt="Geographic map"
        className="map-base-image"
        draggable="false"
      />

      {/* Marker Overlay Layer */}
      {locations.map((loc) => {
        const isSelected = selectedId === loc.id;
        const isHovered  = hoveredId  === loc.id;
        const isActive   = isSelected || isHovered;

        return (
          <button
            key={loc.id}
            type="button"
            className={`map-marker ${isActive ? 'map-marker--active' : ''}`}
            style={{
              left: loc.markerPosition.left,
              top:  loc.markerPosition.top
            }}
            onClick={() => onSelect(loc)}
            onMouseEnter={() => onHover(loc)}
            onMouseLeave={() => onHover(null)}
            aria-label={`${loc.name} – ${loc.projectsCount} projects`}
            title={loc.name}
          >
            {/* Pulse halo ripple at pin tip */}
            {isActive && <span className="map-marker__pulse" aria-hidden="true" />}

            {/* Upright, perfectly symmetric, modern SVG pin */}
            <svg
              className="map-marker__svg"
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Teardrop pin body pointing straight down */}
              <path
                d="M11 0.75C5.34 0.75 0.75 5.34 0.75 11C0.75 18.25 11 27.25 11 27.25C11 27.25 21.25 18.25 21.25 11C21.25 5.34 16.66 0.75 11 0.75Z"
                fill={isActive ? '#f97316' : '#0d9488'}
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Inner white circle for the project count number */}
              <circle cx="11" cy="11" r="6" fill="#ffffff" />

              {/* Bold centered count text */}
              <text
                x="11"
                y="14.2"
                textAnchor="middle"
                fill={isActive ? '#ea580c' : '#0f766e'}
                fontSize="9"
                fontWeight="800"
                fontFamily="var(--font-heading, sans-serif)"
              >
                {loc.projectsCount}
              </text>
            </svg>

            {/* Tooltip on hover/active */}
            <span className="map-marker__tooltip" aria-hidden="true">
              <span className="map-marker__tooltip-name">{loc.name}</span>
              <span className="map-marker__tooltip-meta">
                <Sparkles size={10} />
                {loc.projectsCount} {loc.projectsCount === 1 ? 'project' : 'projects'}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MapWithMarkers;
