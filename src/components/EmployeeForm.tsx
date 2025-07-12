import React, { useState } from 'react';
import { createEmployee } from '../services/employeeService';

const EmployeeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEmployee({ name, position });
      alert('Employee created!');
      setName('');
      setPosition('');
    } catch (error) {
      console.error(error);
      alert('Error creating employee');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={position} onChange={e => setPosition(e.target.value)} placeholder="Position" required />
      <button type="submit">Create</button>
    </form>
  );
};

export default EmployeeForm;
