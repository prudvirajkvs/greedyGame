import React from 'react';
import { useSelector } from 'react-redux';

import { MDBBtn, MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import background from './../img/asset1.svg';
import btn1 from './../img/icon1.svg';
import btn2 from './../img/icon2.svg';
import btn3 from './../img/icon3.svg';
import btn4 from './../img/icon4.svg';
function LeftPanelFilters() {
  const backgroundStyle = {
    width: '100%',
    objectFit: 'contain',
  };
  return (
    <div className="w-100  d-flex flex-column align-items-center backgroundSVG sticky-top">
      <div className="w-100 ">
        <img src={background} alt="" style={backgroundStyle} />
      </div>

      <div className="w-100 p-4 backgroundBTN">
        <span className="text-white display-6 m-2">Revenue Optimisation</span>
        <MDBRow>
          <MDBCol>
            {/* <MDBBtn>
              <img src={btn1} alt="" />
            </MDBBtn> */}
            {/* <img src={btn1} alt="" /> */}
            <button className="btn text-capitalize w-100  h-100 text-center text-white d-flex flex-column">
              <img src={btn1} alt="" />
              fill rate
            </button>
          </MDBCol>
          <MDBCol>
            {/* <MDBBtn>
              <img src={btn2} alt="" />
            </MDBBtn> */}
            <button className="btn text-capitalize  w-100 h-100 text-center text-white d-flex flex-column">
              <img src={btn2} alt="" />
              improve CTR
            </button>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-3">
          <MDBCol>
            {/* <MDBBtn>
              <img src={btn3} alt="" />
            </MDBBtn> */}
            <button className="btn text-capitalize  w-100 h-100 text-center text-white d-flex flex-column">
              <img src={btn3} alt="" />
              refresh rate
            </button>
          </MDBCol>
          <MDBCol>
            {/* <MDBBtn>
              <img src={btn4} alt="" />
            </MDBBtn> */}
            <button className="btn text-capitalize  w-100 h-100  text-center text-white d-flex flex-column">
              <img src={btn4} alt="" />
              quick integration
            </button>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default LeftPanelFilters;
