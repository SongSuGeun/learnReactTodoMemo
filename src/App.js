import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  let [textValue, setTextValue] = useState("");
  let [contentData, setContentData] = useState(
    [
      {
        id:1,
        title:"공부하기",
        completed: false
      },
      {
        id:2,
        title:"청소하기",
        completed: false
      }
    ]
  );

  return (
    <>
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>  
          </div>
          {contentData.map((content,index) => {
            return(
              <>
                {/* // 텍스트 가운데 선이 안됨 */}
                <div className= {!content.completed? "getStyle1":"getStyle2"} key={content.id}>
                  <input type="checkbox" defaultChecked={false} onChange={()=>{
                    console.log(contentData[index].completed)
                    let copy = contentData;
                    copy[index].completed = !content.completed
                    console.log(copy)
                    setContentData(copy)
                  }}/>
                    {content.title}
                  <button className="btnStyle" onClick={()=>{
                    let contentCopy =  contentData.filter(data => {
                      // console.log(data.id)
                      // console.log(content.id)
                      return data.id != content.id;
                    })
                    setContentData(contentCopy);                  
                  }}>X</button>
                </div>
              </> 
            ) 
          })}
          <form className="form">
            <input className="textInput" type="text" name="value" placeholder="해야할 일을 입력하세요." 
            value={textValue} onChange={(e)=>{
              console.log(e.target.value);
              console.log(textValue);
              setTextValue(e.target.value);
            }}
            />
            <input className="btnSubmit" type="submit" value="추가" 
            onClick={(e)=>{
              e.preventDefault();
              if(textValue!=""){
                console.log(textValue);
                console.log(contentData)
                var copy = [...contentData]
                copy.push(
                  {
                    id: contentData.length+1,
                    title: textValue,
                    completed: false
                  }
                )
                setContentData(copy)
                setTextValue("");
              }
              // form 안에서 전송되었을떄 페이지 리로드를 막아줌.
            }
            }/>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;