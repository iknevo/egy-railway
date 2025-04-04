export const stations = [
  {
    id: 1,
    name: "Ramses Station",
    arabicName: "محطة رمسيس",
    city: "Cairo",
    governorate: "Cairo",
    type: "main",
    code: "CAI",
    location: {
      latitude: 30.0626,
      longitude: 31.2477,
    },
    amenities: [
      "ticket_office",
      "waiting_room",
      "restrooms",
      "wheelchair_access",
      "food_vendors",
    ],
    connections: [2, 5, 6, 7, 12, 13, 14, 15],
  },
  {
    id: 2,
    name: "Giza Station",
    arabicName: "محطة الجيزة",
    city: "Giza",
    governorate: "Giza",
    type: "main",
    code: "GIZ",
    location: {
      latitude: 30.0115,
      longitude: 31.2094,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 12],
  },
  {
    id: 3,
    name: "Sidi Gaber Station",
    arabicName: "محطة سيدي جابر",
    city: "Alexandria",
    governorate: "Alexandria",
    type: "main",
    code: "SGB",
    location: {
      latitude: 31.2199,
      longitude: 29.9484,
    },
    amenities: [
      "ticket_office",
      "waiting_room",
      "restrooms",
      "wheelchair_access",
      "food_vendors",
    ],
    connections: [4, 14],
  },
  {
    id: 4,
    name: "Misr Station",
    arabicName: "محطة مصر",
    city: "Alexandria",
    governorate: "Alexandria",
    type: "main",
    code: "MSR",
    location: {
      latitude: 31.2001,
      longitude: 29.8957,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [3],
  },
  {
    id: 5,
    name: "Tanta Station",
    arabicName: "محطة طنطا",
    city: "Tanta",
    governorate: "Gharbia",
    type: "main",
    code: "TNT",
    location: {
      latitude: 30.7885,
      longitude: 31.0004,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 14],
  },
  {
    id: 6,
    name: "Mansoura Station",
    arabicName: "محطة المنصورة",
    city: "Mansoura",
    governorate: "Dakahlia",
    type: "main",
    code: "MNS",
    location: {
      latitude: 31.0409,
      longitude: 31.3807,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 15],
  },
  {
    id: 7,
    name: "Zagazig Station",
    arabicName: "محطة الزقازيق",
    city: "Zagazig",
    governorate: "Sharqia",
    type: "main",
    code: "ZGZ",
    location: {
      latitude: 30.5877,
      longitude: 31.5021,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1],
  },
  {
    id: 8,
    name: "Asyut Station",
    arabicName: "محطة أسيوط",
    city: "Asyut",
    governorate: "Asyut",
    type: "main",
    code: "AST",
    location: {
      latitude: 27.1809,
      longitude: 31.1837,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [9, 16],
  },
  {
    id: 9,
    name: "Sohag Station",
    arabicName: "محطة سوهاج",
    city: "Sohag",
    governorate: "Sohag",
    type: "main",
    code: "SHG",
    location: {
      latitude: 26.5569,
      longitude: 31.6948,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [8, 10],
  },
  {
    id: 10,
    name: "Luxor Station",
    arabicName: "محطة الأقصر",
    city: "Luxor",
    governorate: "Luxor",
    type: "main",
    code: "LXR",
    location: {
      latitude: 25.6965,
      longitude: 32.6421,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms", "food_vendors"],
    connections: [9, 11],
  },
  {
    id: 11,
    name: "Aswan Station",
    arabicName: "محطة أسوان",
    city: "Aswan",
    governorate: "Aswan",
    type: "main",
    code: "ASW",
    location: {
      latitude: 24.0889,
      longitude: 32.8998,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms", "food_vendors"],
    connections: [10],
  },
  {
    id: 12,
    name: "Bashteel Station",
    arabicName: "محطة بشتيل",
    city: "Giza",
    governorate: "Giza",
    type: "secondary",
    code: "BSH",
    location: {
      latitude: 30.06619,
      longitude: 30.06619,
    },
    amenities: ["ticket_office", "waiting_room"],
    connections: [1, 2],
  },
  {
    id: 13,
    name: "Suez Station",
    arabicName: "محطة السويس",
    city: "Suez",
    governorate: "Suez",
    type: "main",
    code: "SUZ",
    location: {
      latitude: 29.9663,
      longitude: 32.5498,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1],
  },
  {
    id: 14,
    name: "Damnhour Station",
    arabicName: "محطة دمنهور",
    city: "Behira",
    governorate: "Beheira",
    type: "main",
    code: "DMH",
    location: {
      latitude: 31.0341,
      longitude: 30.4682,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 3, 5],
  },
  {
    id: 15,
    name: "Damietta Station",
    arabicName: "محطة دمياط",
    city: "Damietta",
    governorate: "Damietta",
    type: "main",
    code: "DMT",
    location: {
      latitude: 31.4191,
      longitude: 31.8144,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 6],
  },
  {
    id: 16,
    name: "Minya Station",
    arabicName: "محطة المنيا",
    city: "Minya",
    governorate: "Minya",
    type: "main",
    code: "MNY",
    location: {
      latitude: 28.0867,
      longitude: 30.7628,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 8],
  },
  {
    id: 17,
    name: "Beni Suef Station",
    arabicName: "محطة بني سويف",
    city: "Beni Suef",
    governorate: "Beni Suef",
    type: "main",
    code: "BSF",
    location: {
      latitude: 29.0744,
      longitude: 31.0995,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 2, 16],
  },
  {
    id: 18,
    name: "Qena Station",
    arabicName: "محطة قنا",
    city: "Qena",
    governorate: "Qena",
    type: "main",
    code: "QNA",
    location: {
      latitude: 26.1615,
      longitude: 32.7276,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [9, 10],
  },
  {
    id: 19,
    name: "Banha Station",
    arabicName: "محطة بنها",
    city: "Banha",
    governorate: "Qalyubia",
    type: "main",
    code: "BNH",
    location: {
      latitude: 30.4599,
      longitude: 31.1813,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 5, 7],
  },
  {
    id: 20,
    name: "Ismailia Station",
    arabicName: "محطة الإسماعيلية",
    city: "Ismailia",
    governorate: "Ismailia",
    type: "main",
    code: "ISM",
    location: {
      latitude: 30.5965,
      longitude: 32.2715,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [1, 13],
  },
  {
    id: 21,
    name: "Port Said Station",
    arabicName: "محطة بورسعيد",
    city: "Port Said",
    governorate: "Port Said",
    type: "main",
    code: "PSD",
    location: {
      latitude: 31.2565,
      longitude: 32.2841,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [7, 20],
  },
  {
    id: 22,
    name: "Marsa Matruh Station",
    arabicName: "محطة مرسى مطروح",
    city: "Marsa Matruh",
    governorate: "Matrouh",
    type: "main",
    code: "MMX",
    location: {
      latitude: 31.3543,
      longitude: 27.2373,
    },
    amenities: ["ticket_office", "waiting_room", "restrooms"],
    connections: [4, 14],
  },
];

// Train types available in the Egyptian railway system
export const trainTypes = [
  {
    id: 1,
    name: "VIP",
    arabicName: "في آي بي",
    description: "First-class air-conditioned trains with meal service",
    amenities: [
      "air_conditioning",
      "meal_service",
      "wifi",
      "power_outlets",
      "comfortable_seating",
    ],
    priceMultiplier: 1.5,
  },
  {
    id: 2,
    name: "Express",
    arabicName: "سريع",
    description: "Air-conditioned express trains with limited stops",
    amenities: ["air_conditioning", "snack_service", "power_outlets"],
    priceMultiplier: 1.2,
  },
  {
    id: 3,
    name: "Regular",
    arabicName: "عادي",
    description: "Standard trains stopping at most stations",
    amenities: ["air_conditioning"],
    priceMultiplier: 1.0,
  },
  {
    id: 4,
    name: "Ordinary",
    arabicName: "مكيف عادي",
    description: "Basic air-conditioned service with all stops",
    amenities: ["air_conditioning"],
    priceMultiplier: 0.8,
  },
  {
    id: 5,
    name: "Sleeper",
    arabicName: "مبيت",
    description: "Overnight sleeper trains with beds",
    amenities: [
      "sleeper_cabins",
      "air_conditioning",
      "meal_service",
      "power_outlets",
    ],
    priceMultiplier: 2.0,
  },
];

// Main train lines in Egypt
export const trainLines = [
  {
    id: 1,
    name: "Cairo-Alexandria Line",
    arabicName: "خط القاهرة-الإسكندرية",
    stations: [1, 5, 14, 3, 4],
    color: "#2E8B57", // SeaGreen
    distanceKm: 208,
  },
  {
    id: 2,
    name: "Cairo-Aswan Line",
    arabicName: "خط القاهرة-أسوان",
    stations: [1, 16, 8, 9, 10, 11],
    color: "#4169E1", // RoyalBlue
    distanceKm: 879,
  },
  {
    id: 3,
    name: "Cairo-Suez Line",
    arabicName: "خط القاهرة-السويس",
    stations: [1, 13],
    color: "#FF8C00", // DarkOrange
    distanceKm: 134,
  },
  {
    id: 4,
    name: "Cairo-Damietta Line",
    arabicName: "خط القاهرة-دمياط",
    stations: [1, 6, 15],
    color: "#9370DB", // Mediumblue
    distanceKm: 185,
  },
  {
    id: 5,
    name: "Cairo-Port Said Line",
    arabicName: "خط القاهرة-بورسعيد",
    stations: [1, 7],
    color: "#20B2AA", // LightSeaGreen
    distanceKm: 170,
  },
  {
    id: 6,
    name: "Alexandria-Marsa Matruh Line",
    arabicName: "خط الإسكندرية-مرسى مطروح",
    stations: [4, 14],
    color: "#CD5C5C", // IndianRed
    distanceKm: 290,
  },
];

// Train schedule data
export const trains = [
  // Cairo-Alexandria VIP Trains
  {
    id: 1,
    trainNumber: "901",
    lineId: 1,
    typeId: 1, // VIP
    name: "Cairo-Alexandria VIP Morning",
    arabicName: "القاهرة-الإسكندرية في آي بي صباحاً",
    stations: [
      { stationId: 1, arrivalTime: null, departureTime: "07:00", day: 0 },
      { stationId: 5, arrivalTime: "08:15", departureTime: "08:20", day: 0 },
      { stationId: 14, arrivalTime: "09:10", departureTime: "09:15", day: 0 },
      { stationId: 3, arrivalTime: "09:55", departureTime: "10:00", day: 0 },
      { stationId: 4, arrivalTime: "10:15", departureTime: null, day: 0 },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6], // All week
    basePrice: 160,
    capacity: {
      firstClass: 120,
      secondClass: 240,
    },
  },
  {
    id: 2,
    trainNumber: "101",
    lineId: 2, // Cairo-Aswan line
    typeId: 2, // Express
    name: "Cairo Express",
    arabicName: "سريع القاهرة",
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "08:00",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 2,
        arrivalTime: "08:30",
        departureTime: "08:35",
        day: 0,
        distanceKm: 20,
      },
      {
        stationId: 17,
        arrivalTime: "09:15",
        departureTime: "09:20",
        day: 0,
        distanceKm: 50,
      },
      {
        stationId: 16,
        arrivalTime: "09:45",
        departureTime: "09:50",
        day: 0,
        distanceKm: 80,
      },
      {
        stationId: 8,
        arrivalTime: "11:30",
        departureTime: "11:40",
        day: 0,
        distanceKm: 110,
      },
      {
        stationId: 9,
        arrivalTime: "14:00",
        departureTime: "14:10",
        day: 0,
        distanceKm: 130,
      },
      {
        stationId: 18,
        arrivalTime: "16:30",
        departureTime: "16:40",
        day: 0,
        distanceKm: 140,
      },
      {
        stationId: 10,
        arrivalTime: "18:00",
        departureTime: null,
        day: 0,
        distanceKm: 150,
      },
    ],
    availableDays: [0, 2, 4, 6], // Sunday, Tuesday, Thursday, Saturday
    basePrice: 280,
    capacity: {
      firstClass: 80,
      secondClass: 220,
    },
  },
  {
    id: 3,
    trainNumber: "102",
    lineId: 1, // Cairo-Alexandria line
    typeId: 2, // Express
    name: "Alexandria Fast",
    arabicName: "سريع الإسكندرية",
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "07:30",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 5,
        arrivalTime: "08:45",
        departureTime: "08:50",
        day: 0,
        distanceKm: 50,
      },
      {
        stationId: 4,
        arrivalTime: "10:30",
        departureTime: null,
        day: 0,
        distanceKm: 100,
      },
    ],
    availableDays: [0, 1, 2, 3, 4, 5, 6], // All week
    basePrice: 140,
    capacity: {
      firstClass: 90,
      secondClass: 210,
    },
  },
  {
    id: 4,
    trainNumber: "103",
    lineId: 4, // Cairo-Damietta line
    typeId: 3, // Regular
    name: "Delta Star",
    arabicName: "نجمة الدلتا",
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "09:00",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 19,
        arrivalTime: "09:45",
        departureTime: "09:50",
        day: 0,
        distanceKm: 30,
      },
      {
        stationId: 5,
        arrivalTime: "10:15",
        departureTime: "10:20",
        day: 0,
        distanceKm: 60,
      },
      {
        stationId: 6,
        arrivalTime: "11:30",
        departureTime: "11:40",
        day: 0,
        distanceKm: 90,
      },
      {
        stationId: 15,
        arrivalTime: "13:00",
        departureTime: null,
        day: 0,
        distanceKm: 120,
      },
    ],
    availableDays: [0, 1, 2, 3, 4], // Sunday through Thursday
    basePrice: 120,
    capacity: {
      firstClass: 50,
      secondClass: 180,
    },
  },
  {
    id: 5,
    trainNumber: "104",
    lineId: 2, // Cairo-Aswan line
    typeId: 5, // Sleeper
    name: "Upper Egypt Express",
    arabicName: "سريع صعيد مصر",
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "20:00",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 2,
        arrivalTime: "20:30",
        departureTime: "20:35",
        day: 0,
        distanceKm: 25,
      },
      {
        stationId: 8,
        arrivalTime: "00:15",
        departureTime: "00:25",
        day: 1,
        distanceKm: 100,
      },
      {
        stationId: 10,
        arrivalTime: "04:10",
        departureTime: "04:20",
        day: 1,
        distanceKm: 160,
      },
      {
        stationId: 11,
        arrivalTime: "08:00",
        departureTime: null,
        day: 1,
        distanceKm: 180,
      },
    ],
    availableDays: [0, 2, 4], // Sunday, Tuesday, Thursday
    basePrice: 450,
    capacity: {
      sleeper: 100,
      firstClass: 60,
    },
  },
  {
    id: 6,
    trainNumber: "105",
    lineId: 3, // Cairo-Suez line
    typeId: 3, // Regular
    name: "Suez Commuter",
    arabicName: "قطار السويس",
    stations: [
      {
        stationId: 1,
        arrivalTime: null,
        departureTime: "06:45",
        day: 0,
        distanceKm: 0,
      },
      {
        stationId: 20,
        arrivalTime: "08:15",
        departureTime: "08:20",
        day: 0,
        distanceKm: 50,
      },
      {
        stationId: 13,
        arrivalTime: "09:30",
        departureTime: null,
        day: 0,
        distanceKm: 90,
      },
    ],
    availableDays: [0, 1, 2, 3, 4], // Sunday through Thursday
    basePrice: 75,
    capacity: {
      firstClass: 40,
      secondClass: 180,
    },
  },
];

