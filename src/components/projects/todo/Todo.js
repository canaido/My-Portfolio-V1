import React, { useState } from 'react';
import ItemList from './ItemList';


const Todo = () => {
    const [currentItem, setCurrentItem] = useState(null);
    const [itemList, updateItemList] = useState([
        { item: 'add or delete', key: 1620840180813 },
        { item: 'items as you please', key: 1620840180814 }
    ]);
    console.log(itemList)

    const onChangeHandler = (e) => {
        setCurrentItem(e.target.value);
    }

    const addItemToList = () => {
        updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
        setCurrentItem("");
    }

    return (
        <div className=" bg-todo-2000 h-auto px-2 py-4">
            <div className="h-screen">
                <div className="block pt-10 pb-12  flex justify-center shadow-inner">
                    <h1 className="md:text-5xl text-3xl block font-bold underline filter drop-shadow text-white">
                        My To-Do List
                    </h1>
                </div>
                <div className="App-header flex justify-center">
                    <div className="wrapper block h-auto">
                        <div className="input-wrapper bg-rose-2300 md:py-4 md:px-4 py-2 px-2 rounded-t shadow-inner flex justify-center bg-todo-1000">
                            <div className="inline-block px-2 ">
                                <input
                                    type="text"
                                    value={currentItem}
                                    onChange={onChangeHandler}
                                    placeholder="Add items to the list"
                                    className="md:text-5xl sm:text-3xl text-lg rounded px-2"
                                />
                            </div>
                            <div className="inline-block px-2">
                                <button
                                    className="bg-todo-3000 rounded font-bold text-white md:py-2 md:px-2 py-1 px-1 md:text-5xl sm:text-2xl text-sm "
                                    onClick={addItemToList}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <ItemList
                            itemList={itemList}
                            updateItemList={updateItemList}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;