import { useState } from 'react';
import TextField from './TextField'
import { Button, FormControl, FormHelperText } from '@mui/joy';
import { InfoOutlined } from '@mui/icons-material';
import { Toast } from './Toast';

const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



const Form = () => {

  const [data, setData] = useState({ name: '', email: '', message: '' })
  const [formError, setFormError] = useState("");
  const [toastMessage, setToastMessage] = useState(""); 
  const [toastColor, setToastColor] = useState("success"); 
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email.match(emailRegex) || data.name.length <= 5 ) {
      setFormError("Por favor verifique su información nuevamente");
      setToastColor("danger");
      setToastMessage("Por favor verifique su información nuevamente");
    }else{
      setFormError("");
      console.log({data});
      setToastColor("success");
      setToastMessage(`Gracias ${data.name}, te contactaremos cuando antes vía mail`);
      setData({ name: '', email: '', message: '' });

    }
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} >
      <FormControl >
          <TextField
            type='email'
            placeholder='example@email.com'
            label='email'
            value={data.email}
            required={true}
            handleChange={handleChange}
          />
        </FormControl>
        <FormControl >
          <TextField
            type='text'
            placeholder='Max Doe'
            label='name'
            required={true}
            value={data.name}
            handleChange={handleChange}
          />
        </FormControl>
        <FormControl >
          <TextField
            type='text'
            placeholder='Escribe tu pregunta aquí'
            label='message'
            value={data.message}
            handleChange={handleChange}
            
          />
          {formError &&
          (
            <FormControl error >
              <FormHelperText>
                <InfoOutlined />
                {formError}
              </FormHelperText>
            </FormControl>
          )
          }
        </FormControl>

        <Button variant='solid'  type='submit' onClick={handleSubmit} >Send</Button>

        <Toast showToast={!!toastMessage} setShowToast={setToastMessage} message={toastMessage} color={toastColor} />

      </form>
    </div>
  );
};

export default Form;
