import React, { useRef, useEffect } from 'react';

function UncontrolledLogin(props) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberMeRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const rememberMe = rememberMeRef.current.checked;

    props.onLogin({ username, password, rememberMe });
  };

  const handleReset = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    rememberMeRef.current.checked = false;
    usernameRef.current.focus();
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <div>
        <label htmlFor="rememberMe">Remember me:</label>
        <input type="checkbox" id="rememberMe" ref={rememberMeRef} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default UncontrolledLogin;