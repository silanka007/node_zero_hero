function getInfo(req, res) {
  const info = {
    name: "Paul Silanka",
    stack: "FullStack",
    tech: ["JavaScript", "Python"],
  };
  res.status(200).json(info);
}

function postInfo(req, res) {
  const body = req.body;
  return res.status(201).json(body);
}

module.exports = {getInfo, postInfo}
