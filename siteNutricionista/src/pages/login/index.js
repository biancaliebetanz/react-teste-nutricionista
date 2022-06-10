import './index.scss'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Index() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    
    async function entrarClick() {
        try {
            const r= await axios.post('/usuario/login', {
                email: email, 
                senha: senha
            })
            if (r.status === 401){
                setErro(r.data.erro);
            }
            else {
                Navigate('/admin');
            }
        } catch (err) {
            if (err.response.status === 401){
                setErro(err.response.data.erro)
            }
        }
        

    return (
        <main className="Page-Login">

            <section class="faixa faixa1 fb-row">
            <img class="imagem-f1" src="/images/ffe3e452b6c0023c81707eba9375c69e.jpg" alt=""/>
            <div class="fb-column sub-f1">
            <h1 class="titulo">Acesse sua conta</h1>
            <div>
                <h2 class="subtitulo"> E-mail</h2>
                <input class="tag-input" type="text" name="email" id="" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <h2 class="subtitulo">Senha</h2>
                <input class="tag-input" type="password" name="senha" id="" value={senha} onChange={ e => setSenha(e.target.value)}/>
            </div>


            <Link className='botao'
             onClick={entrarClick}> Login </Link>
            <div>
                <h2>

                </h2>
            </div>
            <Link className='voltar' to="../"> Página Inicial </Link>
            </div>
            </section>
        </main>
    )
}}