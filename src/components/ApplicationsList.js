import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';
export default function ApplicationsList({ modalOps }) {
  const { apps_list } = useSelector((state) => state);
  console.log({ modalOps });
  return (
    <div className="app_list">
      {apps_list?.map((item, idx) => (
        <Card
          key={idx}
          id={item.id}
          name={item.appName}
          publisher={item.publisherName}
          modalOps={modalOps}
        />
      ))}
    </div>
  );
}
