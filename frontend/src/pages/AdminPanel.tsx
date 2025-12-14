import React, { useContext, useState } from 'react';
import API from '../api';
import { AuthContext } from '../context/AuthContext';

const AdminPanel: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('/sweets', { name, category, price: Number(price), quantity: Number(quantity) });
      setMessage('Sweet added!');
    } catch (err: any) {
      setMessage('Failed to add sweet');
    }
  };

  // Update and delete logic can be added similarly

  if (!user || user.role !== 'admin') return null;

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
        <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} type="number" required />
        <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} type="number" required />
        <button type="submit">Add Sweet</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default AdminPanel;
