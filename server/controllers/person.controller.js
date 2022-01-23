const Person = require("../models/person.model");

module.exports.index = (request, response) => {
  response.json({
    message: "hello world",
  });
};

module.exports.createPerson = (request, response) => {
  Person.create(request.body)
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

module.exports.getAllPeople = (request, response) => {
  Person.find({})
    .then((persons) => {
      console.log(persons);
      response.json(persons);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};
module.exports.getOnePerson = (request, response) => {
  Person.findOne({ _id: request.params.id })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};
