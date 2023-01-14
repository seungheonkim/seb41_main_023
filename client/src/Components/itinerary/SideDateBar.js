import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {getCookie} from "../../Util/Cookies";
import moment from "moment";
import {da} from "date-fns/locale";

const LeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  background-color: white;
  border-right: 1px solid #e9ecef;
  height: calc(100% - 200px);
  position: fixed;
  z-index: 50;
  margin-top: 221px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DateBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;

  button {
    width: 100%;
    height: 50px;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom: 1px solid #e9ecef;
    background-color: white;
    cursor: pointer;
  }
`;

const SideDateBar = (props) => {
    const {itineraryId} = useParams();
    const [date, setDate] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/plans/${itineraryId}`,
            {
                headers: {
                    Authorization: getCookie('accessToken'),
                    withCredentials: true,
                }
            }
        )
            .then((res) => {
                const dateArr = res.data.data.planDates.map((element) => element.planDate);
                console.log(dateArr[0])
                const formattedDateArr = dateArr.map((date) => moment(date).format('M/D'));
                setDate(formattedDateArr);
            })
    }, [itineraryId, getCookie])

    return (
        <LeftSideBar>
            {date.map((element, idx) => (
                <DateBox key={idx}>
                    <button>{element}</button>
                </DateBox>
            ))}
        </LeftSideBar>
    )
};

export default SideDateBar;