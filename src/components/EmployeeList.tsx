import React, { useEffect, useState } from 'react';
import { Employee } from '../types/Employee';
import { getEmployees } from '../services/employeeService';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployees().then(setEmployees).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
