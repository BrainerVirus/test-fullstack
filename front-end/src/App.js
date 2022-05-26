import logo from "./logo.svg";
import "./App.css";
import CompShowAccount from "./features/cuentas/ShowAccounts.js";
import CompCreateAccount from "./features/cuentas/CreateAccount.js";
import CompEditAccount from "./features/cuentas/UpdateAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowAccount />} />
          <Route path="/create" element={<CompCreateAccount />} />
          <Route path="/edit/:id" element={<CompEditAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
