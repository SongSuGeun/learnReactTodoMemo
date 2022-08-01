import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({ contentData, setContentData, onClickDeleteMemo }) => {
    // 입력란에 텍스트를 입력하면 해당 컴포넌트가랜더되서 로그가 계속 출력됨...
    console.log("--Lists.js 랜더링--")
    const onDragEndTest = (result) => {
        // console.log("result! : ", result);
        // console.log("result!-draggableId : ", result.draggableId);
        // console.log("result!-source.index : ", result.source.index);
        // console.log("result!-destination : ", result.destination);

        // 목적지가 없으면 함수 종료
        if (!result.destination) return;
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
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {contentData.map((content, index) => (
                                <Draggable key={content.id} draggableId={(content.id).toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <List
                                            content={content}
                                            provided={provided}
                                            contentData={contentData}
                                            index={index}
                                            setContentData={setContentData}
                                            onClickDeleteMemo={onClickDeleteMemo}
                                        />
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
});

export default Lists;