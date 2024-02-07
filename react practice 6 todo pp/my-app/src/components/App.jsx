
import React ,{useState} from "react";

function App() {
  const [item ,updatedItem] = useState("");
  const [itemList , updatedItemList] = useState([]);

  function getTypedItem(event){
    const itemTyped = event.target.value;

    updatedItem(itemTyped);
  }
  function addItem (){
    
    if(item.trim() !== ""){
      updatedItemList((previous)=> [...previous ,item])  ;
      updatedItem("");
    }
    console.log(itemList)

  }

  function deleteItme(index){
    const newList = [...itemList];

    newList.splice(index,1);

    updatedItemList(newList);

  }

  function updating(index , i){

    const newList = [...itemList];
    newList[index] = i;
    updatedItemList(newList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={getTypedItem} value={item}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {itemList.map((item,index)=>(
          <li key={index}>
         <input type="text" value={item} onChange={(e)=> updating(index , e.target.value)}/>
       
        <button onClick={()=>deleteItme(index)} className="deleteBtn">
          <span>Delete</span>
        </button>

          
          </li>
        ))}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
