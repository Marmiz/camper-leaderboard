import React, { Component } from 'react';
import $ from "jquery";
import TableRow from './TableRow.js'
import 'bulma/css/bulma.css'

class Table extends Component {

  // props
  constructor(props) {
    super(props);

    this.state = {leaderboard: [], selected: 'recent'};

    this.fetchTotal = this.fetchTotal.bind(this);
    this.fetchRecent = this.fetchRecent.bind(this);

  }

  // make the API call
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      dataType: 'json',
      success: function(data) {
        this.setState({leaderboard: data});
      }.bind(this)
    });
  }

  fetchRecent(e){
    e.preventDefault();
    this.setState({selected: 'recent'});
    this.fetchData();
  }

  fetchTotal(e){
    e.preventDefault();
    this.setState({selected: 'all'});
    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
      dataType: 'json',
      success: function(data) {
        this.setState({leaderboard: data});
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="section">
      <div className="container">
      <table className="table">
      <thead>
        <tr>
          <th></th>
          <th className="red">Name</th>
          <th><a href="#" onClick={this.fetchTotal}>Total Points<i className={"fa fa-caret-down " + (this.state.selected === 'all' ? 'show' : 'hide')}></i></a></th>
          <th><a href="#" onClick={this.fetchRecent}>Last 30 Days<i className={"fa fa-caret-down " + (this.state.selected === 'recent' ? 'show' : 'hide')}></i></a></th>
        </tr>
      </thead>
        <TableRow data={this.state.leaderboard} />
      </table>
      </div>
      </div>
    )
  }
}

export default Table;
