import React, { useState } from 'react';
import './Todo.css'
function ToDo() {
    let photo = 'https://icon-library.com/images/todo-icon/todo-icon-16.jpg'
    const [item, setitem] = useState([])
    const [input, setinput] = useState()
    function addItem() {
        setitem([...item, input])
        setinput('')
    }
    function cut(i) {
        const updateitem = item.filter((element, index) => {
            return index !== i;

        });
        setitem(updateitem)

    }
    const Cross = (e, i) => {
        alert('Do you want ot delete it');
    }
    return (
        <div className="containerr">
            <div>
                <img src={photo} alt="noimage" />
            </div>
            <div className="text">
                <input type="text" placeholder="Enter Your Todo" value={input} onChange={(e) => setinput(e.target.value)} />
                <i className="fa fa-plus add" title='Add items' onClick={addItem}></i>
            </div>

            <div className="mylist">
                {item.map((value, i) => (
                    <div className="texts" key={i} onDoubleClick={(e) => Cross(e, i)}>
                        <h4 className='value'>{value}</h4>
                        <i className="fa fa-trash delete mt-2" onClick={() => cut(i)}></i>
                    </div>

                ))
                }
            </div>


        </div >
    )
}
export default ToDo