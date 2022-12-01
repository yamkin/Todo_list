import axios from 'axios';
import React from 'react';

import Pencil from '../../assets/icons/pencil.svg';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Task from "./Task";

function Tasks({ list, onEditTitle, onAddTask, withoutEmpty, onRemoveTask, onEditTask }) {

  const editTitle = () => {
    const newTitle = window.prompt('Название заголовка', list.name);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
    }
    axios.patch('http://localhost:3001/lists/' + list.id, { name: newTitle }).catch(() => {
      alert('Не удалось обновить название списка');
    });
  };

  return (
    <div className="pl-2.5 pr-2.5 max-w-[442px] m-auto grid">
      <div className="group grid grid-cols-[max-content_max-content] gap-3.5 items-center mt-[52px]">
        <h1
          className="font-bold text-[32px] self-center cursor-pointer"
          style={{ color: `${list.color.hex}` }}>
          {list.name}
        </h1>
        <img
          onClick={editTitle}
          className="opacity-0 group-hover:opacity-20 hover:!opacity-100 ease-in duration-200 cursor-pointer"
          src={Pencil}
          alt="pencil icon"
        />
      </div>
      <span className="h-[1px] bg-[#F2F2F2] max-w-[100%] mb-[31px]"></span>
      {!withoutEmpty && list && !list.tasks.length && (
        <h2 className="text-[#C9D1D3] font-bold text-[20px] leading-10">Задачи отсутствуют</h2>
      )}
      {list.tasks.map((task) => (
          <Task list={list} onEdit={onEditTask} onRemove={onRemoveTask} {...task} key={task.id}/>
      ))}
      <AddTaskForm key={list.id} list={list} onAddTask={onAddTask} />
    </div>
  );
}

export default Tasks;
