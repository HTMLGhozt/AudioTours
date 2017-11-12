import React from 'react';

import './styles_login_modal.css';

const LoginModal = () => {
  const closeModal = () => {
    const loginModal = document.getElementById('login_modal');
    loginModal.style.display = 'none';
  };

  return (
    <div id="login_modal" className="login_modal_background">
      <span className="close" onClick={ closeModal }>CLOSE!</span>
      <form className="login_modal">
        username:<br />
        <input type="text" />
        password:<br />
        <input type="text" />
      </form>
    </div>
  );
};

export default LoginModal;