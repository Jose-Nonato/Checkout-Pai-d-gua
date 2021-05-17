import React from 'react';
import './Register.css';
import Fundo from '../../resources/bg-login.jpg';

//Importação vindo do Material UI
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Login() {
    return(
        <div className="container">
            <CardMedia
                className="img"
                component="img"
                alt="Contemplative Reptile"
                height="400"
                image={Fundo}
                title="Contemplative Reptile"
            />
            <div className="Card">
                <div className="txt">Seja Bem-Vindo!</div>
                <div className="input-area">
                    <TextField id="outlined-basic" label="Email" type="email" variant="outlined" />
                    <TextField id="outlined-basic" label="Senha" type="password" variant="outlined" />               
                </div>
                <div className="btn-area">
                    <Button variant="contained" color="secondary">Cancelar</Button>
                    <Button variant="contained" color="primary">Enviar</Button>
                </div>
            </div>
        </div>
    );
}