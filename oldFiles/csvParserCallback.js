const parse = require("csv-parse");
const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");

const PlanetsFoundEvent = new EventEmitter()

const file = fs.readFileSync(path.resolve("../data/kepler_data.csv"));

const getInhabitablePlanets = (file) => {
  const result = [];
  const isHabitablePlanet = (planet) => {
    return (
      planet["koi_disposition"] === "CONFIRMED" &&
      planet["koi_insol"] > 0.36 &&
      planet["koi_insol"] < 1.11 &&
      planet["koi_prad"] < 1.6
    );
  };
  parse(
    file,
    {
      comment: "#",
      columns: true,
    },
    (err, data) => {
      data.forEach((planet) => {
        if (isHabitablePlanet(planet)) {
          result.push(planet);
        }
      });
      PlanetsFoundEvent.emit('found', result)
    }
  );
};
getInhabitablePlanets(file)


PlanetsFoundEvent.on('found', planets => {
  console.log({planets})
})
