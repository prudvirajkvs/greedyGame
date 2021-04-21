import React, { useEffect, useState } from 'react';
// import { Grid } from '@material-ui/core';
import './App.css';
// import axios from 'axios';
import axios from './axios';
import LeftPanelFilters from './components/LeftPanelFilters';
import RightPanel from './components/RightPanel';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import store from './store';
import { Route } from 'react-router-dom';
import { actionTypes } from './reducer';
import AppStats from './components/AppStats';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  //app-list api:https://api.npoint.io/adf6676a313fa01f787d
  // stats-api:https://api.npoint.io/d734975d2aee62d197ef /1 .../2.../3.....10

  const [color, setColor] = useState('');

  useEffect(() => {
    axios
      .get('/adf6676a313fa01f787d')
      .then((res) => res.data)
      .then((data) => {
        store.dispatch({
          type: actionTypes.SET_APPS_LIST,
          list: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // let appData;
  // if(appInfo)
  // {
  //  appData= appInfo.map(data =><table> <tr>
  //     <td>{data.id}</td>
  //     <td>{data.appName}</td>
  //     <td>{data.publisherName}</td>
  //    </tr> </table> )
  // } else{
  //   appData = 'loading.........'
  // }

  return (
    <>
      <MDBContainer fluid>
        <Route path="/" exact>
          <MDBRow>
            <MDBCol className="left-stick">
              <LeftPanelFilters />
            </MDBCol>
            <MDBCol>
              <RightPanel />
            </MDBCol>
          </MDBRow>
        </Route>

        <Route path="/app/:id" exact>
          <AppStats />
        </Route>
      </MDBContainer>
    </>
  );
}

export default App;
