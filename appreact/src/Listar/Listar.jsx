import { useState, useEffect } from 'react';
import './listar.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Função para lidar com o logout
  const handleLogout = () => {
    // Limpe o token de autenticação do armazenamento local
    localStorage.removeItem('token');
    // Redirecione o usuário para a página de login ou onde desejar
    window.location.href = '/'; // Ou outra rota apropriada
  };

  useEffect(() => {
    fetch('http://localhost:8000/listar', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.erro === false) {
        setUsers(data.users);
        setError(null);
      } else {
        setUsers([]);
        setError(data.mensagem);
      }
    })
    .catch(error => {
      setError('Erro ao conectar com o servidor.');
    });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      
      <button onClick={handleLogout}>Sair</button>

      {error ? (
        <div>{error}</div>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>ID:</strong> {user.id}<br />
              <strong>Nome:</strong> {user.name}<br />
              <strong>E-mail:</strong> {user.email}<br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;

