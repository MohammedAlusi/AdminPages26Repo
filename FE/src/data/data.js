// Shared data for the whole app

var drivers = [
  { id: 1, name: "Ahmad Al-Masri",  phone: "+962 79 123 4567", bus: "AAU-101" },
  { id: 2, name: "Khalid Hussein",  phone: "+962 78 234 5678", bus: "AAU-102" },
  { id: 3, name: "Mohammed Saleh", phone: "+962 77 345 6789", bus: "AAU-103" }
];

var buses = [
  { id: 1, number: "AAU-101", route: "7th Circle - AAU",  driver: "Ahmad Al-Masri",  status: "active" },
  { id: 2, number: "AAU-102", route: "Downtown - AAU",    driver: "Khalid Hussein",  status: "active" },
  { id: 3, number: "AAU-103", route: "Marka - AAU",       driver: "Mohammed Saleh", status: "inactive" }
];

var routes = [
  { id: 1, name: "7th Circle - AAU",  stops: ["7th Circle", "Sport City", "Sweifieh", "AAU Main Gate"] },
  { id: 2, name: "Downtown - AAU",    stops: ["Downtown", "Abdali", "Shmeisani", "AAU Main Gate"] },
  { id: 3, name: "Marka - AAU",       stops: ["Marka", "Gardens", "University Street", "AAU Main Gate"] }
];

export { drivers, buses, routes };
