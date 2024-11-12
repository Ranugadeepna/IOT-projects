import React from 'react';
import { Card } from 'antd';
import '../style.css';

const Reports: React.FC = () => (
  <Card title="Reports" style={{ margin: '16px 0' }}>
    <p>Here you can view and generate reports on waste collection, types of waste, and more.</p>
    {/* Add chart components or other report details */}
  </Card>
);

export default Reports;
