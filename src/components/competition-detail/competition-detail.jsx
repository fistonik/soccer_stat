import React, {useEffect} from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import {connect} from "react-redux";
import {fetchCompetitionSсhedule} from "../../store/api-actions";
import Matches from "../matches/matches";


const CompetitionDetail = (props) => {

  const {id} = props.match.params;
  const {loadCompetitionSchedule, competitionSchedule} = props;

  loadCompetitionSchedule(id);

  return (
    <div className="container">
      <Header/>
      <h1>Detail page competition</h1>
      <Matches/>
      <Footer/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  competitionSchedule: state.competitionSchedule
});

const mapDispatchToProps = (dispatch) => ({
  loadCompetitionSchedule(id) {
    dispatch(fetchCompetitionSсhedule(id));
  }
});

export {CompetitionDetail};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionDetail);
