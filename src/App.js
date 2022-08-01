import './App.css';
import React, { useEffect, useState } from "react";
import Lists from './components/Lists';
import Form from './components/Form';

function App() {
  console.log("--App.js 랜더링--")
  let [textValue, setTextValue] = useState("");
  let [contentData, setContentData] = useState(
    [
      {
        id: 1,
        title: "공부하기",
        completed: false
      },
      {
        id: 2,
        title: "청소하기",
        completed: false
      }
    ]
  );

  const onClickDeleteMemo = (id) => {
    let contentCopy = contentData.filter(data => { return data.id != id;})
    setContentData(contentCopy);
  }

  return (
    <>
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          <Lists contentData={contentData} setContentData={setContentData} onClickDeleteMemo={onClickDeleteMemo}/>
          <form className="form">
            <Form textValue={textValue} setTextValue={setTextValue} />
            <input className="btnSubmit" type="submit" value="추가"
              onClick={(e) => {
                e.preventDefault();
                if (textValue != "") {
                  // console.log(textValue);
                  // console.log(contentData)
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