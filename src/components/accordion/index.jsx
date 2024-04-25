import React from "react";
import data from "./data";
import { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiply, setEnableMultiple] = useState(null)
  const [multiple, setMultiple] = useState([]);

  const handleEnableMultiple = () => {
    console.log(enableMultiply)
    setEnableMultiple(!enableMultiply)
  }

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

    const handleMutlipleSelection = (getCurrentId) => {
      const copyMultiple = [...multiple];
      const indexOfCurrentId = copyMultiple.indexOf(getCurrentId);
      if (indexOfCurrentId == -1) {
        copyMultiple.push(getCurrentId)
      } else {
        copyMultiple.splice(indexOfCurrentId,1)
      }
      console.log(copyMultiple)
      setMultiple(copyMultiple);
  }

  return (
    <div>
      <div className="Acccordian">
        <button
          onClick = {handleEnableMultiple}
        >Activer la selection multiple</button>
        {
          data && data.length > 0 ?
              data.map(dataItem =>
                <div className="item">
                  <div
                    onClick={
                      enableMultiply
                        ? () => handleMutlipleSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                    className="question">
                  <h3>
                    {dataItem.question}
                  </h3>
                    <span>+</span>
                    </div>
                  <div className="answer">
                    {
                      enableMultiply
                        ? multiple.indexOf(dataItem.id) !== -1 && <div>{dataItem.answer}</div>
                        : selected === dataItem.id && <div>{dataItem.answer}</div>
                    }
                  </div>

              </div>
              )

            :<div>Pas de data trouvé</div>
        }
      </div>
    </div>
  );

};

export default Accordian;
