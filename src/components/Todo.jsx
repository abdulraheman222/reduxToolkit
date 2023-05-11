import React, { useEffect, useState } from "react";
import "../components/todo.css";
import todo from "../assets/tasks.png";
import { IoIosAdd } from "react-icons/io";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
const localData = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState(localData());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editId, setEditId] = useState(null)
  const addItem = () => {
    if (!inputData) {
      alert("field is empty");
    }else if (inputData && !toggleSubmit){
      setItem(
        item.map((elem)=>{
          if(elem.id === editId){
            return {...elem,name:inputData}
          }
          return elem
        })
      )
      setInputData("")
      setToggleSubmit(true)
    }
     else {
      const inputObject = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, inputObject]);
      setInputData("");
      setToggleSubmit(true);
    }
  };
  console.log("itemArray=====", item);
  const deleteItem = (ind) => {
    const updatedItem = item.filter((currElem) => {
      return ind !== currElem.id;
    });
    setItem(updatedItem);
  };
  const removeAll = () => {
    setItem([]);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(item));
  }, [item]);

  const editItem = (id) => {
    const newEditItem = item.find((elem) => {
      return elem.id === id;
    });
    console.log("newEditItem=====", newEditItem);
    setInputData(newEditItem.name);
    setToggleSubmit(false);
    setEditId(id)
  };
  return (
    <>
      <div className="main_div">
        <div className="child_div">
          <figure>
            <img src={todo} alt="todoLogo"></img>
            <figcaption>TO DO List</figcaption>
          </figure>
          <div className="inpu_div">
            <input
              type="text"
              placeholder="add item...."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></input>
            <div className="plus_icon">
              {toggleSubmit ? (
                <IoIosAdd onClick={addItem} />
              ) : (
                <AiTwotoneEdit onClick={addItem} />
              )}
            </div>
            <ul>
              {item.map((elem, index) => {
                return (
                  <div className="list" key={elem.id}>
                    <li>
                      {elem.name}{" "}
                      <div className="icons">
                        <AiTwotoneEdit onClick={() => editItem(elem.id)} />
                        <AiFillDelete onClick={() => deleteItem(elem.id)} />
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
            <button onClick={removeAll}>remove all</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
