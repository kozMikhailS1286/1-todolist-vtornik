import React, {useState, ChangeEvent} from 'react';

type PropsType = {
    OLDtitle: string
    callBack: (newTitle: string) => void
}

export const EditableSpan = (props: PropsType) => {

    const [edit, setEdit] = useState(false);
    let [newTitle, setNewTitle] = useState(props.OLDtitle)


    const onDubleClickHandler = () => {
        setEdit(!edit)
        addTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTask = () => {
        props.callBack(newTitle);
    }

    // const onBlureHandler = () => {
    //     setEdit(false)
    // }

    return (
        edit
        ? <input value={newTitle} onBlur={onDubleClickHandler} onChange={onChangeHandler} autoFocus/>
        : <span onDoubleClick={onDubleClickHandler}>{props.OLDtitle}</span>
    )
};