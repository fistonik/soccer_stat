import React, {useEffect} from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {fetchCompetitionSсhedule} from "../../store/api-actions";


const Matches = (props) => {

  console.log(props)

  return (
    <div className="container">

    </div>
  );
}

const mapStateToProps = (state) => ({
  competitionSchedule: state.competitionSchedule
});

export {Matches};

export default connect(mapStateToProps)(Matches);
