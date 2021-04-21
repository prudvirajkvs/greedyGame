import { MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import ApplicationsList from './ApplicationsList';
import Appstat_modal from './Appstat_modal';
import Header from './Header';
function RightPanel() {
  const [showModal, setShowModal] = useState(false);
  const modalOps = {
    show: () => {
      setShowModal(true);
    },
    hide: () => {
      setShowModal(false);
    },
    toggle: () => {
      setShowModal(!showModal);
    },
  };

  return (
    <div>
      <MDBRow className="sticky-top">
        <Header />
      </MDBRow>
      <MDBRow>
        <ApplicationsList modalOps={modalOps} />
      </MDBRow>
      <Appstat_modal showModal={showModal} modalOps={modalOps} />
    </div>
  );
}

export default RightPanel;
