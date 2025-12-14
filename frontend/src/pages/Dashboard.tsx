import React, { useContext, useEffect, useState } from 'react';
import API from '../api';
import { AuthContext } from '../context/AuthContext';

interface Sweet {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [error, setError] = useState('');

  const fetchSweets = async (params = {}) => {
    try {
      const res = await API.get('/sweets', { params });
      setSweets(res.data);
    } catch (err: any) {
      setError('Failed to fetch sweets');
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchSweets({ name: search, category, minPrice, maxPrice });
  };

  const handlePurchase = async (id: number) => {
    try {
      await API.post(`/sweets/${id}/purchase`);
      fetchSweets();
    } catch (err: any) {
      setError('Purchase failed');
    }
  };

  return (
    <div>
      <h2>Sweet Shop Dashboard</h2>
      <form onSubmit={handleSearch}>
        <input placeholder="Name" value={search} onChange={e => setSearch(e.target.value)} />
        <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <input placeholder="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} type="number" />
        <input placeholder="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} type="number" />
        <button type="submit">Search</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {sweets.map(sweet => (
          <li key={sweet.id}>
            {sweet.name} ({sweet.category}) - ${sweet.price} - Qty: {sweet.quantity}
            <button onClick={() => handlePurchase(sweet.id)} disabled={sweet.quantity === 0}>Purchase</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
