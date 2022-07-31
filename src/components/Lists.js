import { data } from 'autoprefixer';
import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function List({ contentData, setContentData }) {
    const onDragEndTest = (result) => {
        console.log("result! : ", result);
        console.log("result!-draggableId : ", result.draggableId);
        console.log("result!-source.index : ", result.source.index);
        console.log("result!-destination : ", result.destination);

        // 목적지가 없으면 함수 종료
        if(!result.destination) return;
        const items = [...contentData];
        console.log("items! : ", items)
        // 드래그한 데이터의 index를 제거 후 return값의 배열을 새로운 변수에 대입
        const [deleteItem] = items.splice(result.source.index, 1);
        console.log("deleteItem! : ", deleteItem)

        items.splice(result.destination.index, 0, deleteItem);
        setContentData(items);
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEndTest}>
                <Droppable droppableId="todoDroppable">
                    {(provided)=>(
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {contentData.map((content, index) => (
                                <Draggable key = {content.id} draggableId={String(content.id)} index={index}>
                                    {(provided,snapshot) => (
                                        <>
                                            {/* // 텍스트 가운데 선이 안됨 */}
                                            {/* <div className={!content.completed ? "getStyle1" : "getStyle2"} key={content.id} > */}
                                            <div key={content.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}ç>
                                                <input type="checkbox" defaultChecked={false} onChange={() => {
                                                    console.log(contentData[index].completed)
                                                    let copy = contentData;
                                                    copy[index].completed = !content.completed
                                                    console.log(copy)
                                                    setContentData(copy)
                                                }} />
                                                {content.title}
                                                <button className="btnStyle" onClick={() => {
                                                    let contentCopy = contentData.filter(data => {
                                                        return data.id != content.id;
                                                    })
                                                    setContentData(contentCopy);
                                                }}>X</button>
                                            </div>
                                        </>
                                    )}         
                                </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}