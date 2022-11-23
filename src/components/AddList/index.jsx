import React, { useState } from 'react';
import List from '../List/List';
import AddButton from '../AddButton';
import Badge from '../Badge';

function AddList({ colors, onAdd }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedBadgeColor, setSelectedBadgeColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const onClose = () => {
    setInputValue('');
    setSelectedBadgeColor(colors[0].id);
    setVisiblePopup(false);
  };

  const addList = () => {
    if (!inputValue) {
      alert(`поле пустое`);
      return;
    }
    const color = colors.filter((c) => c.id === selectedBadgeColor)[0].hex;
    onAdd({
      id: Date.now(),
      name: inputValue,
      color: color,
    });
    onClose();
  };

  return (
    <>
      <div className="group mt-[25px] text-[#767676] hover:text-black ease-in duration-200 cursor-pointer">
        <List
          onClick={() => setVisiblePopup(true)}
          items={[
            {
              id: 1,
              icon: (
                <svg
                  className="mr-[9px]"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="#767676"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="group-hover:stroke-black ease-in duration-200 cursor-pointer"
                    d="M6 1V11"
                    stroke="#767676"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="group-hover:stroke-black ease-in duration-200 cursor-pointer"
                    d="M1 6H11"
                    stroke="#767676"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              name: 'Добавить список',
            },
          ]}
          addList
        />
      </div>
      {visiblePopup && (
        <div className="grid grid-rows-[1fr_1fr_1fr] absolute bottom-12 left-[30px] w-[236px] h-[148px] shadow-[0_6px_10px_rgba(0,0,0,0.3)] rounded-[10px] p-[18px] bg-white">
          <i onClick={onClose} className="absolute top-[-8px] right-[-8px] cursor-pointer">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.315 0C4.62737 0 0 4.62737 0 10.315C0 16.0026 4.62737 20.63 10.315 20.63C16.0026 20.63 20.63 16.0026 20.63 10.315C20.63 4.62737 16.0026 0 10.315 0ZM14.0497 12.928C14.1265 13.0009 14.1879 13.0885 14.2303 13.1855C14.2727 13.2826 14.2952 13.3872 14.2966 13.4931C14.298 13.599 14.2781 13.7041 14.2382 13.8022C14.1983 13.9003 14.1392 13.9894 14.0643 14.0643C13.9894 14.1392 13.9003 14.1983 13.8022 14.2382C13.7041 14.2781 13.599 14.298 13.4931 14.2966C13.3872 14.2952 13.2826 14.2727 13.1855 14.2303C13.0885 14.1879 13.0009 14.1265 12.928 14.0497L10.315 11.4373L7.70203 14.0497C7.55202 14.1922 7.35226 14.2705 7.14536 14.2679C6.93846 14.2652 6.74077 14.1819 6.59446 14.0355C6.44814 13.8892 6.36477 13.6915 6.36212 13.4846C6.35947 13.2777 6.43775 13.078 6.58028 12.928L9.19275 10.315L6.58028 7.70203C6.43775 7.55202 6.35947 7.35226 6.36212 7.14536C6.36477 6.93846 6.44814 6.74077 6.59446 6.59446C6.74077 6.44814 6.93846 6.36477 7.14536 6.36212C7.35226 6.35947 7.55202 6.43775 7.70203 6.58028L10.315 9.19275L12.928 6.58028C13.078 6.43775 13.2777 6.35947 13.4846 6.36212C13.6915 6.36477 13.8892 6.44814 14.0355 6.59446C14.1819 6.74077 14.2652 6.93846 14.2679 7.14536C14.2705 7.35226 14.1922 7.55202 14.0497 7.70203L11.4373 10.315L14.0497 12.928Z"
                fill="#5C5C5C"
              />
            </svg>
          </i>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className=" pl-[11px] rounded-[4px] w-[100%] border-2 border-solid border-[#EFEFEF] hover:border-2 hover:border-solid hover:border-[#525252] ease-out duration-200 focus:border-2 focus:border-solid focus:border-[#525252] outline-none"
            type="text"
            placeholder="Название папки"
          />
          <div className="grid items-center grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[5px]">
            {colors.map((color) => (
              <Badge
                onClick={() => setSelectedBadgeColor(color.id)}
                key={color.id}
                color={color}
                active={selectedBadgeColor}
              />
            ))}
          </div>
          <AddButton onClick={addList} className="w-[100%]}" />
        </div>
      )}
    </>
  );
}

export default AddList;
