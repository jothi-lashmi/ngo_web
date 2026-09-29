import React, { useState, useRef, useLayoutEffect } from 'react';
import { MapPin, Users, FolderGit2, CheckCircle2, ChevronRight, Globe, Sparkles } from 'lucide-react';
import { tabs, impactMapData } from '../../data/impactMapData';
import MapWithMarkers from './MapWithMarkers';

// Real geographic SVG map assets
import indiaMapSrc     from '../../assets/maps/india.svg';
import tamilNaduMapSrc from '../../assets/maps/tamil-nadu.svg';
import worldMapSrc     from '../../assets/maps/world.svg';

const MAP_ASSETS = {
  india:         indiaMapSrc,
  "tamil-nadu":  tamilNaduMapSrc,
  international: worldMapSrc
};

const ImpactMap = () => {
  const [activeTabId,      setActiveTabId]      = useState('india');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation,  setHoveredLocation]  = useState(null);
  const [sidebarHeight,    setSidebarHeight]    = useState(null);

  const rightColRef = useRef(null);

  const activeData = impactMapData[activeTabId];
  const mapSrc     = MAP_ASSETS[activeTabId];

  const handleTabChange = (tabId) => {
    setActiveTabId(tabId);
    setSelectedLocation(null);
    setHoveredLocation(null);
  };

  const handleSelectLocation = (loc) => {
    setSelectedLocation(prev => prev?.id === loc.id ? null : loc);
  };

  const displayLocation = selectedLocation || hoveredLocation || activeData.locations[0];

  // Dynamically sync left sidebar height to equal the right column (map + below detail card)
  useLayoutEffect(() => {
    if (!rightColRef.current) return;

    const syncHeight = () => {
      if (window.innerWidth > 992 && rightColRef.current) {
        setSidebarHeight(rightColRef.current.offsetHeight);
      } else {
        setSidebarHeight(null);
      }
    };

    syncHeight();

    const resizeObserver = new ResizeObserver(syncHeight);
    resizeObserver.observe(rightColRef.current);
    window.addEventListener('resize', syncHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncHeight);
    };
  }, [activeTabId, displayLocation]);

  return (
    <section className="impact-map-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="impact-map-header text-center">
          <div className="impact-badge">
            <Globe size={16} /> Global &amp; Grassroots Footprint
          </div>
          <h2 className="impact-map-title">Our Impact</h2>
          <p className="impact-map-description">
            Explore the regions where our organization has created meaningful impact.
          </p>
        </div>

        {/* ── Tab Bar ── */}
        <div className="impact-tabs-container">
          <div className="impact-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`impact-tab-btn ${activeTabId === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.id === 'india'         && <span className="tab-flag">🇮🇳</span>}
                {tab.id === 'tamil-nadu'    && <span className="tab-flag">📍</span>}
                {tab.id === 'international' && <span className="tab-flag">🌐</span>}
                {tab.label}
                <span className="tab-count-badge">
                  {impactMapData[tab.id]?.totalProjects} Projects
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Grid (Desktop: 2 Columns) ── */}
        <div className="impact-map-grid">

          {/* ── Left Sidebar (Height strictly matches the right 2 containers) ── */}
          <div 
            className="impact-sidebar"
            style={sidebarHeight ? { height: `${sidebarHeight}px` } : undefined}
          >
            {/* Summary Card */}
            <div className="sidebar-summary-card">
              <div className="summary-info">
                <h3>{activeData.title}</h3>
                <p>{activeData.subtitle}</p>
              </div>
              <div className="summary-metrics">
                <div className="metric-item">
                  <FolderGit2 className="metric-icon" size={18} />
                  <div>
                    <span className="metric-value">{activeData.totalProjects}</span>
                    <span className="metric-label">Active Projects</span>
                  </div>
                </div>
                <div className="metric-item">
                  <Users className="metric-icon" size={18} />
                  <div>
                    <span className="metric-value">{activeData.totalBeneficiaries}</span>
                    <span className="metric-label">Beneficiaries Reached</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location List Header */}
            <div className="location-list-header">
              <h4>Regions &amp; Activity Count</h4>
              <span className="list-hint">Select a location to inspect</span>
            </div>

            {/* Location List with flex scroll */}
            <div className="location-list">
              {activeData.locations.map((loc) => {
                const isSelected = selectedLocation?.id === loc.id;
                const isHovered  = hoveredLocation?.id  === loc.id;
                const isActive   = isSelected || isHovered;

                return (
                  <div
                    key={loc.id}
                    className={`location-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectLocation(loc)}
                    onMouseEnter={() => setHoveredLocation(loc)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleSelectLocation(loc)}
                  >
                    <div className="location-item-icon">
                      <MapPin size={18} />
                    </div>
                    <div className="location-item-info">
                      <span className="location-name">{loc.name}</span>
                      <span className="location-beneficiaries">{loc.beneficiaries} Beneficiaries</span>
                    </div>
                    <div className="location-item-count">
                      <span className="count-pill">
                        {loc.projectsCount} {loc.projectsCount === 1 ? 'Project' : 'Projects'}
                      </span>
                      <ChevronRight size={16} className="chevron" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right Panel: Map Container + Below Detail Card ── */}
          <div className="impact-map-container" ref={rightColRef}>

            {/* Geographic Map Viewport Box */}
            <div className="map-view-box">
              <MapWithMarkers
                mapSrc={mapSrc}
                mapRatio={activeData.mapRatio}
                locations={activeData.locations}
                selectedId={selectedLocation?.id}
                hoveredId={hoveredLocation?.id}
                onSelect={handleSelectLocation}
                onHover={setHoveredLocation}
              />
            </div>

            {/* Location Detail Card (Below Container) */}
            {displayLocation && (
              <div className="location-detail-card">
                <div className="detail-card-header">
                  <div className="detail-title-group">
                    <span className="detail-icon">
                      <MapPin size={20} />
                    </span>
                    <div>
                      <h4 className="detail-title">{displayLocation.name}</h4>
                      <span className="detail-subtitle">{displayLocation.beneficiaries} Lives Impacted</span>
                    </div>
                  </div>
                  <span className="detail-project-badge">
                    <Sparkles size={14} />
                    {displayLocation.projectsCount} Active {displayLocation.projectsCount === 1 ? 'Initiative' : 'Initiatives'}
                  </span>
                </div>

                <p className="detail-description">{displayLocation.description}</p>

                <div className="detail-tags-section">
                  <span className="tags-label">Key Focus Areas:</span>
                  <div className="detail-tags">
                    {displayLocation.focusAreas.map((tag, idx) => (
                      <span key={idx} className="tag-pill">
                        <CheckCircle2 size={12} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMap;
