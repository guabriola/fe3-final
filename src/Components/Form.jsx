import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userAsk, setUserAsk] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMail = (e) => setUserMail(e.target.value);
  const onChangeAsk = (e) => setUserAsk(e.target.value);
  

  const validUserName = (userName) => {
    const wihtoutSpaces = userName.trim();
    if (wihtoutSpaces.length > 5){
      return true;
    }else {
      console.log('El usuario tiene que tener mas de 5 caracteres')
      return false
    }
  }

  const validUserMail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const validUserAsk = (query) => {
    if (query.length >= 20 && query.length <= 200){
      return true
    }else {
      console.log("El texto de la consulta debe tener mas de 20 caracteres y menos de 200")
      return false
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (validUserName(userName) && validUserMail(userMail) && validUserAsk(userAsk)){
      console.log(`===> User submitted a new query <===`);
      console.log(`User: ${userName}`);
      console.log(`Email: ${userMail}`);
      console.log(`Query: ${userAsk}`)
      setShow(true)
      setError(false)
      //alert(`Thanks ${userName}, we will contact you as soon as possible via email`);
    } else {
      setError(true)
      }
    };

  return (
    <div>
      { !show && 
        <form onSubmit={onSubmitForm}>

          <input
            type="text"
            placeholder="Nombre de usuario"
            value={userName}
            onChange={onChangeUserName}
          />
          
          <input
            type="mail"
            placeholder="Email"
            value={userMail}
            onChange={onChangeMail}
          />

          <textarea
            rows={4} cols={40}
            placeholder="Write here what you want to ask"
            value={userAsk}
            onChange={onChangeAsk}
          />
          
          <button type="submit">Enviar</button>
        </form>
      }  

      {
        show ? 
          <div>
            <h3>Thanks {userName}, we will contact you as soon as possible via email`</h3>
            <Link to="/Routes/Contact" >Ask Again</Link>
          </div>
          : null
      }
      
      {
        error &&  
          <div>
            <h5 style={{color: 'red'}}> -The name must have more than 5 letters `</h5>
            <h5 style={{color: 'red'}}>-The email must be in the correct format `</h5>
            <h5 style={{color: 'red'}}>-The text must have more than 20 characters and less than 200`</h5>
          </div>
      }

    </div>
  );
};

export default Form;
