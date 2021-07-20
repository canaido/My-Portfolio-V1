import React from 'react'

const ItemList = (props) => {
    const deleteItem = (key) => {
        const newList = props.itemList.filter(itemObj => {
            return itemObj.key !== key;
        });

        props.updateItemList(newList);
    }

    return (
        <div className="bg-todo-4000 rounded-b">
            {props.itemList.map((itemObj) => {
                return (
                    <div key={itemObj.key} className="item px-2 py-2 mb-auto">
                        <div className="inline-block px-2 py-2 bg- rounded">
                            <p className="md:text-5xl sm:text-2xl text-lg text-white">
                                {itemObj.item}
                            </p>
                        </div>
                        <div className="bg-todo-3000 rounded-full inline-block px-1 py-1">
                            <button
                                onClick={() => deleteItem(itemObj.key)}
                                className="md:text-5xl sm:text-2xl text-lg font-bold"
                            >
                                X
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemList
