"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const manufacturers_json_1 = __importDefault(require("../data/manufacturers.json"));
const sportbikes_json_1 = __importDefault(require("../data/sportbikes.json"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function displayMenu() {
    console.log("\n🏍️ Welcome to the Motorcycle Data Viewer!");
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
            console.log("\n👋 Goodbye!");
            rl.close();
            break;
        default:
            console.log("\n❌ Invalid choice! Please try again.");
            displayMenu();
    }
}
function displayAllManufacturers() {
    console.log("\n🏢 List of Motorcycle Manufacturers:\n");
    manufacturers_json_1.default.forEach((m) => {
        console.log(`- ${m.name} (ID: ${m.id})`);
    });
    displayMenu();
}
function displayAllMotorcycles() {
    console.log("\n🏍️ List of Motorcycles:\n");
    sportbikes_json_1.default.forEach((m) => {
        console.log(`- ${m.name} (ID: ${m.id})`);
    });
    displayMenu();
}
function filterManufacturerById(input) {
    const id = parseInt(input.trim());
    const manufacturer = manufacturers_json_1.default.find((m) => m.id === id);
    if (!manufacturer) {
        console.log(`\n❌ No manufacturer found with ID: ${id}`);
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
    const motorcycle = sportbikes_json_1.default.find((m) => m.id === id);
    if (!motorcycle) {
        console.log(`\n❌ No motorcycle found with ID: ${id}`);
    }
    else {
        console.log(`
🏍️ ${motorcycle.name} (ID: ${motorcycle.id})
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
