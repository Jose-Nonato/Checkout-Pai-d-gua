import React from 'react';
import './style.css';

import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Imagem from '../../resources/selfcheckout.png'

export default function Start() {
    return(
        <div className="container">
            <div className="header">
                <div className="logo">
                    <div>Checkout</div>
                    <div className="sup">Pai d'égua</div>
                </div>
                <div className="btn">
                    <Button className="btn1 active" href="/Register">Cadastrar</Button>
                    <Button className="btn2" href="/Login">Login</Button>
                </div>
            </div>
            <div className="content">
                <div className="textBox">
                    <h1>Melhor programa de compras do Pará</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in enim commodo, aliquam turpis suscipit, cursus ex. Proin eros nulla, gravida ac malesuada quis, sagittis at ex. Ut a orci sit amet erat rhoncus blandit sit amet ac nibh. Donec eu mi nec purus cursus volutpat. Nullam augue felis, eleifend vitae justo non, placerat sodales nulla. Pellentesque nec consectetur odio.
                    </p>
                    <Button>Ler Mais</Button>
                </div>
                <div>
                    <CardMedia
                        className="img-principal"
                        component="img"
                        alt="Tela de Fundo"
                        image={Imagem}
                        title="Tela de Fundo"
                    />
                </div>
            </div>

            <div className="description">
                <div className="description-item" id="more">
                    <h2>O que é o Self-Checkout</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, euismod et lobortis eu, commodo sit amet neque. Mauris id risus tortor. Nulla vel metus nisi. Phasellus ornare faucibus massa. Fusce accumsan nisi quis diam aliquam tempus sit amet ac nisi. Curabitur convallis consectetur arcu. Fusce vehicula et enim vitae mattis. Integer nibh lorem, volutpat id nibh eu, tincidunt consequat nulla. Integer nisi est, accumsan nec sem eleifend, sagittis vestibulum nisl. Quisque et laoreet eros, sed ornare ligula. Praesent commodo ipsum eu mauris congue, non congue dolor volutpat. Curabitur finibus lacinia sapien eu porta. Nunc sit amet lectus eu dolor vulputate iaculis. Phasellus sed dui rhoncus, venenatis enim eget, porta dui. Mauris ut finibus felis.
                    </p>
                </div>
                <div className="description-item">
                    <h2>Nossa História</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, euismod et lobortis eu, commodo sit amet neque. Mauris id risus tortor. Nulla vel metus nisi. Phasellus ornare faucibus massa. Fusce accumsan nisi quis diam aliquam tempus sit amet ac nisi. Curabitur convallis consectetur arcu. Fusce vehicula et enim vitae mattis. Integer nibh lorem, volutpat id nibh eu, tincidunt consequat nulla. Integer nisi est, accumsan nec sem eleifend, sagittis vestibulum nisl. Quisque et laoreet eros, sed ornare ligula. Praesent commodo ipsum eu mauris congue, non congue dolor volutpat. Curabitur finibus lacinia sapien eu porta. Nunc sit amet lectus eu dolor vulputate iaculis. Phasellus sed dui rhoncus, venenatis enim eget, porta dui. Mauris ut finibus felis.
                    </p>
                </div>
                <div className="description-item">
                    <h2>Quem somos ?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi enim, euismod et lobortis eu, commodo sit amet neque. Mauris id risus tortor. Nulla vel metus nisi. Phasellus ornare faucibus massa. Fusce accumsan nisi quis diam aliquam tempus sit amet ac nisi. Curabitur convallis consectetur arcu. Fusce vehicula et enim vitae mattis. Integer nibh lorem, volutpat id nibh eu, tincidunt consequat nulla. Integer nisi est, accumsan nec sem eleifend, sagittis vestibulum nisl. Quisque et laoreet eros, sed ornare ligula. Praesent commodo ipsum eu mauris congue, non congue dolor volutpat. Curabitur finibus lacinia sapien eu porta. Nunc sit amet lectus eu dolor vulputate iaculis. Phasellus sed dui rhoncus, venenatis enim eget, porta dui. Mauris ut finibus felis.
                    </p>
                </div>
            </div>

            <div className="footer">
                <p>&copy Todos os direitos reservado - 2021</p>
            </div>

        </div>
    );
}