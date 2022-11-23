import React from 'react';

function AddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white bg-[#4DD599] rounded-[4px] hover:bg-[#3fd192] active:bg-[#3fd192] ease-out duration-200"
      href="#">
      Добавить
    </button>
  );
}

export default AddButton;
