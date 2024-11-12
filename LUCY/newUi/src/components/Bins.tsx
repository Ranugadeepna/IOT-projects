import React from 'react';
import { Table, Card } from 'antd';
import '../style.css';


const Bins: React.FC = () => {
  const binsData = [
    { key: '1', name: 'Bin 1', location: 'Location A', weight: 10, type: 'Plastic' },
    { key: '2', name: 'Bin 2', location: 'Location B', weight: 15, type: 'Organic' },
    // Add more bins
  ];

  const columns = [
    { title: 'Bin Name', dataIndex: 'name', key: 'name' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { title: 'Weight (kg)', dataIndex: 'weight', key: 'weight' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
  ];

  return (
    <Card title="Bins Management" style={{ margin: '16px 0' }}>
      <Table columns={columns} dataSource={binsData} pagination={{ pageSize: 5 }} />
    </Card>
  );
};

export default Bins;
