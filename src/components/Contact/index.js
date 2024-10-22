import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

const Contact = () => {
  const form = useRef();

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar el formato de email
    const domain = email.split('@')[1]; // Obtener la parte del dominio
    // Verificar que el dominio termine con .com y no tenga nada después
    return emailRegex.test(email) && domain === 'gmail.com'; // Cambiar 'gmail.com' por cualquier dominio que desees permitir
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const emailField = form.current.reply_to.value;

    // Validar el correo electrónico antes de enviar
    if (!validateEmail(emailField)) {
      alert('Por favor, introduce un correo electrónico válido que termine en .com y no contenga caracteres adicionales después.');
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado con éxito');
    }, (error) => {
        console.log(error.text);
        alert('Error al enviar el mensaje');
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Nombre" required />
        <input type="email" name="reply_to" placeholder="Email" required />
        <textarea name="message" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
