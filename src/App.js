import Pagina from "./componentes/layouts/Pagina";
import TelaCadastroProduto from "./componentes/Telas/TelaCadastroProduto";
import TelaCadastroCategoria from "./componentes/Telas/TelaCadastroCategoria";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaCadastroEntregador from "./componentes/Telas/TelaCadastroEntregador";
import TelaCadastroCliente from "./componentes/Telas/TelaCadastroCliente";
import TelaCadastroFornecedor from "./componentes/Telas/TelaCadastroFornecedor";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { 
        }
        <Routes>
          <Route path="/produto" element={<TelaCadastroProduto />} />
          <Route path="/categoria" element={<TelaCadastroCategoria />} />
          <Route path="/usuario" element={<TelaCadastroUsuario/>} />
          <Route path="/entregador" element={<TelaCadastroEntregador/>} />
          <Route path="/cliente" element={<TelaCadastroCliente />} />
          <Route path="/fornecedor" element={<TelaCadastroFornecedor />} />
          <Route path="/" element={<TelaMenu />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
