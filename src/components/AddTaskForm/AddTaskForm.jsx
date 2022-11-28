import axios from 'axios';
import React, { useState } from 'react';

const AddTaskForm = ({ list, onAddTask }) => {
  const [visibleAddTask, setVisibleAddTask] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleFormVisible = () => {
    setVisibleAddTask(!visibleAddTask);
    setInputValue('');
  };

  const addTask = () => {
    if (!inputValue) {
      alert(`Пустое поле. Напишите текст задачи`);
      return;
    }
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false,
    };
    setIsLoading(true);
    axios
      .post('http://localhost:3001/tasks', obj)
      .then(({ data }) => {
        onAddTask(list.id, data);
        toggleFormVisible();
      })
      .catch(() => alert('Ошибка при добавлении задачи'))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {visibleAddTask ? (
        <div>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="mb-[16px] pt-[9px] pb-[9px] pl-[14px] rounded-[4px] w-[100%] border-2 border-solid border-[#EFEFEF] hover:border-2 hover:border-solid hover:border-[#525252] ease-out duration-200 focus:border-2 focus:border-solid focus:border-[#525252] outline-none"
            type="text"
            placeholder="Текст задачи"
          />
          <div>
            <button
              disabled={isLoading || !inputValue}
              onClick={addTask}
              className="pl-[16px] pr-[16px] pt-[13px] pb-[13px] mr-[9px] text-white bg-[#4DD599] rounded-[4px] hover:bg-[#3fd192] active:bg-[#3fd192] ease-out duration-200 disabled:text-white disabled:bg-[#e0dfdf]">
              {isLoading ? 'Добавление...' : 'Добавить задачу'}
            </button>
            <button
              onClick={toggleFormVisible}
              className="pl-[16px] pr-[16px] pt-[13px] pb-[13px] text-[#9C9C9C] bg-[#F4F6F8] rounded-[4px] hover:bg-[#ebedee] active:bg-[#ebedee] ease-out duration-200">
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={toggleFormVisible}
          className="grid grid-cols-[max-content_max-content] gap-[18px] items-center text-[#B4B4B4] group hover:text-black ease-in duration-200 cursor-pointer">
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
      )}
    </>
  );
};

export default AddTaskForm;
