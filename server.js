import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample Nagpur Initial Data
let incidents = [
  {
    id: 'NGP-101',
    title: 'Ambazari Overflow & Nag River Flash Waterlogging',
    category: 'flood',
    severity: 'critical',
    status: 'dispatched',
    locationName: 'Corporation Colony & Ambazari Layout',
    lat: 21.1292,
    lng: 79.0435,
    reportedAt: '10 mins ago',
    reporterName: 'Rajesh Sharma (NMC Water Inspector)',
    description: 'Ambazari lake spillway overflowed by 0.4m. Nag river banks inundated 35 houses in Corporation colony.',
    upvotes: 42,
    assignedUnit: 'SDRF Boat Unit #02'
  }
];

let shelters = [
  {
    id: 'SH-01',
    name: 'Mankapur Sports Complex Mega Shelter',
    area: 'Mankapur',
    address: 'Ring Road, Mankapur, Nagpur - 440030',
    lat: 21.1880,
    lng: 79.0700,
    capacity: 1500,
    currentOccupancy: 820,
    distanceKm: 3.2,
    status: 'filling_fast',
    foodAvailableKg: 2400,
    waterAvailableLiters: 12000,
    medicalSupport: true,
    washroomsCount: 45,
    wheelchairAccess: true,
    contactPhone: '+91 712 2548901'
  }
];

// Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'active', system: 'RescueGrid Nagpur API Server', version: '2.0.0' });
});

app.get('/api/incidents', (req, res) => {
  res.json({ success: true, count: incidents.length, data: incidents });
});

app.post('/api/incidents', (req, res) => {
  const newIncident = {
    id: `NGP-${Math.floor(100 + Math.random() * 900)}`,
    ...req.body,
    reportedAt: 'Just now',
    upvotes: 1,
    status: 'pending'
  };
  incidents.unshift(newIncident);
  res.status(201).json({ success: true, data: newIncident });
});

app.get('/api/shelters', (req, res) => {
  res.json({ success: true, count: shelters.length, data: shelters });
});

app.post('/api/sos', (req, res) => {
  const sosTicket = {
    sosId: `SOS-NGP-${Math.floor(1000 + Math.random() * 9000)}`,
    timestamp: new Date().toISOString(),
    status: 'DISPATCHED_TO_NMC_SDRF',
    coordinates: [21.1458, 79.0882]
  };
  res.json({ success: true, sosTicket });
});

app.listen(PORT, () => {
  console.log(`RescueGrid Nagpur API server running on http://localhost:${PORT}`);
});
