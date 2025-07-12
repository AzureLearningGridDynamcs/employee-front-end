import axios from 'axios';
import { Employee } from '../types/Employee';

const apiUrl = process.env.REACT_APP_API_URL;

//add header to the request
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  }
};
axios.defaults.headers.common = config.headers;


export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get(apiUrl + '/getEmployees');
  return response.data;
};

export const createEmployee = async (employee: Omit<Employee, 'id'>): Promise<Employee> => {
  const response = await axios.post(apiUrl + '/createEmployee', employee);
  return response.data;
};
