import React from "react";
import { Link } from "react-router-dom";

const CompetitionListItem = (props) => {
  const {id, name, } = props.item;
  const {name: location} = props.item.area;

  return (
    <>
      <td>{id}</td>
      <td>
        <Link
          to={`/competition/${id}`}
        >
          {name}
        </Link>
      </td>
      <td>
        {location}
      </td>
    </>
  );
};

export default CompetitionListItem;
