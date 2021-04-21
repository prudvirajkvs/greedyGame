import React, { useEffect } from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';
import axios from '../axios';
import store from '../store';
import { actionTypes } from '../reducer';
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

function AppStats() {
  const { app_stats, app_name, app_id } = useSelector((state) => state);
  const history = useHistory();
  //   const { params } = useRouteMatch();
  useEffect(() => {
    getAppStats(app_id);
  }, [app_id]);
  function getAppStats(id) {
    if (!id) return;
    axios
      .get(`d734975d2aee62d197ef/${id}`)
      .then((data) => {
        store.dispatch({
          type: actionTypes.SET_APP_STATS,
          stats: data,
        });
      })
      .catch((err) => alert(err.message));
  }

  return (
    <MDBContainer fluid className="m-0 p-0 bg-light">
      {/* <div className="statHeader backgroundSVG text-light  text-capitalize">
        head name
      </div> */}
      <div className="topHead d-flex m-4 justify-content-between">
        {/* <button
          onClick={(e) => history.goBack()}
          className="btn btn-floating btn-info  "
        >
          <FaArrowLeft />
        </button> */}
        <h2 className="ml-3">{app_name}</h2>
      </div>

      <MDBTable striped className="border rounded">
        <MDBTableHead dark>
          <tr>
            <th>Date</th>
            <th>Revenue</th>
            <th>Ad Request</th>
            <th>Ad Response</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>Render Rate</th>
          </tr>
        </MDBTableHead>
        {app_stats.data ? (
          <MDBTableBody>
            {app_stats.data.map((item, dx) => {
              return (
                <tr key={dx}>
                  <td>{item.date}</td>
                  <td>{item.revenue}</td>
                  <td>{item.adRequest}</td>
                  <td>{item.adResponse}</td>
                  <td>{item.impressions}</td>
                  <td>{item.clicks}</td>
                  <td>{item.renderRate ? item.renderRate : '85%'} </td>
                </tr>
              );
            })}
          </MDBTableBody>
        ) : (
          <span>loading........!</span>
        )}
      </MDBTable>
    </MDBContainer>
  );
}

export default AppStats;
