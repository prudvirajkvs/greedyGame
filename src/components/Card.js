import React, { useEffect, useState } from 'react';
import axios from '../axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { actionTypes } from './../reducer';
import store from './../store';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';

export default function Card({ id, name, publisher, modalOps, ...rest }) {
  const [prev_stat, setPrev_stat] = useState([]);

  async function getstats(id) {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(`d734975d2aee62d197ef/${id}`)
        .then((data) => {
          resolve(data);
          // setPrev_stat
        })
        .catch((e) => alert(e.message));
    });
    return await promise;
  }
  useEffect(() => {
    getstats(id)
      .then((dt) => {
        setPrev_stat(dt);
      })
      .catch((err) => alert(err));
  }, [id]);

  const handleClick = () => {
    store.dispatch({
      type: actionTypes.SET_APP_NAME,
      name: name,
    });
    store.dispatch({
      type: actionTypes.SET_APP_ID,
      id: id,
    });
    modalOps.show();
  };
  const { sample_stats } = useSelector((state) => state);
  function numberFormat(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
      : Math.abs(Number(labelValue));
  }
  function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
      code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }

    return code;
  }
  return (
    <MDBCard {...rest} className="my-3 hover-shadow border">
      <MDBCardBody>
        <MDBCardTitle className="d-flex align-items-center ">
          <div>
            <div
              className="colorBox "
              style={{ backgroundColor: `${getColorCode()}` }}
            ></div>
          </div>
          <div className="ml-3">
            {name} <br />
            {/* Bootstrap classes work avvatledu e*/}
            <small className="text-muted ">{publisher}</small>
          </div>
        </MDBCardTitle>
        <MDBCardText>
          {prev_stat.data ? (
            <div className="d-flex p-2">
              <div className=" d-flex flex-column mx-3 align-items-center">
                <strong>revenue</strong>
                {prev_stat?.data[0]?.revenue}
              </div>
              <div className=" d-flex flex-column mx-3 align-items-center">
                <strong>adRequset</strong>
                {prev_stat?.data[0]?.revenue}
              </div>
              <div className=" d-flex flex-column mx-3 align-items-center">
                <strong>adResponse</strong>
                {prev_stat?.data[0]?.revenue}
              </div>
              <div className=" d-flex flex-column mx-3 align-items-center">
                <strong>impressions</strong>
                {prev_stat?.data[0]?.revenue}
              </div>
            </div>
          ) : (
            <span>loading.......!</span>
          )}
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className="d-flex justify-content-end">
        {/* <Link to={`/app/${id}`}> */}
        <MDBBtn color="info" onClick={handleClick}>
          <FaArrowRight />
        </MDBBtn>
        {/* </Link> */}
      </MDBCardFooter>
    </MDBCard>
  );
}
