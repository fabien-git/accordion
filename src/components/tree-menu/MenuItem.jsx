import React from 'react';
import MenuList from "./MenuList";
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayCurrentDisplay, setDisplayCurrentDisplay] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentDisplay({
      ...displayCurrentDisplay,
      [getCurrentLabel]: !displayCurrentDisplay[getCurrentLabel]
    });
  }
console.log(displayCurrentDisplay)

  return (
    <li>
      <div style={{display:"flex", gap:"20px"}}>
      <p>{item.label}</p>
      {
          item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>{
                displayCurrentDisplay[item.label] ?  <FaMinus color="white" size={25}/> : <FaPlus color="white" size={25}/>
          }</span> : null
      }
</div>
      {
        item && item.children && item.children.length > 0 && displayCurrentDisplay[item.label]?(
          <MenuList list= {item.children}/>)
          : null
      }
    </li>
  );
};

export default MenuItem;
