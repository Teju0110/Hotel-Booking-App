import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination,setDestination]=useState("")
  const navigate=useNavigate()
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch =()=>{
    navigate("/hotels", {state : {destination, date ,options}})
  }

  return (
    <div className="header">
      <div className={
          type === "list" ? "header_Container listMode" : "header_Container"
        }>
        <div className="header_Items">
          <div className="headerItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" &&(

          <>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBTN">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className=" "
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerIcon"
              onClick={() => setOpenDate(!openDate)}
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faPerson}
              className="headerIcon"
              onClick={() => setOpenOptions(!openOptions)}
            />
            <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
              {`${options.adult} Adult . ${options.children} Children .  ${options.room} Room`}
              
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optonCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionBTN"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCount">{options.adult}</span>
                    <button
                      className="optionBTN"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optonCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionBTN"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCount">{options.children}</span>
                    <button
                      className="optionBTN"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optonCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionBTN"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCount">{options.room}</span>
                    <button
                      className="optionBTN"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBTN" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>
    )
    }
      </div>
    </div>
  );
};

export default Header;
