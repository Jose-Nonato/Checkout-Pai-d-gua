import React from 'react';
import './Login.css';
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
                alt="Tela de Fundo"
                height="400"
                image={Fundo}
                title="Tela de Fundo"
            />
            <div className="Card">
                <div className="txt">Seja Bem-Vindo!</div>
                <div className="input-area">
                    <TextField id="outlined-basic" label="Email" type="email" variant="outlined" />
                    <br/>
                    <TextField id="outlined-basic" label="Senha" type="password" variant="outlined" />               
                </div>
                <div className="btn-area">
                    <Button variant="contained" href="/" color="secondary">Cancelar</Button>
                    <Button variant="contained" color="primary">Enviar</Button>
                </div>
            </div>
        </div>
    );
}