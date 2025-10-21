// ==========================================
// ASEAN SUMMIT 2025 - TRAFFIC DATA
// ==========================================
// Event: 47th ASEAN Summit
// Dates: October 26-28, 2025
// Data Source: 2025-10-18_ASEAN_Summit_KL_Road_Closures.md

const SUMMIT_DATA = {
  event: {
    name: '47th ASEAN Summit 2025',
    dates: {
      start: new Date(2025, 9, 26),
      end: new Date(2025, 9, 28)
    },
    policeDeployment: {
      start: new Date(2025, 9, 23),
      end: new Date(2025, 9, 28),
      officers: 16000
    },
    location: 'Kuala Lumpur, Malaysia',
    closureDuration: '30-45 minutes per convoy (rolling closures)',
    alertLevel: 'HIGH'
  },

  attendees: [
    { name: 'US President', country: 'Donald Trump', flag: '🇺🇸' },
    { name: 'Chinese President', country: 'Xi Jinping', flag: '🇨🇳' },
    { name: 'Indonesian President', country: 'Prabowo Subianto', flag: '🇮🇩' },
    { name: 'Singapore PM', country: 'Lawrence Wong', flag: '🇸🇬' },
    { name: 'Thai Prime Minister', country: 'TBD', flag: '🇹🇭' },
    { name: 'Brunei Sultan', country: 'Hassanal Bolkiah', flag: '🇧🇳' }
  ],

  // Main affected roads (14 routes)
  affectedRoads: [
    {
      id: 'jalan-ampang',
      name: 'Jalan Ampang',
      severity: 'HIGH',
      coordinates: [3.1500, 101.7100],
      description: 'Major arterial road'
    },
    {
      id: 'jalan-sultan-ismail',
      name: 'Jalan Sultan Ismail',
      severity: 'HIGH',
      coordinates: [3.1450, 101.6950],
      description: 'Primary city road'
    },
    {
      id: 'jalan-p-ramlee',
      name: 'Jalan P. Ramlee',
      severity: 'CRITICAL',
      coordinates: [3.1380, 101.7000],
      description: 'Critical intersection hub'
    },
    {
      id: 'jalan-pinang',
      name: 'Jalan Pinang',
      severity: 'HIGH',
      coordinates: [3.1420, 101.6920],
      description: 'City centre connector'
    },
    {
      id: 'jalan-binjai',
      name: 'Jalan Binjai',
      severity: 'MEDIUM',
      coordinates: [3.1480, 101.6880],
      description: 'Secondary route'
    },
    {
      id: 'persiaran-klcc',
      name: 'Persiaran KLCC',
      severity: 'CRITICAL',
      coordinates: [3.1580, 101.7120],
      description: 'Golden Triangle - HIGHEST IMPACT'
    },
    {
      id: 'jalan-tun-razak',
      name: 'Jalan Tun Razak',
      severity: 'HIGH',
      coordinates: [3.1600, 101.7000],
      description: 'Major thoroughfare'
    },
    {
      id: 'jalan-parlimen',
      name: 'Jalan Parlimen',
      severity: 'MEDIUM',
      coordinates: [3.1280, 101.6950],
      description: 'Parliamentary access'
    },
    {
      id: 'jalan-bukit-bintang',
      name: 'Jalan Bukit Bintang',
      severity: 'HIGH',
      coordinates: [3.1400, 101.7100],
      description: 'Shopping district'
    },
    {
      id: 'jalan-imbi',
      name: 'Jalan Imbi',
      severity: 'MEDIUM',
      coordinates: [3.1350, 101.7080],
      description: 'District connector'
    },
    {
      id: 'jalan-damansara',
      name: 'Jalan Damansara',
      severity: 'MEDIUM',
      coordinates: [3.1600, 101.6700],
      description: 'Outbound route'
    },
    {
      id: 'jalan-istana',
      name: 'Jalan Istana',
      severity: 'MEDIUM',
      coordinates: [3.1200, 101.7000],
      description: 'Palace vicinity'
    },
    {
      id: 'jalan-kuching',
      name: 'Jalan Kuching',
      severity: 'MEDIUM',
      coordinates: [3.1800, 101.7000],
      description: 'Northern approach'
    },
    {
      id: 'jalan-perak',
      name: 'Jalan Perak',
      severity: 'HIGH',
      coordinates: [3.1650, 101.6850],
      description: 'Major intersection hub'
    }
  ],

  // Critical intersections (6 key points)
  criticalIntersections: [
    {
      id: 'intersection-1',
      name: 'Jalan Ampang – Jalan P. Ramlee',
      coordinates: [3.1450, 101.7050],
      severity: 'CRITICAL',
      impact: 'SEVERE - Main convoy route'
    },
    {
      id: 'intersection-2',
      name: 'Jalan Sultan Ismail – Jalan P. Ramlee',
      coordinates: [3.1420, 101.6980],
      severity: 'CRITICAL',
      impact: 'SEVERE - Junction point'
    },
    {
      id: 'intersection-3',
      name: 'Jalan Perak – Jalan P. Ramlee',
      coordinates: [3.1400, 101.6950],
      severity: 'CRITICAL',
      impact: 'SEVERE - Central hub'
    },
    {
      id: 'intersection-4',
      name: 'Jalan Perak – Jalan Pinang',
      coordinates: [3.1480, 101.6900],
      severity: 'HIGH',
      impact: 'HEAVY - Secondary hub'
    },
    {
      id: 'intersection-5',
      name: 'Jalan Stonor – Jalan Kia Peng',
      coordinates: [3.1500, 101.7000],
      severity: 'HIGH',
      impact: 'HEAVY - District connector'
    },
    {
      id: 'intersection-6',
      name: 'Jalan Stonor – Persiaran KLCC',
      coordinates: [3.1550, 101.7100],
      severity: 'CRITICAL',
      impact: 'SEVERE - Golden Triangle gateway'
    }
  ],

  // Major expressways affected (6 routes)
  affectedExpressways: [
    {
      id: 'mex',
      name: 'Maju Expressway (MEX)',
      severity: 'HIGH',
      impactArea: 'City centre connections',
      description: 'Primary route to downtown'
    },
    {
      id: 'nse',
      name: 'North-South Expressway',
      severity: 'HIGH',
      impactArea: 'Sungai Buloh to Jalan Duta',
      description: 'Major north-south artery'
    },
    {
      id: 'elite',
      name: 'ELITE Expressway',
      severity: 'MEDIUM',
      impactArea: 'KLIA–Putrajaya',
      description: 'Airport access route'
    },
    {
      id: 'nkve',
      name: 'NKVE',
      severity: 'HIGH',
      impactArea: 'Subang to Jalan Duta',
      description: 'Western corridor'
    },
    {
      id: 'gce',
      name: 'Guthrie Corridor Expressway (GCE)',
      severity: 'MEDIUM',
      impactArea: 'Outer ring road',
      description: 'Alternative bypass'
    },
    {
      id: 'kl-seremban',
      name: 'KL–Seremban Expressway',
      severity: 'MEDIUM',
      impactArea: 'Sungai Besi to City Centre',
      description: 'Southern approach'
    }
  ],

  // Restricted zones
  restrictedZones: [
    {
      id: 'golden-triangle',
      name: 'Golden Triangle (KLCC Area)',
      severity: 'CRITICAL',
      coordinates: [3.1580, 101.7120],
      radius: 2.0,
      description: 'HEAVIEST IMPACT - Convention Centre vicinity',
      restrictions: ['Heavy vehicles banned', '30-45 min rolling closures', 'Periodic road blocks']
    },
    {
      id: 'city-centre',
      name: 'City Centre Lockdown Zone',
      severity: 'HIGH',
      coordinates: [3.1400, 101.6950],
      radius: 1.5,
      description: 'Complete traffic control area',
      restrictions: ['Traffic control active', 'Limited access', 'Increased enforcement']
    },
    {
      id: 'convention-centre',
      name: 'Convention Centre Vicinity',
      severity: 'CRITICAL',
      coordinates: [3.1580, 101.7120],
      radius: 1.0,
      description: 'Summit venue surroundings',
      restrictions: ['No entry without authorization', 'Police checkpoints', 'High security']
    }
  ],

  // Traffic restrictions
  restrictions: {
    vehicleRestrictions: [
      {
        type: 'Heavy vehicles',
        restriction: '❌ BANNED from city centre during peak summit hours',
        period: 'Oct 26-28, 2025'
      },
      {
        type: 'Commercial vehicles',
        restriction: '⚠️ Restricted during peak hours',
        period: 'Oct 26-28, 2025'
      }
    ],
    publicTransportRecommended: [
      { name: 'LRT', icon: '🚆' },
      { name: 'MRT', icon: '🚇' },
      { name: 'Monorail', icon: '🚡' },
      { name: 'Rapid KL Buses', icon: '🚌' }
    ],
    doList: [
      '✅ Plan routes in advance',
      '✅ Use public transportation',
      '✅ Check real-time traffic updates (Waze, Google Maps)',
      '✅ Allow extra travel time',
      '✅ Work from home if possible',
      '✅ Avoid Golden Triangle area if not essential'
    ],
    dontList: [
      '❌ Park along affected roads (vehicles will be towed)',
      '❌ Use heavy vehicles in city centre',
      '❌ Plan travel during peak hours',
      '❌ Expect normal traffic conditions',
      '❌ Attempt blocked routes'
    ]
  },

  // Color coding
  colorScheme: {
    CRITICAL: '#c41e3a',  // Dark red
    HIGH: '#ff6b35',       // Orange-red
    MEDIUM: '#ffc72c',     // Yellow
    LOW: '#45b649'         // Green
  }
};

// Helper functions
function getSummitStatus() {
  const now = new Date();
  if (now < SUMMIT_DATA.event.policeDeployment.start) {
    return 'PRE-EVENT (Preparation Phase)';
  } else if (now < SUMMIT_DATA.event.dates.start) {
    return 'ACTIVE (Police Deployment)';
  } else if (now <= SUMMIT_DATA.event.dates.end) {
    return 'LIVE (Summit in Progress)';
  } else {
    return 'POST-EVENT (Monitoring Complete)';
  }
}

function getDaysUntilSummit() {
  const now = new Date();
  const summitStart = new Date(SUMMIT_DATA.event.dates.start);
  const daysLeft = Math.ceil((summitStart - now) / (1000 * 60 * 60 * 24));
  return daysLeft > 0 ? daysLeft : 0;
}

function getAffectedRoadCount() {
  return SUMMIT_DATA.affectedRoads.length;
}

function getCriticalIntersectionCount() {
  return SUMMIT_DATA.criticalIntersections.length;
}
