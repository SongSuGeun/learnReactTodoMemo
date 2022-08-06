import React, { memo, useState } from 'react'

const List = memo(({ content, provided, contentData, index, setContentData, onClickDeleteMemo }) => {
    console.log("--List.js 랜더링--")
    let [isEditing, setIsEditing] = useState(false);
    let [editTitle, setEditTitle] = useState(contentData[index].title);
    let [textCss, setTextCss] = useState("getStyle1");

    const handleEditChagne = (e) => {
        console.log(e.target.value)
        setEditTitle(e.target.value);
    }

    const chagneCompleted = (e) => {
        if (e.target.checked) {
            setTextCss("getStyle2")
        } else {
            setTextCss("getStyle1")
        }
    }

    if (isEditing) {
        return (
            <div>
                <div key={content.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} >
                    <form onSubmit={(e) => {
                        let copy = contentData;
                        if (copy[index].title != editTitle) {
                            copy[index].title = editTitle
                            setContentData(copy)
                        }
                        setIsEditing(false)
                    }}>
                        <input
                            type="text"
                            value={editTitle}
                            onChange={handleEditChagne}
                        />
                        <button className="editBtnStyle" onClick={() => setIsEditing(false)}>X</button>
                        <button className="editBtnStyle" type="submit" >save</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div
                    key={content.id} {...provided.draggableProps}
                    ref={provided.innerRef} {...provided.dragHandleProps}
                >
                    <table>
                        <tr>
                            <td><input type="checkbox" defaultChecked={false} onChange={(e) => { chagneCompleted(e) }} /></td>
                            <td><div className={textCss}>{content.title}</div></td>
                            <td><button className="btnStyle" onClick={() => onClickDeleteMemo(content.id)}>X</button></td>
                            <td><button className="btnStyle" onClick={() => setIsEditing(true)}>edit</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
});

export default List;