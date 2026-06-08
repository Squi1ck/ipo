import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspecoes">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>
      </div>
    </div>
  );
}

// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Centro de Inspeções de Automóveis</h1>
        <p>IPO - ESDS1</p>
      </div>
    </div>
  );
}
function ClientesList() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Clientes</h2>
        <div className="btn-group">
          <button className="btn btn-primary btn-dark">
            <i className="fa fa-plus"></i> Novo Cliente
          </button>
          <button className="btn btn-secondary btn-light">
            <i className="fa fa-refresh"></i> Atualizar
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>codigo</th>
              <th>nome</th>
              <th>morada</th>
              <th>nif</th>
              <th>opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Julio pinho</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <td>1234567890</td>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-eye"></i></button>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-pencil"></i></button>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-trash"></i></button>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
              <td>231248129342</td>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-eye"></i></button>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-pencil"></i></button>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-trash"></i></button>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
              <td>1234567890</td>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-eye"></i></button>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-pencil"></i></button>
              <button className="btn btn-primary btn-dark mr-1"><i className="fa fa-trash"></i></button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}
function InspecoesList() {
  return (<h2>Página de Inspeções</h2>);
}

export default App