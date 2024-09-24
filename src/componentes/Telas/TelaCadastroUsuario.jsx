import { Alert } from "react-bootstrap";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import { usuarios } from "../../dados/mockUsuarios";

export default function TelaCadastroUsuario(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo:0,
        nome:"",
        email:"",
        senha:"",
        dataCadastro:""
    });

    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="info">
                    <h2>
                        Cadasto de Usuário
                    </h2>
                </Alert>
                {
                    exibirTabela ? 
                        <TabelaUsuarios
                        listaDeUsuarios={listaDeUsuarios}
                        setExibirTabela={setExibirTabela}
                        setListaDeUsuarios={setListaDeUsuarios}
                        setModoEdicao={setModoEdicao}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        /> : 
                        <FormCadUsuario 
                        listaDeUsuarios={listaDeUsuarios}
                        usuarioSelecionado={usuarioSelecionado}
                        modoEdicao={modoEdicao}
                        setExibirTabela={setExibirTabela}
                        setListaDeUsuarios={setListaDeUsuarios}
                        setModoEdicao={setModoEdicao}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        />
                }
            </Pagina>
        </div>
    );
}