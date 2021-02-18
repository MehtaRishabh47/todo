import React from 'react';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span  >
            <button style={{}} onClick={() => {
            props.deleteItem(item.key)
        }} > Delete</button>
        </span>
     </p>
     
    </div>})
    return <div>
        <p >
        {listItems}
        </p>
    
    </div>;
  }

  export default ListItems;