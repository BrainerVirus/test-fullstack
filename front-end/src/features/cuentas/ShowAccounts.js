import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8080/cuentas/";

const CompShowAccount = () => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getCuentas();
  }, []);

  //procedimiento para mostrar los datos de la cuenta
  const getCuentas = async () => {
    const res = await axios.get(URI);
    setAccounts(res.data);
  };

  const deleteCuenta = async (id) => {
    await axios.delete(`${URI}${id}`);
    getCuentas();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            Crear
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>User</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.user}</td>
                  <td>{account.password}</td>
                  <td>
                    <Link to={`/edit/${account.id}`} className="btn btn-info">
                      Editar
                    </Link>
                    <button
                      onClick={() => deleteCuenta(account.id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CompShowAccount;
