import React from 'react';

import './register_modal_styles.css';

const RegisterModal = () => {
  const closeModal = () => {
    const registerModal = document.getElementById('register_modal');
    registerModal.style.display = 'none';
  };

  return (
    <div id="register_modal" className="register_modal_background">
      <span className="close" onClick={ closeModal }>CLOSE!</span>
      <form className="register_modal">
        username:<br />
        <input type="text" />
        password:<br />
        <input type="text" />
      </form>
    </div>
  );
};

export default RegisterModal;