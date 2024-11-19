import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RequireAuth({ children }) {
  let auth = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate('/login');
    }
  }, [auth, navigate]);

  return children;
}

export default RequireAuth;