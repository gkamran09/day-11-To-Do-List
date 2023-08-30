import React from 'react';
import DoneList from '../components/DoneList';

const DonePage = () => {
  return (
    <div className="page-container">
      <h1>Done Items</h1>
      <DoneList />
    </div>
  );
};

export default DonePage;