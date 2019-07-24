import React from 'react';

const months = ["January","February","March","April","May", "June","July","August","September","October","November","December"]

class App extends React.Component {
  constructor(props){
    super(props);
    const d = new Date()
    this.state = {
      year: d.getFullYear(),
      month: months[d.getMonth()],
      day: d.getDay(),
      hour: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds()
    }
  }

  updateClock = ()=>{
    const d = new Date()
    this.setState({
      year: d.getFullYear(),
      month: months[d.getMonth()],
      day: d.getDay(),
      hour: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds()
    })
  }
  render(){
    const {year, month, day, hour, minutes, seconds} = this.state;
    return (
      <div class="container">
        <div class="header-section">
            <div class="header-frame">
              <span>{month} {day}, {year} {hour}:{minutes}:{seconds}</span>
              <br/>
              <br/>
              <button onClick={this.updateClock}>Refresh</button>
            </div>
            <br/>
        </div>
    </div>
      )
  }
}

export default App;
