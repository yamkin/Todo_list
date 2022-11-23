import React, { useState } from 'react';
import AddList from './components/AddList';
import List from './components/List/List';
import DB from './bd.json';

function App() {
  const updateDBData = DB.lists.map((item) => {
    item.color = DB.colors.filter((el) => el.id === item.colorId)[0].hex;
    return item;
  });

  const [lists, setLists] = useState(updateDBData);

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  const onRemoveList = (id) => {
    const newList = lists.filter((el) => el.id !== id);
    setLists(newList);
  };

  return (
    // <div className="container mx-auto">
    <div className=" md:mx-auto max-w-3xl grid grid-cols-[minmax(100px,_250px)_1fr]">
      <div className="bg-[#E5E5E5] text-sm h-[100vh] relative">
        <div className="mt-[45px] mb-[15px]">
          <List
            items={[
              {
                id: 1,
                icon: (
                  <svg
                    className="mr-[9px]"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.96 5.10001H5.74001C5.24321 5.10001 5.20001 5.50231 5.20001 6.00001C5.20001 6.49771 5.24321 6.90001 5.74001 6.90001H10.96C11.4568 6.90001 11.5 6.49771 11.5 6.00001C11.5 5.50231 11.4568 5.10001 10.96 5.10001ZM12.76 9.60001H5.74001C5.24321 9.60001 5.20001 10.0023 5.20001 10.5C5.20001 10.9977 5.24321 11.4 5.74001 11.4H12.76C13.2568 11.4 13.3 10.9977 13.3 10.5C13.3 10.0023 13.2568 9.60001 12.76 9.60001ZM5.74001 2.40001H12.76C13.2568 2.40001 13.3 1.99771 13.3 1.50001C13.3 1.00231 13.2568 0.600006 12.76 0.600006H5.74001C5.24321 0.600006 5.20001 1.00231 5.20001 1.50001C5.20001 1.99771 5.24321 2.40001 5.74001 2.40001ZM2.86001 5.10001H1.24001C0.743212 5.10001 0.700012 5.50231 0.700012 6.00001C0.700012 6.49771 0.743212 6.90001 1.24001 6.90001H2.86001C3.35681 6.90001 3.40001 6.49771 3.40001 6.00001C3.40001 5.50231 3.35681 5.10001 2.86001 5.10001ZM2.86001 9.60001H1.24001C0.743212 9.60001 0.700012 10.0023 0.700012 10.5C0.700012 10.9977 0.743212 11.4 1.24001 11.4H2.86001C3.35681 11.4 3.40001 10.9977 3.40001 10.5C3.40001 10.0023 3.35681 9.60001 2.86001 9.60001ZM2.86001 0.600006H1.24001C0.743212 0.600006 0.700012 1.00231 0.700012 1.50001C0.700012 1.99771 0.743212 2.40001 1.24001 2.40001H2.86001C3.35681 2.40001 3.40001 1.99771 3.40001 1.50001C3.40001 1.00231 3.35681 0.600006 2.86001 0.600006Z"
                      fill="#7C7C7C"
                    />
                  </svg>
                ),
                name: 'Все задачи',
              },
            ]}
            active
          />
        </div>

        <List onRemove={onRemoveList} items={lists} isRemoveble />
        {/* <div className="group mt-[25px] text-[#767676] hover:text-black ease-in duration-200 cursor-pointer"> */}
        <AddList onAdd={onAddList} colors={DB.colors} />
        {/* </div> */}
      </div>
      <div>
        <div className="max-w-[442px] m-auto grid">
          <div className="grid grid-cols-[max-content_max-content] gap-3.5 items-center mt-[52px]">
            <h1 className="text-[#64C4ED] font-bold text-[32px] self-center">Фронтенд</h1>
            <svg
              className="group cursor-pointer"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="group-hover:fill-black ease-in duration-200"
                d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z"
                fill="#DFDFDF"
              />
            </svg>
          </div>
          <span className="h-[1px] bg-[#F2F2F2] max-w-[100%] mb-[31px]"></span>
          <div className="grid grid-cols-[max-content_max-content] gap-[15px] items-center mb-5">
            <div className="w-5 h-5 rounded-full border-2 border-solid border-[#E8E8E8] cursor-pointer"></div>
            <p>Изучить JavaScript</p>
          </div>
          <div className="grid grid-cols-[max-content_max-content] gap-[15px] items-center mb-5">
            <div className="cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" fill="#4DD599" stroke="#4DD599" strokeWidth="2" />
                <path
                  d="M14.3 7.20001L8.79999 12.7L6.29999 10.2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>Изучить JavaScript</p>
          </div>
          <div className="grid grid-cols-[max-content_1fr_max-content] gap-[15px] items-center mb-5">
            <div className="cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" fill="#F2F2F2" stroke="#F2F2F2" strokeWidth="2" />
                <path
                  d="M14.3 7.20001L8.79999 12.7L6.29999 10.2"
                  stroke="#B3B3B3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>Изучить JavaScript Изучить JavaScript Изучиb</p>
            <span className="group cursor-pointer">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  className="group-hover:fill-red-600 ease-in duration-200"
                  d="M6.24741 5L9.73899 1.50842C9.9047 1.343 9.99791 1.11853 9.99812 0.884393C9.99832 0.650251 9.90551 0.425617 9.74009 0.259907C9.57468 0.0941973 9.35021 0.000986589 9.11606 0.000779811C8.88192 0.000573033 8.65729 0.0933872 8.49158 0.258804L5 3.75038L1.50842 0.258804C1.34271 0.0930948 1.11796 0 0.883613 0C0.649264 0 0.424514 0.0930948 0.258804 0.258804C0.0930948 0.424514 0 0.649264 0 0.883613C0 1.11796 0.0930948 1.34271 0.258804 1.50842L3.75038 5L0.258804 8.49158C0.0930948 8.65729 0 8.88204 0 9.11639C0 9.35074 0.0930948 9.57549 0.258804 9.7412C0.424514 9.90691 0.649264 10 0.883613 10C1.11796 10 1.34271 9.90691 1.50842 9.7412L5 6.24962L8.49158 9.7412C8.65729 9.90691 8.88204 10 9.11639 10C9.35074 10 9.57549 9.90691 9.7412 9.7412C9.90691 9.57549 10 9.35074 10 9.11639C10 8.88204 9.90691 8.65729 9.7412 8.49158L6.24741 5Z"
                  fill="#E3E3E3"
                />
              </svg>
            </span>
          </div>
          {/* <div className="grid grid-cols-[max-content_max-content] gap-[15px] items-center text-[#B4B4B4] group hover:text-black ease-in duration-200 cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="group-hover:stroke-black ease-in duration-200 cursor-pointer"
                d="M8 1V15"
                stroke="#B4B4B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:stroke-black ease-in duration-200 cursor-pointer"
                d="M1 8H15"
                stroke="#B4B4B4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Новая задача</p>
          </div> */}
          <div>
            <input
              className="mb-[16px] pt-[9px] pb-[9px] pl-[14px] rounded-[4px] w-[100%] border-2 border-solid border-[#EFEFEF] hover:border-2 hover:border-solid hover:border-[#525252] ease-out duration-200 focus:border-2 focus:border-solid focus:border-[#525252] outline-none"
              type="text"
              placeholder="Текст задачи"
            />
            <div>
              <button className="pl-[16px] pr-[16px] pt-[13px] pb-[13px] mr-[9px] text-white bg-[#4DD599] rounded-[4px]">
                Добавить задачу
              </button>
              <button className="pl-[16px] pr-[16px] pt-[13px] pb-[13px] text-[#9C9C9C] bg-[#F4F6F8] rounded-[4px]">
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
