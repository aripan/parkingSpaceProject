const cities = [
  {
    _id: "1",
    name: "Berlin",
    totalSpace: 400,
    occupied: 250,
    available: 150,
    // occupancy1: [100, 95],
    // occupancy2: [180, 95],
    // occupancy3: [260, 150],
    // occupancy4: [300, 186],
    // occupancy5: [220, 174],
    // occupancy6: [120, 114],
    // occupancy7: [100, 74],

    hourlyOccupancy: [
      { occupancy1: 100, occupancy_avg1: 95 },
      { occupancy2: 180, occupancy_avg2: 95 },
      { occupancy3: 260, occupancy_avg3: 150 },
      { occupancy4: 300, occupancy_avg4: 186 },
      { occupancy5: 220, occupancy_avg5: 174 },
      { occupancy6: 120, occupancy_avg6: 114 },
      { occupancy7: 100, occupancy_avg7: 74 },
    ],
  },
  {
    _id: "2",
    name: "Krefeld",
    totalSpace: 350,
    occupied: 220,
    available: 130,
  },
  {
    _id: "3",
    name: "Stuttgart",
    totalSpace: 450,
    occupied: 350,
    available: 100,
  },
  {
    _id: "4",
    name: "Frankfurt",
    totalSpace: 400,
    occupied: 250,
    available: 150,
  },
  {
    _id: "5",
    name: "Hannover",
    totalSpace: 300,
    occupied: 250,
    available: 50,
  },
  {
    _id: "6",
    name: "Munich",
    totalSpace: 300,
    occupied: 150,
    available: 150,
  },
];

export default cities;
