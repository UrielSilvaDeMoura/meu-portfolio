import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Entre em Contato</h2>
      <form>
        <label>
          Nome:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensagem:
          <textarea name="message" required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
