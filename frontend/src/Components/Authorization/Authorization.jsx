import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { authConfig } from '../../Functions/auth';

function Authorization({ children }) {
  const [view, setView] = useState(<h2>Please wait...</h2>);

  useEffect(() => {
    axios.get('http://localhost:6174/login/login-check', authConfig())
      .then(res => 'ok' === res.data.msg ? setView(children) : setView(<Navigate to="/login" replace />))
  }, [children]);
  
  return view;
}

export default Authorization;