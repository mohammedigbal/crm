import React, { useState } from 'react';

const Message = () => {
  const [sales, setSales] = useState([]);
  const [form, setForm] = useState({ item: '', quantity: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSales([...sales, form]);
    setForm({ item: '', quantity: '', price: '' });
  };

  return (
    <div>
      <h1>Sales Screen</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          placeholder="Item"
          value={form.item}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Sale</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.item}</td>
              <td>{sale.quantity}</td>
              <td>{sale.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};

export default Message;
