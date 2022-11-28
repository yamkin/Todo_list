import React from 'react';

function Badge({ color, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`${
        active === color.id && 'border-2 border-solid border-[#525252]'
      } w-5 h-5 rounded-full hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200`}
      style={{ backgroundColor: `${color.hex}` }}></div>
  );
}

export default Badge;
