import React, {useState} from "react";
import "./AppEngineCalender.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function AppEngineCalender() {
  const mon = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const [year, setYear] = useState(2021);
  const [monthIndex, setMonthIndex] = useState(0);  
  const [month, setMonth] = useState(mon[0]);
  const [date, setDates] = useState([]);
  const fetchDate = () =>{
  const d = new Date(year,monthIndex);
  let start = d.getDate();
  let startDay = d.getDay();
  let monthDates = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  monthDates = monthDates.map((ele,index)=>{
      if(index>startDay ){
        return ++start;
      }else{
        return 0;
      }
  })
  setDates(monthDates);
  }

  const incrementMonth = () =>{
    let newMonth = monthIndex;
    newMonth++;
    if(newMonth>12){
      setYear(1+year);
      setMonthIndex(()=>{
        return 0;
      });
    }else{
      setMonthIndex(newMonth);
    }
    setMonth(mon[monthIndex]);
    fetchDate();
  }

  const decrementMonth = () => {
    let newMonth = monthIndex;
    newMonth--;
    if(newMonth<0){
      setYear(year-1);
      setMonthIndex(11);
    }else{
      setMonthIndex(newMonth);
    }
    setMonth(mon[monthIndex]);
    fetchDate();
  }
  return (
    <div className="appEngineCalender">
      <div className="appEngineCalender__month">
        <div className="appEngineCalender__monthName">{month} {year}</div>
        <div className="appEngineCalender__monthNavigation">
          <button onClick={decrementMonth}>
            {" "}
            <ArrowBackIosIcon />{" "}
          </button>
          <button onClick={incrementMonth}>
            {" "}
            <ArrowForwardIosIcon />{" "}
          </button>
        </div>
      </div>
      <div className="appEngineCalender__weekDay">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thru</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
      <div className="appEngineCalender__weekDay">
        {date.map((date) => {
          return <p>{date}</p>;
        })}
      </div>
	  <div className="appEngineCalender__weekDay">
        {date.map((date) => {
          return <p>{date}</p>;
        })}
      </div>
	  <div className="appEngineCalender__weekDay">
        {date.map((date) => {
          return <p>{date}</p>;
        })}
      </div>
	  <div className="appEngineCalender__weekDay">
        {date.map((date) => {
          return <p>{date}</p>;
        })}
      </div>
	  <div className="appEngineCalender__weekDay">
        {date.map((date) => {
          return <p> {date} </p>;
        })}
      </div>
    </div>
  );
}

export default AppEngineCalender;
