import React from 'react';
import './Register.css';
import Fundo from '../../resources/bg-login.jpg';

//Importação vindo do Material UI
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

export default function Register() {

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

    return(
        <div className="container">
            <CardMedia
                className="img"
                component="img"
                alt="Tela de Fundo"
                height="400"
                image={Fundo}
                title="Tela de Fundo"
            />
            <div className="Card">
                <div className="txt">Registro</div>
                <div className="input-area">
                    <TextField className="input" id="outlined-basic" label="Email" type="email" variant="outlined" />
                    <br/>
                    <TextField className="input" id="outlined-basic" label="CPF" type="number" variant="outlined" /> 
                    <br/>
                    <TextField className="input" id="outlined-basic" label="Senha" type="password" variant="outlined" />               
                </div>
                <div className="btn-area">
                    <Button variant="contained" color="secondary" href="/">Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>Confirmar</Button>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="Conta criada com sucesso!"
                key={vertical + horizontal}
            />
        </div>
    );
}