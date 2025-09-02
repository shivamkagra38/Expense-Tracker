import React, { use, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const rootElement = ReactDOM.createRoot(document.getElementById("outer"));

const Home = () => {

    console.log("Home Component");
    const[expense,setExpense] = useState("");
    const[amount,setAmount] = useState("");

    const[list,setList] = useState([]);

    const addExpense = () => {

        if(expense == "" || amount == "")
        {
            alert("Please enter valid data");
            return;
        }
        else
        {
            const newItem = {
                id : list.length + 1,
                expense : expense,
                amount : amount
            }
            setList([...list, newItem]);
        }
    }

    const deleteExpense = (id) => {

        const newList = list.filter( (verify)=>{

            if(verify.id === id)
            {
                return false;
            }
            else 
            {
                return true;
            }

        } );

        setList(newList);

    }

    return (
        
        <div className="container">

            <div className="title">
                Expense Tracker
            </div>

            <div className="input-box">
                <input type="text" className="expense-input" placeholder="Item..." value={expense} onChange={ (e)=>{setExpense(e.target.value)} } ></input>
                <input type="number" className="amount-input" placeholder="Amount..." value={amount} onChange={ (e)=>{setAmount(e.target.value)} }></input>
                <button className="btn" onClick={addExpense}>Add Item</button>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map((x, idx)=>{

                            return(

                                <tr key={idx}>
                                    <td>{x.expense}</td>
                                    <td>{x.amount}</td>
                                    <td><button className="delete-btn" onClick={ ()=>{deleteExpense(x.id)} }>Delete</button></td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

rootElement.render(<Home />);