import React from 'react'
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  const [state,setState] =React.useState(false);
  const getClickBox = () => {
    setState(!state);
  }
   console.log(state);
  return (
      <label className= {state ? "panel-block has-text-grey-light" : "panel-block"}>
      <input type = "checkbox" onClick={() => getClickBox()} />
      {item.text}
    </label>
  );
}

export default TodoItem;