import { useState } from 'react';
import './loguin.css';
import { Link } from 'react-router-dom'; 
function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify(formDataObject),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      setErrorMessage(data.mensagem);

      if (!data.erro) {
        localStorage.setItem('token', data.token);
        setErrorMessage(''); // Clear error message
        window.location.href = '/listar';
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('Erro na requisição. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className="container">
      <h1>Entrar</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="email" id="loginEmail" name="email" placeholder="E-mail" required />
        <input type="password" id="loginPassword" name="password" placeholder="Senha" required />
        <button type="submit">Loguin</button>
      </form>
      <p id="error">{errorMessage}</p>
      <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
    </div>
  );
}

export default LoginForm;
