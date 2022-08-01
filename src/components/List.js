import React from 'react'

const List = React.memo(({ content, provided, contentData, index, setContentData, onClickDeleteMemo }) => {
    console.log("--List.js 랜더링--")
    return (
        <div>
            <div key={content.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} ç>
                <input type="checkbox" defaultChecked={false} onChange={() => {
                    let copy = contentData;
                    copy[index].completed = !content.completed
                    setContentData(copy)
                }} />
                {content.title}
                <button className="btnStyle" onClick={() => onClickDeleteMemo(content.id)}>X</button>
            </div>
        </div>
    )
});

export default List;