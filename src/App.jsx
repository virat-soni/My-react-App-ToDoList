import React, { useState } from "react";
import './index.css'
const App = () => {
    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);

    function addActivity() {
        if (activity.trim() !== '') {
            setListData((listData) => {
                const updatedList = [...listData, activity];
                setActivity('');
                console.log(updatedList);
                return updatedList;
            });
        }
    }


    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i !== id;
        })
        setListData(updatedListData);
    }
    function removeAll() {
        setListData([]);
    }
    return (
        <>
            <div className="container">
             <header>
                <div><h1>To-Do-List</h1></div>
                <input type="text" placeholder="Add Activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button className="btn" onClick={addActivity}>+</button>
                {listData.length >= 2 && <button className="removeall" onClick={removeAll}>Remove All</button>}
            </header>
                {listData !== [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className="listdata">{data}</div>
                                <div className="removeBtn">
                                    <button className="delbtn" onClick={() => removeActivity(i)}>Delete</button>
                                </div>

                            </p>
                        </>
                    )
                })}
                
            </div>
        </>
    )
}
export default App;