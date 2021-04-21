import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';
export default function Header() {
  const handleClick = (e) => {
    console.log('clicked settings');
  };

  return (
    <div className="bg-light w-100 shadow d-flex justify-content-between">
      <span className=" text-dark p-3" role="button">
        Apps
      </span>
      <span className="p-3">
        <BsFillGearFill role="button" onClick={handleClick} />
      </span>
    </div>
  );
}
