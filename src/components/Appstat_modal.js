import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';
import AppStats from './AppStats';

export default function Appstat_modal(props) {
  const { title, showModal = false, modalOps } = props;
  const { app_name } = useSelector((state) => state);
  return (
    <MDBModal
      show={showModal}
      getOpenState={(e) => {
        if (e) return modalOps.show();
        return modalOps.hide();
      }}
    >
      <MDBModalDialog size="xl">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{app_name}</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={modalOps.hide}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <AppStats />
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
