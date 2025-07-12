import React from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Manager</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default App;
