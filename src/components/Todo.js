import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
 ・key：Todoを特定するID（String）
 ・text：Todoの内容（String）
 ・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";
import TabTodo from './TabTodo';

function Todo() {
  const [items, putItems] = React.useState([
    /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  const all = 1;
  const notDone = 2;
  const done = 3;
  const [itemWithTab, setItemWithTab] = useState(items)

  const [newTodo, setNewTodo] = React.useState("")

  const changeAfterClick = (keyInput) => {

    const keyUsing = parseInt(keyInput)
    if (keyUsing === all) {
      console.log("🚀 ~ file: Todo.js ~ line 41 ~ changeAfterClick ~ keyUsing", keyUsing)
      setItemWithTab(items)
    }
    if (keyUsing === done) {
      setItemWithTab(items.filter(e => e.done))
    }
    if (keyUsing === notDone) {
      setItemWithTab(items.filter(e => !e.done))
    }
  }
  const onChangeHandleAfterclick = (key) => {
    const itemAfterHandle = items.map(e => {
      if (e.key === key) {
        e.done = !e.done
      }
      return e
    })

    putItems(itemAfterHandle)
  }
  const listTab = [{ text: 'すべて', key: 1 }, { text: '未完了', key: 2 }, { text: '完了済み', key: 3 }]
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <div>
        <input class="input" type="text" onKeyDown={e => {
          if (e.key === "Enter" && newTodo !== "") {
            const valueNeedInsert = { key: getKey(), text: newTodo, done: false }
            putItems([...items, valueNeedInsert])
            setNewTodo("")
          }
        }} onChange={e => setNewTodo(e.target.value)} value={newTodo} />

      </div>
      <div style={{ display: "flex", justifyContent: 'center' }} class="panel-block">
        <div class="columns is-centered panel-block">
          {listTab.map(tabData => (
            <TabTodo text={tabData.text} keyUsing={tabData.key} changeAfterClick={changeAfterClick} />
          ))}
        </div>
      </div>
      {
        itemWithTab.map(item => (
          <TodoItem item={item} onClick={onChangeHandleAfterclick} />
        ))
      }
      <div className="panel-block">
        {itemWithTab.length} items
      </div>
    </div >
  );
}

export default Todo;