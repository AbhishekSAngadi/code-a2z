// converter.ts
import * as fs from "fs";
import * as yaml from "js-yaml";

// Get command-line argument
const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error("Usage: ts-node converter.ts <file.json>");
    process.exit(1);
}

const filePath = args[0];

// Read JSON file
let jsonData: any;
try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    jsonData = JSON.parse(fileContent);
} catch (err) {
    console.error(`Error reading or parsing JSON file: ${err}`);
    process.exit(1);
}

// Convert to YAML
try {
    const yamlData = yaml.dump(jsonData);
    console.log(yamlData);
} catch (err) {
    console.error(`Error converting JSON to YAML: ${err}`);
    process.exit(1);
}
