import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function MyFooter(props) {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} EpiBooks
      </div>
    </MDBFooter>
  );
}

export default MyFooter;