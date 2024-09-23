import { Alert } from "react-bootstrap";
import FormCadEntregador from "./Formularios/FormCadEntregador";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import { entregadores } from "../../dados/mockEntregadores";

export default function TelaCadastroEntregador(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregadores, setListaDeEntregadores] = useState(entregadores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        cnh:0,
        nome:"",
        email:"",
        endereco:"",
        telefone:"",
        placaVeiculo:"",
    });

    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="warning">
                    <h2>
                        Cadasto de Entregador
                    </h2>
                </Alert>
                {
                    exibirTabela ? 
                        <TabelaEntregadores
                        listaDeEntregadores={listaDeEntregadores}
                        setExibirTabela={setExibirTabela}
                        setListaDeEntregadores={setListaDeEntregadores}
                        setModoEdicao={setModoEdicao}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                        /> : 
                        <FormCadEntregador
                        listaDeEntregadores={listaDeEntregadores}
                        entregadorSelecionado={entregadorSelecionado}
                        modoEdicao={modoEdicao}
                        setExibirTabela={setExibirTabela}
                        setListaDeEntregadores={setListaDeEntregadores}
                        setModoEdicao={setModoEdicao}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                        />
                }
            </Pagina>
        </div>
    );
}