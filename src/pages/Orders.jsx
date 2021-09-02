import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(
          'https://612ce387ab461c00178b5f65.mockapi.io/orders'
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      })();
    } catch (error) {
      alert('Error 404');
    }
  }, []);

  return (
    <div className="content">
      <div className="contentTop">
        <h1>My orders</h1>
      </div>
      <div className="cardItems">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card key={index} {...item} loading={isLoading} />
        ))}
      </div>
    </div>
  );
}
