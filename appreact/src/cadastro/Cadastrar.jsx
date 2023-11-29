import './cadastro.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/cadastrar', userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <div>
      <h2>Cadastre-se</h2>
      <input type="text" name="name" placeholder="Nome" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Senha" onChange={handleChange} />
      <button onClick={handleRegister}>Cadastrar</button>
      <p>ja sou cadastrado? <Link to="/">Faca o Loguin</Link></p>
    </div>
  );
}

export default Register;
