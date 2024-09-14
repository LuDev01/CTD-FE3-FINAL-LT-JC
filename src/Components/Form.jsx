import { useState } from 'react';
import TextField from './TextField'
import { FormControl } from '@mui/joy';

const Form = () => {

const [data, setData] = useState({name:'',email:''})

const handleChange=(e)=>{

  e.preventDefault();
  setData({...data,[e.target.name]:e.target.value})

}

const [prueba, setPrueba] = useState("")

  return (
    <div>
      <form>
        <FormControl sx={{marginBottom:'20px'}}>
          <TextField
            type='text'
            placeholder='Max Doe'
            label='name'
          //  value={data.name}
          //  handleChange={handleChange}
          />
        </FormControl>

        <TextField
          type='email'
          placeholder='example@email.com'
          label='email'
          value={prueba}
          handleChange={(e)=>{setPrueba(e.target.value)}}
        />
      </form>
    </div>
  );
};

export default Form;
