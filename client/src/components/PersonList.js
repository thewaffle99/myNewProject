import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
const PersonList = (props) => {
  const { people, setPeople } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {people.map((person, index) => {
        return (
          <div key={index}>
            <p>{person.lastName}</p>
            <p>{person.firstName}</p>
            <Link to={`api/people/${person._id}`}>
              {" "}
              {person.firstName}'s Page!{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default PersonList;
