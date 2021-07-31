const parse = require("csv-parse");
const fs = require("fs");
const path = require("path");

const output = [];
// Create the parser
const parser = parse({
  comment: "#",
  columns: true,
});
// Use the readable stream api
parser
  .on("readable", function () {
    let record;
    while ((record = parser.read())) {
      output.push(record);
    }
  })
  .on("error", function (err) {
    console.error(err.message);
  })
  .on("end", function () {
    console.log({ output });
  });

// Write data to the stream
fs.createReadStream(path.resolve('../data/kepler_data.csv'))
  .on("data", (chunk) => {
    parser.write(chunk.toString());
  })
  .on("end", () => {
    parser.end();
  });