// Helper functions for working with train data
export const getTrainById = (id) => trains.find((train) => train.id === id);
export const getTrainsByLine = (lineId) =>
  trains.filter((train) => train.lineId === lineId);
export const getTrainsByType = (typeId) =>
  trains.filter((train) => train.typeId === typeId);
export const getTrainsByStation = (stationId) => {
  return trains.filter((train) =>
    train.stations.some((station) => station.stationId === stationId),
  );
};

// Get price between two stations
export const calculateTicketPrice = (
  trainId,
  fromStationId,
  toStationId,
  ticketClass = "secondClass",
) => {
  const train = getTrainById(trainId);
  if (!train) return null;

  const trainType = trainTypes.find((type) => type.id === train.typeId);
  const basePrice = train.basePrice;
  const classMultiplier =
    ticketClass === "firstClass" ? 1.5 : ticketClass === "sleeper" ? 2.5 : 1.0;

  // Find station indexes
  const fromIndex = train.stations.findIndex(
    (s) => s.stationId === fromStationId,
  );
  const toIndex = train.stations.findIndex((s) => s.stationId === toStationId);

  if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) return null;

  // Calculate distance ratio (simplified)
  const totalStations = train.stations.length - 1;
  const traveledStations = toIndex - fromIndex;
  const distanceRatio = traveledStations / totalStations;

  return Math.round(
    basePrice * distanceRatio * trainType.priceMultiplier * classMultiplier,
  );
};

// Format time function for displaying schedules
export const formatTime = (timeString) => {
  if (!timeString) return "";
  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`;
};

// Get travel duration between stations on a train
export const getTravelDuration = (trainId, fromStationId, toStationId) => {
  const train = getTrainById(trainId);
  if (!train) return null;

  const fromStation = train.stations.find((s) => s.stationId === fromStationId);
  const toStation = train.stations.find((s) => s.stationId === toStationId);

  if (
    !fromStation ||
    !toStation ||
    !fromStation.departureTime ||
    !toStation.arrivalTime
  ) {
    return null;
  }

  // Handle day differences
  const dayDiff = (toStation.day - fromStation.day) * 24 * 60; // convert to minutes

  const [fromHours, fromMinutes] = fromStation.departureTime
    .split(":")
    .map(Number);
  const [toHours, toMinutes] = toStation.arrivalTime.split(":").map(Number);

  const fromMinutesTotal = fromHours * 60 + fromMinutes;
  const toMinutesTotal = toHours * 60 + toMinutes;

  const durationMinutes = toMinutesTotal - fromMinutesTotal + dayDiff;

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return { hours, minutes, totalMinutes: durationMinutes };
};
