import React, { useState } from 'react';
import Cookies from 'js-cookie';

async function loginUser(credentials, setError) {
  debugger
  return fetch(`${process.env.backend_url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .then((data) => {
      if (data.success) {
        console.log('Connecté');
        Cookies.set('isLoggedIn', 'true');
      } else {
        setError('Nom d\'utilisateur ou mot de passe invalide');
      }
    })
    .catch(() => {
      setError('Une erreur est survenue. Veuillez réessayer.');
    });
}

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    }, setError);
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <form onSubmit={handleSubmit} className="form-signin">
        <h2 className="h3 mb-3 font-weight-normal text-center">Connexion</h2>
        {error && <div>{error}</div>}
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control mb-3"
          required autoFocus
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
      </form>
    </div>
  );
};
