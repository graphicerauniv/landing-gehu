//read stuff.json
import fs from "fs";
const stuff = JSON.parse(
    fs.readFileSync("./countries+state+cities.json", "utf8"),
);

const bangladesh = stuff.find((item) => item.name === "Sri Lanka");

console.log(
    bangladesh.states.map((state) => ({
        state: state.name.trim(),
        cities: state.cities.map((city) => city.name.trim()),
    })),
);
