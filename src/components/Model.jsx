import React, { useState } from 'react'
import "./style1.css";

const Model = ({
  balanceitem,
  balacename,
  setBalanceDisplay,
  balanceDisplay,
  Decreasebalance,
}) => {
  const [keys, setKeys] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const calculateSum = (price, key) => {
    if (!selectedItems.includes(key)) {
      setSelectedItems((prevKeys) => [...prevKeys, key]);
      setAmount((prev) => prev + price);
    } else if (selectedItems.includes(key)) {
      setSelectedItems((prevKeys) => prevKeys.filter((k) => k != key));
      setAmount((prev) => prev - price);
      console.log(keys);
    }
  };

  const onSubmit=()=>{
    console.log(selectedItems)
      Decreasebalance(selectedItems);
      setBalanceDisplay(false)
  }

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([]);
      setAmount(0);
    } else {
      console.log("hi");
      const allItems = balanceitem.map((item) => item.id);
      setSelectedItems(allItems);
      const total = balanceitem.reduce((sum, item) => sum + item.amount, 0);
      setAmount(total);
    }
    setSelectAll(!selectAll);
  };
  return (
    <div>
      <div className={`dialog ${balanceDisplay ? "dialog_d" : ""}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "23px" }}>Payment</h1>
          <span
            style={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setBalanceDisplay(false)}
            className="close"
          >
            X
          </span>
        </div>
        <div className="cont-table">
          <h2
            className="header"
            style={{
              marginBottom: "1rem",
              fontWeight: "bold",
              fontSize: "27px",
            }}
          >
            Name : {balacename}
          </h2>
          <table>
            <thead>
              <tr>
                <th>
                  <div>Select All</div>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    style={{ transform: "scale(2.5" }}
                  />
                </th>
                <th>Date</th>

                <th>Balance</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {balanceitem.map((items) => (
                <tr key={items.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => calculateSum(items.amount, items.id)}
                      style={{ transform: "scale(2.5" }}
                      checked={selectedItems.includes(items.id)}
                    ></input>
                  </td>
                  <td>{items.Date}</td>
                  <td>{items.amount}</td>
                  {items.item.map((i) => (
                    <td>
                      {i.item}({i.quantity})
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total">
            {" "}
            <h3>Total : </h3>{" "}
            <span style={{ color: "red", paddingLeft: "16px" }}>{amount}</span>{" "}
            <button className="button" style={{ paddingLeft: "16px" }} onClick={onSubmit} disabled={amount<=0}>
              Submit Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model