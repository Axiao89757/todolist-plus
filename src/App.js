/* eslint-disable no-unused-expressions */
import Header from "./components/Header"
import List, { ITEM_TYPE } from "./components/List";
import './App.css';
import Footer from "./components/Footer";
import React, { useCallback, useState, useMemo, useRef, useEffect } from "react"
import { MENU_TYPE } from "./common/constants";

function App() {
  const [inputValue, setInputVal] = useState("");
  const [itemList, setItemList] = useState([]);
  const [currentMenuType, setCurrentMenuType] = useState(MENU_TYPE.ALL);
  const inputValueRef = useRef(inputValue);

  // ？始终找不出为什么输入时，List子组件刷新渲染。
  const handleChange = useCallback((event) => {
    setInputVal(event.target.value.trim());
  }, []);
  const handleEnter = useCallback((event) => {
    if (event.key !== "Enter" || inputValueRef.current === "") return;
    setItemList((preItemList) => {
      return [{ text: inputValueRef.current, key: (new Date()).getTime(), type: ITEM_TYPE.ACTIVE }, ...preItemList]
    });
    setInputVal("");
  }, [inputValueRef]);

  const deleteItem = useCallback((event) => {
    event.stopPropagation();
    var key = Number(event.currentTarget.parentNode.dataset.key); // ?这里为什么一定要用 Number
    // console.log(id)
    // ?问建光师兄，为什么这里itemList打印是 undefined，重新刷新它又有值了
    // console.log(itemList)
    setItemList((preItemList) => preItemList.filter((item) => item.key !== key))
    // console.log(itemList)
  }, []);
  const handleChooseMenu = useCallback((event => {
    setCurrentMenuType(event.currentTarget.dataset.type)
  }), []);
  const handleItemClick = useCallback((event) => {
    var key = Number(event.currentTarget.dataset.key);
    setItemList(
      (preItemList) =>
        preItemList.map(
          (item) => {
            if (item.key === key) {
              return (
                {
                  ...item,
                  type:
                    item.type === ITEM_TYPE.DONE
                      ? ITEM_TYPE.ACTIVE
                      : ITEM_TYPE.DONE
                }
              )
            }
            return (item);
          }
        )
    );
  }, []);
  const sortedItemList = useMemo(() => {
    console.log("memo")
    if (currentMenuType === MENU_TYPE.COMPLETED) {
      return itemList.filter((item) => item.type === ITEM_TYPE.DONE);
    } else if (currentMenuType === MENU_TYPE.ACTIVE) {
      return itemList.filter((item) => item.type === ITEM_TYPE.ACTIVE);
    }
    return itemList;
  }, [currentMenuType, itemList]);
 
  // 测试用的副作用钩子
  useEffect(() => {
    console.log("inputValue改变")
    inputValueRef.current = inputValue;
  }, [inputValue])
  useEffect(() => {
    console.log("itemList改变")
  }, [itemList])
  useEffect(() => {
    console.log("sortedItemList改变")
  }, [sortedItemList])


  return (
    <div className="App">
      <Header
        inputValue={inputValue}
        handleEnter={handleEnter}
        handleChange={handleChange} />
      <List
        itemList={sortedItemList}
        handleItemClick={handleItemClick}
        handleDelete={deleteItem} />
      <Footer
        currentMenuType={currentMenuType}
        handleChooseMenu={handleChooseMenu} />
    </div>
  );
}

export default App;
