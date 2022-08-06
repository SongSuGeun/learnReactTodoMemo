import './App.css';
import React, { useEffect, useState, useCallback } from "react";
import Lists from './components/Lists';
import Form from './components/Form';

function App() {
  console.log("--App.js 랜더링--")
  let [textValue, setTextValue] = useState("");
  let [contentData, setContentData] = useState(
    [
      {
        id: 1,
        title: "Study",
        completed: false
      },
      {
        id: 2,
        title: "Sleeping",
        completed: false
      },
      {
        id: 3,
        title: "Write Diary",
        completed: false
      },
      {
        id: 4,
        title: "Interview",
        completed: false
      }
    ]
  );

  const onClickDeleteMemo = useCallback((id) => {
    let contentCopy = contentData.filter(data => { return data.id != id; })
    setContentData(contentCopy);
  }, [contentData])
  // <<문제>>
  //memo를 사용해야하는데 app.js에서 자식에게 Props를 건내주게되면 app.js가 리 렌더링될때마다 
  // props를 건내받은 자식도 리 렌더링되는 문제가 발생.
  // useCallback을 사용하므로써 contentData가 변하지않는다면 함수는 새로 생성되지않음.

  const onClickRemoveAllMemo = () => {
    console.log("aaa");
    setContentData([]);
  }

  return (
    <>
      <div className="container">
        <div className="todoBlock">
          <div >
            <h1 className="todoTitle">TODO List</h1>
          </div>
          {/* <div >
            <button className="todoTitle" onClick={() => { onClickRemoveAllMemo() }}>Memo All Delete</button>
          </div> */}
          <Lists contentData={contentData} setContentData={setContentData} onClickDeleteMemo={onClickDeleteMemo} />
          <form className="form">
            <Form textValue={textValue} setTextValue={setTextValue} />
            <input className="btnSubmit" type="submit" value="Add Memo"
              onClick={(e) => {
                e.preventDefault();
                if (textValue != "") {
                  var copy = [...contentData]
                  copy.push(
                    {
                      id: contentData.length + 1,
                      title: textValue,
                      completed: false
                    }
                  )
                  setContentData(copy)
                  setTextValue("");
                }
                // form 안에서 전송되었을떄 페이지 리로드를 막아줌.
              }
              } />
          </form>
        </div>
      </div>
    </>
  );
}
export default App;