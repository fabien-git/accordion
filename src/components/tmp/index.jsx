// single selection
//multiple selection
import data from "../accordion/data";
import { useState } from 'react';
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  const handleMultipleSelection = (getCurrentId) => {

    let copyMultiple = [...multipleSelected];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
       console.log(copyMultiple)
    }
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultipleSelected(copyMultiple);
    console.log(multipleSelected)
  }


  return <div className="wrapper">
    <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>Enable</button>
    <div className="accordion">
      {
          data && data.length > 0 ?
          data.map(dataItem =>
            <div className="item">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    :() => handleSingleSelection(dataItem.id)
                } className="title">
                <h3>
                  {dataItem.question}
                </h3>
                  <span>+</span>
              </div>
              {
                enableMultipleSelection ?
                  multipleSelected.indexOf(dataItem.id) !== -1 &&
                    <div className="content">{dataItem.answer}</div> :
                    selected === dataItem.id ? (
                      <div className="content">{dataItem.answer}</div>
                    ) : null
              }

          </div>
        )
        : <div> No data found ! </div>
      }


    </div>
  </div>
}
