import React from "react";

import Pencil from '../../assets/icons/pencil.svg';

const Task = ({ id, text, completed, onRemove, onEdit, list, onComplete }) => {

    const onChangeCheckBox = e => {
        console.log(list.id, id, e.target.checked)
        onComplete(list.id, id, e.target.checked)
    }

   return (
        <div
            key={id}
            className="grid grid-cols-[max-content_1fr] gap-[15px] items-center mb-5">
            <div className="group">
                <input
                    onChange={onChangeCheckBox}
                    className="peer hidden"
                    id={`task-${id}`}
                    checked={completed}
                    type="checkbox"
                />
                <label
                    className="
                                peer/label
                                group-hover:bg-[#F2F2F2]
                                group-hover:border-2
                                group-hover:border-solid
                                group-hover:border-[#F2F2F2]
                                flex
                                justify-center
                                items-center
                                peer-checked:bg-[#4DD599]
                                peer-checked:border-2
                                peer-checked:border-solid
                                peer-checked:border-[#4DD599]
                                w-5
                                h-5
                                rounded-full
                                border-2
                                border-solid
                                border-[#E8E8E8]
                                cursor-pointer
                                inline-block
                              "
                    htmlFor={`task-${id}`}>
                    <svg
                        className="
                                    group-hover:opacity-100
                                    relative
                                    left-[0.5px]
                                  "
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className="
                                        group-hover:stroke-[#b2b2b2]
                                        stroke-[#f2f2f2]
                                        ease-in-out
                                      "
                            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                            stroke="#000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </label>
            </div>
            <div className="grid grid-cols-[1fr_max-content_max-content] gap-[15px] items-center group/item">
                {/* <input className="cursor-pointer text-ellipsis" title={task.text} value={task.text} /> */}
                <p className="cursor-pointer text-ellipsis" title={text}>
                    {text}
                </p>
                <img onClick={() => onEdit(list.id, {id, text})} className="group-hover/item:opacity-20 hover:!opacity-100 cursor-pointer opacity-0 ease-in duration-200" src={Pencil} alt="Pencil"/>
                <i onClick={() => onRemove(list.id, id)} className="group-hover/item:opacity-20 hover:!opacity-100 cursor-pointer opacity-0 ease-in duration-200">
                    <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className="group-hover/item:fill-black ease-in duration-200"
                            d="M6.24741 5L9.73899 1.50842C9.9047 1.343 9.99791 1.11853 9.99812 0.884393C9.99832 0.650251 9.90551 0.425617 9.74009 0.259907C9.57468 0.0941973 9.35021 0.000986589 9.11606 0.000779811C8.88192 0.000573033 8.65729 0.0933872 8.49158 0.258804L5 3.75038L1.50842 0.258804C1.34271 0.0930948 1.11796 0 0.883613 0C0.649264 0 0.424514 0.0930948 0.258804 0.258804C0.0930948 0.424514 0 0.649264 0 0.883613C0 1.11796 0.0930948 1.34271 0.258804 1.50842L3.75038 5L0.258804 8.49158C0.0930948 8.65729 0 8.88204 0 9.11639C0 9.35074 0.0930948 9.57549 0.258804 9.7412C0.424514 9.90691 0.649264 10 0.883613 10C1.11796 10 1.34271 9.90691 1.50842 9.7412L5 6.24962L8.49158 9.7412C8.65729 9.90691 8.88204 10 9.11639 10C9.35074 10 9.57549 9.90691 9.7412 9.7412C9.90691 9.57549 10 9.35074 10 9.11639C10 8.88204 9.90691 8.65729 9.7412 8.49158L6.24741 5Z"
                            fill="#dc2626"
                        />
                    </svg>
                </i>
            </div>
        </div>)
}

export default Task

