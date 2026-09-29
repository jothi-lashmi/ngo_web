/**
 * Impact Map Data — Static, Data-Driven
 *
 * Coordinates are precisely mapped to each geographic SVG asset:
 *   - India:       India-map-en.svg (1519 × 1773)
 *   - Tamil Nadu:  Tamil_Nadu_district_map.svg (1640 × 2032)
 *   - World:       WorldMap.svg (5364.97 × 2795.77)
 */

export const tabs = [
  { id: "india",         label: "India" },
  { id: "tamil-nadu",    label: "Tamil Nadu" },
  { id: "international", label: "International" }
];

export const impactMapData = {

  // ── INDIA (1519 × 1773) ──────────────────────────────────────────────
  india: {
    title: "India Regional Impact",
    subtitle: "Pan-India sustainable development initiatives across 7 key states",
    totalProjects: 48,
    totalBeneficiaries: "1,85,000+",
    mapRatio: "1519 / 1773",
    locations: [
      {
        id: "tn",
        name: "Tamil Nadu",
        projectsCount: 18,
        beneficiaries: "75,000+",
        markerPosition: { left: "34.0%", top: "86.5%" },
        focusAreas: ["Digital Literacy", "Water & Sanitation", "Women Empowerment"],
        description: "State operational hub featuring 24 rural computer labs, village rainwater harvesting systems, and micro-entrepreneurship programs."
      },
      {
        id: "kl",
        name: "Kerala",
        projectsCount: 7,
        beneficiaries: "24,000+",
        markerPosition: { left: "25.0%", top: "89.5%" },
        focusAreas: ["Eco-Restoration", "Flood Resilience", "Mobile Clinics"],
        description: "Coastal climate resilience initiatives, mangrove bio-shields, and primary healthcare outreach in remote backwaters."
      },
      {
        id: "ka",
        name: "Karnataka",
        projectsCount: 9,
        beneficiaries: "32,000+",
        markerPosition: { left: "26.5%", top: "76.5%" },
        focusAreas: ["Solar Power Schools", "Youth Skill Bootcamps"],
        description: "Solar electrifying rural government schools and providing digital skill training to high school graduates."
      },
      {
        id: "mh",
        name: "Maharashtra",
        projectsCount: 5,
        beneficiaries: "20,000+",
        markerPosition: { left: "27.5%", top: "60.5%" },
        focusAreas: ["Drought Mitigation", "Sustainable Agriculture"],
        description: "Micro-irrigation check dams and soil health enhancement for drought-affected smallholder farming families."
      },
      {
        id: "rj",
        name: "Rajasthan",
        projectsCount: 4,
        beneficiaries: "14,000+",
        markerPosition: { left: "21.5%", top: "38.5%" },
        focusAreas: ["Desert Water Cisterns", "Girl Child Education"],
        description: "Constructing underground rainwater harvesting tanks (Taankas) and safe bicycle transport for rural schoolgirls."
      },
      {
        id: "od",
        name: "Odisha",
        projectsCount: 3,
        beneficiaries: "12,000+",
        markerPosition: { left: "59.0%", top: "57.0%" },
        focusAreas: ["Tribal Healthcare", "Nutritional Security"],
        description: "Mobile dental & vision care units and organic indigenous seed distribution across tribal hill blocks."
      },
      {
        id: "as",
        name: "Assam",
        projectsCount: 2,
        beneficiaries: "8,000+",
        markerPosition: { left: "82.0%", top: "37.0%" },
        focusAreas: ["Flood Safe Sanitation", "Handloom Clusters"],
        description: "Elevated clean water points in flood-prone districts and weaver equipment modernization for women artisans."
      }
    ]
  },

  // ── TAMIL NADU (1640 × 2032) ─────────────────────────────────────────
  "tamil-nadu": {
    title: "Tamil Nadu District Impact",
    subtitle: "Grassroots community initiatives across 8 primary districts",
    totalProjects: 18,
    totalBeneficiaries: "75,000+",
    mapRatio: "1640 / 2032",
    locations: [
      {
        id: "chennai",
        name: "Chennai",
        projectsCount: 4,
        beneficiaries: "22,000+",
        markerPosition: { left: "86.8%", top: "12.7%" },
        focusAreas: ["Urban Youth Tech Hub", "Coastal Disaster Safety"],
        description: "Urban slum learning centers, youth coding bootcamps, and volunteer flood emergency response teams."
      },
      {
        id: "madurai",
        name: "Madurai",
        projectsCount: 3,
        beneficiaries: "14,000+",
        markerPosition: { left: "36.2%", top: "65.2%" },
        focusAreas: ["Artisan Empowerment", "Rural Health Outreach"],
        description: "Traditional pottery & handloom cluster support and mobile medical diagnostic camps."
      },
      {
        id: "coimbatore",
        name: "Coimbatore",
        projectsCount: 2,
        beneficiaries: "9,500+",
        markerPosition: { left: "12.0%", top: "54.0%" },
        focusAreas: ["Tribal Schooling", "Native Reforestation"],
        description: "Anamalai tribal child education scholarships and native tree sapling plantations."
      },
      {
        id: "salem",
        name: "Salem",
        projectsCount: 2,
        beneficiaries: "8,000+",
        markerPosition: { left: "39.6%", top: "35.5%" },
        focusAreas: ["Weaver Self-Help", "RO Water Kiosks"],
        description: "Solar powered textile equipment for women weaver groups and village filtration kiosks."
      },
      {
        id: "trichy",
        name: "Tiruchirappalli",
        projectsCount: 2,
        beneficiaries: "7,500+",
        markerPosition: { left: "43.8%", top: "47.8%" },
        focusAreas: ["School Sanitation", "Child Nutrition"],
        description: "Modern eco-sanitation blocks in government schools and bio-fortified school meal gardens."
      },
      {
        id: "thanjavur",
        name: "Thanjavur",
        projectsCount: 2,
        beneficiaries: "6,000+",
        markerPosition: { left: "58.0%", top: "51.6%" },
        focusAreas: ["Organic Agriculture", "Dairy Cooperatives"],
        description: "Indigenous seed preservation centers and women-led organic dairy farming co-ops."
      },
      {
        id: "tirunelveli",
        name: "Tirunelveli",
        projectsCount: 2,
        beneficiaries: "5,000+",
        markerPosition: { left: "23.6%", top: "85.8%" },
        focusAreas: ["Youth Sports Academy", "Renewable Energy"],
        description: "Rural youth sports training facilities and community solar water pumps."
      },
      {
        id: "kanyakumari",
        name: "Kanyakumari",
        projectsCount: 1,
        beneficiaries: "3,000+",
        markerPosition: { left: "12.7%", top: "94.3%" },
        focusAreas: ["Fisherfolk Safety", "Mangrove Restoration"],
        description: "Satellite communication beacons for coastal fishermen and estuarine mangrove planting."
      }
    ]
  },

  // ── INTERNATIONAL (5364.97 × 2795.77) ─────────────────────────────────
  international: {
    title: "International Outreach & Partnerships",
    subtitle: "Global cross-border community resilience & emergency assistance",
    totalProjects: 12,
    totalBeneficiaries: "45,000+",
    mapRatio: "5364.97 / 2795.77",
    locations: [
      {
        id: "np",
        name: "Nepal",
        projectsCount: 4,
        beneficiaries: "16,000+",
        markerPosition: { left: "67.0%", top: "39.5%" },
        focusAreas: ["Himalayan Solar Schools", "Earthquake Resilience"],
        description: "Seismic-resistant learning centers and solar micro-grids in high-altitude mountain hamlets."
      },
      {
        id: "lk",
        name: "Sri Lanka",
        projectsCount: 3,
        beneficiaries: "12,000+",
        markerPosition: { left: "68.5%", top: "50.5%" },
        focusAreas: ["Northern Province Nutrition", "Coastal Fisheries"],
        description: "Community organic vegetable farms, rainwater storage units, and fish processing kits for widows."
      },
      {
        id: "bd",
        name: "Bangladesh",
        projectsCount: 2,
        beneficiaries: "8,500+",
        markerPosition: { left: "71.0%", top: "41.5%" },
        focusAreas: ["Floating Classrooms", "Flood Bio-Shields"],
        description: "Solar-powered boat schools and mangrove bio-shield plantations along cyclone-prone river banks."
      },
      {
        id: "ke",
        name: "Kenya",
        projectsCount: 2,
        beneficiaries: "5,500+",
        markerPosition: { left: "56.8%", top: "52.5%" },
        focusAreas: ["Sub-Saharan Boreholes", "Digital Learning Labs"],
        description: "Deep aquifer solar water wells and mobile computer tablet learning units in rural Rift Valley."
      },
      {
        id: "ug",
        name: "Uganda",
        projectsCount: 1,
        beneficiaries: "3,000+",
        markerPosition: { left: "54.8%", top: "51.5%" },
        focusAreas: ["Maternal Health Clinics", "Midwife Training"],
        description: "Solar powered cold chain storage for rural vaccine centers and maternal health kits."
      }
    ]
  }
};
