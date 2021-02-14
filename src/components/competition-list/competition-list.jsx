import React from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import {ActionCreator} from "../../store/action";
import CompetitionListItem from "../competition-list-item/competition-list-item";

const CompetitionList = (props) => {
  const {competitions, loadCompetition} = props;

  return (
    <div className="container">
      <Header/>
      <h1>Таблица ведущих европейских турниров</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Location</td>
          </tr>
          {
            competitions.competitions &&
            competitions.competitions.map((el) => (
              <tr key={el.id}>
                <CompetitionListItem
                  item={el}
                />
              </tr>
            ))
          }
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  competitions: state.competitions
});

const mapDispatchToProps = (dispatch) => ({
  loadCompetition() {
    dispatch(ActionCreator.loadCompetition());
  },
});

export {CompetitionList};
export default connect(mapStateToProps, mapDispatchToProps)(CompetitionList);
