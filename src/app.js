"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const manufacturers_json_1 = require("./manufacturers.json");
const motorcycles_json_1 = require("./motorcycles.json");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function displayMenu() {
    console.log("\n Welcome to the Motorcycle Data Viewer!");
    console.log("1. View all manufacturers");
    console.log("2. View all motorcycles");
    console.log("3. Filter manufacturer by ID");
    console.log("4. Filter motorcycle by ID");
    console.log("5. Exit");
    rl.question("\nPlease enter your choice: ", handleMenu);
}
function handleMenu(choice) {
    switch (choice.trim()) {
        case "1":
            displayAllManufacturers();
            break;
        case "2":
            displayAllMotorcycles();
            break;
        case "3":
            rl.question("\nPlease enter the manufacturer ID: ", filterManufacturerById);
            break;
        case "4":
            rl.question("\nPlease enter the motorcycle ID: ", filterMotorcycleById);
            break;
        case "5":
            console.log("\n Goodbye!");
            rl.close();
            break;
        default:
            console.log("\n Invalid choice! Please try again.");
            displayMenu();
    }
}
function displayAllManufacturers() {
    console.log("\n List of Motorcycle Manufacturers:\n");
    manufacturers_json_1.default.forEach((m) => {
        console.log(`- ${m.name} (ID: ${m.id})`);
    });
    displayMenu();
}
function displayAllMotorcycles() {
    console.log("\n List of Motorcycles:\n");
    motorcycles_json_1.default.forEach((m) => {
        console.log(`- ${m.name} (ID: ${m.id})`);
    });
    displayMenu();
}
function filterManufacturerById(input) {
    const id = parseInt(input.trim());
    const manufacturer = manufacturers_json_1.default.find((m) => m.id === id);
    if (!manufacturer) {
        console.log(`\n No manufacturer found with ID: ${id}`);
    }
    else {
        console.log(`
🏢 ${manufacturer.name} (ID: ${manufacturer.id})
  - Country: ${manufacturer.country}
  - Founded: ${manufacturer.founded}
  - Logo: ${manufacturer.logoUrl}
    `);
    }
    displayMenu();
}
function filterMotorcycleById(input) {
    const id = parseInt(input.trim());
    const motorcycle = motorcycles_json_1.default.find((m) => m.id === id);
    if (!motorcycle) {
        console.log(`\n No motorcycle found with ID: ${id}`);
    }
    else {
        console.log(`
 ${motorcycle.name} (ID: ${motorcycle.id})
  - Description: ${motorcycle.description}
  - Engine Capacity: ${motorcycle.engineCapacity}cc
  - Active: ${motorcycle.isActive ? "Yes" : "No"}
  - Release Date: ${motorcycle.releaseDate}
  - Category: ${motorcycle.category}
  - Features: ${motorcycle.features.join(", ")}
  - Manufacturer: ${motorcycle.manufacturer.name} (${motorcycle.manufacturer.country})
  - Image: ${motorcycle.imageUrl}
    `);
    }
    displayMenu();
}
// Start de applicatie
displayMenu();
