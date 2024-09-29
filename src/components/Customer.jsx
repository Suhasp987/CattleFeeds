import React, { useEffect, useRef, useState } from 'react'
import './style1.css'

import Model from './Model';

const Customer = () => {
  
   const [boosa_count, setBoosa_count] = useState(60);
   const [ottu_busa_count, setOttu_busa_count] = useState(10);
   const [indi_count, setIndi_count] = useState(40);
   const [revenue, setRevenue] = useState(0);
   const [display, setDisplay] = useState(false);
   const [name, setName] = useState("");
   const [phoneNumber, setPhoneNo] = useState("");
   const dialogRef = useRef(null);
   const [loading, setLoading] = useState(false);
   const [balanceDisplay,setBalanceDisplay]=useState(false);
   const [balanceItems,setBalanceItems]=useState([]);
   const [balanceName,setBalanceName]=useState([]);
   const [index,setIndex]=useState(0)
    const [customers, setCUstomers] = useState([
      {
        slno:1,
        name: "Farmer1",
        contact: "123456789",
        totalBalance: [    ],
        purchase:[
            2
        ]
      },
      {
        slno:2,
        name: "Farmer2",
        contact: "723456749",
        totalBalance: [],
        purchase:[]
      },
    ]);

    const CalculateBalance=(index)=>{
     
      const Pickbalance = customers[index]?.totalBalance

      const filtered=Pickbalance ?Pickbalance?.map(balance=>balance?.amount):0
  
      const  Balance=filtered && filtered.reduce((acc,amount)=>{
        return acc+amount
      },0)
   
      return Balance
      
    }

   const DecreaseBalance=(items)=>{
            const customer=[...customers]
            console.log(customer[index])
              console.log(items);

               items.map((i) => {
                 customer[index].totalBalance.map((item) => {
                 
                   if (item.id === i) {
                   
                     setRevenue(
                       (prev) => prev + parseInt(item.amount)
                     );
                   }
                 });
               });
              items.map((i)=>{
                  
                   customer[index].totalBalance = customer[index].totalBalance.filter(
                    
                     (k) => k.id != i
                   );

                   
                     
               
              })

             


              setCUstomers(customer);
              console.log(customers)
   }



    const  onDisplay=(index)=>{
      setBalanceDisplay(true)
      const  balance=customers[index].totalBalance
      const name=customers[index].name
      setBalanceItems(balance)
      setBalanceName(name)
      setIndex(index)

    }

    const itemRates = {
      busa: 1340,
      ottu_busa: 900,
      indi: 1200,
    };

   


    useEffect(()=>{
       const handleClickOutide=(event)=>{
        if(dialogRef.current && !dialogRef.current.contains(event.target)){
          setDisplay(false)
        }
       }   
       document.addEventListener('mousedown',handleClickOutide);
       return ()=>{
        document.removeEventListener('mousedown',handleClickOutide)
       }
    },[dialogRef])


    const handlePurchase=(index,item,quantity,paid)=>{

           if (parseInt(quantity)<=0){
            return
           }
              const updateCustomers=[...customers]
              console.log(item,quantity)
              const amount =itemRates[item]*quantity;
              if(item==="busa" && quantity>=1){
                  setBoosa_count((prev)=>prev-quantity)
              }
              else if(item==="ottu_busa" && quantity>=1){
                   setOttu_busa_count((prev)=>prev-quantity)
              }
              else if(item==="indi" && quantity>=1){
                      setIndi_count((prev)=>prev-quantity)
              }
              updateCustomers[index].purchase.push({item,quantity,amount,date:new Date().toISOString().split('T')[0],paid})
             
              if(paid){
                updateCustomers[index].totalBalance.amount=updateCustomers[index].totalBalance.amount;
                setRevenue((prev)=>prev+parseInt(amount))
              }
              else{
               
                updateCustomers[index].totalBalance.push({
                  id:updateCustomers[index].totalBalance.length+1,
                  Date:"2024-07-08",
                  amount:amount,
                  item:[
                    {
                    item:item,
                    quantity:quantity}
                  ]
                })
              }
            
              setCUstomers(updateCustomers);
    }

    const handlePayment=(index,amountPaid)=>{
        const updateCustomers = [...customers];
        const totalBalance=updateCustomers[index].totalBalance;
          console.log(totalBalance[0].amount)
        if(parseInt(amountPaid)===parseInt(totalBalance[0].amount)){
           console.log("gh")
            updateCustomers[index].totalBalance=[]
        }
        else{
            updateCustomers[index].totalBalance-=amountPaid
        }
         setRevenue((prev) => prev + parseInt(  amountPaid));

        setCUstomers(updateCustomers)
        console.log(customers[index])

    }

   
    const onAddFarmer=(e)=>{
          
           e.preventDefault();
            setLoading(true)
           setTimeout(()=>{
                 const data = {
                   slno: customers.length + 1,
                   name,
                   contact: phoneNumber,
                   totalBalance: [],
                   purchase: [],
                 };
                 console.log(data);
                 setCUstomers((prev) => [...prev, data]);
                 setName("");
                 setPhoneNo("");
                 setDisplay(!display);
                 setLoading(false)
           },1000)
            
           
    }

  return (
    <div className="container">
      {balanceDisplay && (
        <Model
          balanceitem={balanceItems}
          balacename={balanceName}
          setBalanceDisplay={setBalanceDisplay}
          balanceDisplay={balanceDisplay}
          Decreasebalance={DecreaseBalance}
        />
      )}
      <div className={`dialog ${display ? "dialog_d" : ""}`} ref={dialogRef}>
        <h1 style={{ fontWeight: "bold", fontSize: "23px" }}>Add Farmer</h1>
        <form className="form" onSubmit={onAddFarmer}>
          <div>
            <label>Name : </label>
            <input
              type="text"
              className="input"
              placeholder="Enter the name"
              style={{ border: "2px solid black" }}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div>
            <label>Phone number : </label>
            <input
              type="number"
              placeholder="Enter the Phone number"
              className="input"
              value={phoneNumber}
              style={{ border: "2px solid black" }}
              minLength={10}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="button b2">Submit</button>
          </div>
        </form>
      </div>

      <div className="container2">
        <div className="KPI">
          <div className="card">
            <span>Boosa</span>
            <span>{boosa_count}</span>
          </div>
          <div className="card">
            <span>Ottu Boosa</span>
            <span>{ottu_busa_count}</span>
          </div>
          <div className="card">
            <span>Indi</span>
            <span>{indi_count}</span>
          </div>
          <div className="card">
            <span>Revenue</span>
            <span>{revenue}</span>
          </div>
        </div>
        <div className='heading'>
          <h1> Customer List </h1>
          <button
            className="button"
            style={{ float: "right" }}
            onClick={() => setDisplay(!display)}
          >
            {loading ? "loading..." : "Add Farmer"}
          </button>
        </div>

        <div className="cont-table">
          <table>
            <thead>
              <tr>
                <th>Slno</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.slno}</td>
                  <td>{customer.name}</td>
                  <td>{customer.contact}</td>
                  <td
                    onClick={() => onDisplay(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    {CalculateBalance(index)}
                  </td>
                  <td>
                    <PurchaseEntry
                      onPurchase={(item, quantity, paid) =>
                        handlePurchase(index, item, quantity, paid)
                      }
                      b={boosa_count}
                      o={ottu_busa_count}
                      i={indi_count}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PurchaseEntry({onPurchase,b,o,i}){
    const [item,setItem]=useState('busa');
    const [quantity,setQuantity]=useState(0);
    const [paid,setPaid]=useState(false);
    
    const handleSubmit=(e)=>{
       
     
         console.log("hello")
        onPurchase(item, quantity, paid);
        setQuantity(0);
        setPaid(false);
    }

     return (
       <form onSubmit={handleSubmit} className='purchaseForm'>
         <select value={item} onChange={(e) => setItem(e.target.value)} className='input'>
           <option value="busa" disabled={b<=0}>Boosa</option>
           <option value="ottu_busa" disabled={o<=0}>Ottu Boosa</option>
           <option value="indi" disabled={i<=0}>Indi</option>
         </select>

         <input  className='input'
           type="number"
           placeholder="Quantity"
           value={quantity}
           onChange={(e) => setQuantity(e.target.value)}
           required
           min={1}
           max={item==="busa"?b:item==="ottu_busa"?o:i}
         />
         <label>
           <input
             type="checkbox"
             className='input'
             checked={paid}
             onChange={() => setPaid(!paid)}
           />
           Paid
         </label>
         <button className='button'  type="submit" >Submit Purchase</button>
       </form>
     );
}



export default Customer