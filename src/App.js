import React from 'react';
import all_task_icon from './assets/icons/all_task_icon.svg';

function App() {
  return (
    // <div className="container mx-auto">
    <div className=" md:mx-auto max-w-3xl grid grid-cols-[minmax(100px,_200px)_1fr]">
      <div className="bg-[#E5E5E5] text-sm h-[100vh] relative">
        <div className="p-2.5 flex items-center mx-auto mt-[60px] mb-[27px] w-[160px] h-[37px] rounded cursor-pointer hover:bg-white ease-in duration-200 hover:shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
          <img className="mr-2" src={all_task_icon} alt="" />
          <p>Все задачи</p>
        </div>
        <ul className="mb-[37px]">
          <li className="p-2.5 mx-auto flex justify-between items-center w-[160px] h-[37px] rounded cursor-pointer hover:bg-white ease-in duration-200 hover:shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex items-center">
              <div className="flex mr-2.5">
                <span className="rounded-full w-2.5 h-2.5 bg-orange-700"></span>
              </div>
              <p href="#">Покупки</p>
            </div>
            <span className="group">
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
          </li>
        </ul>
        <div className="grid grid-cols-[max-content_max-content] gap-2.5 ml-[30px] mb-[179px] items-center text-[#767676] group hover:text-black ease-in duration-200 cursor-pointer">
          <svg
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
          <p className=" ">Добавить папку</p>
        </div>
        <div className="grid grid-rows-[1fr_1fr_1fr] absolute bottom-12 left-[30px] w-[236px] h-[148px] shadow-[0_6px_10px_rgba(0,0,0,0.3)] rounded-[10px] p-[18px] bg-white">
          <span className="absolute top-[-8px] right-[-8px] cursor-pointer">
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
          </span>
          <input
            className=" pl-[11px] rounded-[4px] w-[100%] border-2 border-solid border-[#EFEFEF] hover:border-2 hover:border-solid hover:border-[#525252] ease-out duration-200 focus:border-2 focus:border-solid focus:border-[#525252] outline-none"
            type="text"
            placeholder="Название папки"
          />
          <div className="grid items-center grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[5px]">
            <div className="w-5 h-5 rounded-full bg-[#C9D1D3] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
            <div className="w-5 h-5 rounded-full bg-[#42B883] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
            <div className="w-5 h-5 rounded-full bg-[#64C4ED] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
            <div className="w-5 h-5 rounded-full bg-[#FFBBCC] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
            <div className="w-5 h-5 rounded-full bg-[#B6E6BD] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
            <div className="w-5 h-5 rounded-full bg-[#C355F5] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
            <div className="w-5 h-5 rounded-full bg-[#09011A] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
            <div className="w-5 h-5 rounded-full bg-[#FF6464] hover:border-2 hover:border-solid hover:border-[#525252] cursor-pointer ease-out duration-200"></div>
          </div>
          <button className="w-[100%] text-white bg-[#4DD599] rounded-[4px]" href="#">
            Добавить
          </button>
        </div>
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
          <div className="grid grid-cols-[max-content_max-content] gap-[15px] items-center text-[#B4B4B4] group hover:text-black ease-in duration-200 cursor-pointer">
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
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
