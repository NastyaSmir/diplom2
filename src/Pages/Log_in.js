import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Log_in({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className='container'>
      {/* <img
                    className="image"
                    height='100%'
                    src={backgroundImg}
                    alt="Background"
                /> */}
      <h3 className='title'>Вход</h3>
      <p>Здесь вы можете войти в свой аккаунт и оформить грузоперевозку. </p>
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            <h6>Логин: </h6> <input type="login" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <h6>Пароль: </h6> <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}
Log_in.propTypes = {
  setToken: PropTypes.func.isRequired
}