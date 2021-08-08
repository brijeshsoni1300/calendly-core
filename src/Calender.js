import "./Calender.css";
import React, { useState } from "react";
import moment from "moment";
import "./AppEngineCalender.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Calender() {
  const [dateObject, setDateObject] = useState(moment());
  const [currMonth, setCurrMonth] = useState(moment().month());

  let firstDayOfMonth = () => {
    const date = dateObject;
    let firstDay = moment(date).startOf("month").format("d");
    return firstDay;
  };

  let blank = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blank.push(<td className="Calender__datesblank">{" "}</td>);
  }


  let weekdayshortname = moment.weekdaysShort().map((day) => {
    return (
      <th key={day} className="Calender__weekDay">
        {day}
      </th>
    );
  });

  let daysInMonth = [];
  for (let d = 1; d <= dateObject.daysInMonth(); d++) {
    let currentDay = d == dateObject.format("D") ? "Calender__today" : "";
    daysInMonth.push(
      <td key={d} className={`Calender__dates ${currentDay}`}>
        {d}
      </td>
    );
  }

  var totalSlots = [...blank, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) {
      // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr>{d}</tr>;
  });

  const incrementMonth = () => {
	setDateObject(() => {
		let year = dateObject.year();
		if(currMonth==11){
			setCurrMonth(0)
			year++;
		}else{
			setCurrMonth(currMonth+1)
		}
		let monthNo = currMonth
		let tempdate
		tempdate = moment(tempdate).set({"year": year, "month": monthNo});
		return tempdate
	})
  };

  const decrementMonth = () => {
	setDateObject(() => {
		let year = dateObject.year();
		if(currMonth==0){
			setCurrMonth(11)
			year--;
		}else{
			setCurrMonth(currMonth-1)
		}
		let monthNo = currMonth
		let tempdate
		tempdate = moment(tempdate).set({"year": year, "month": monthNo});
		return tempdate
	})


  };

  return (
    <div className="Calender">
      <div className="appEngineCalender__month">
        <div className="appEngineCalender__monthName">
          {dateObject.format("MMMM")} {dateObject.format("yyyy")}
        </div>
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
      <table className="Calender__day">
        <thead>
          <tr>{weekdayshortname}</tr>
        </thead>
        <tbody>{daysinmonth}</tbody>
      </table>
    </div>
  );
}

export default Calender;
