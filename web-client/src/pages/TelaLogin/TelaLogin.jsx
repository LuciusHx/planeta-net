import "./Telalogin.css";
import { useState } from "react";
import { z } from "zod";
import Logo from "../../components/Logo/Logo.jsx";

const loginSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export default function TelaLogin() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [erros, setErros] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // evita refresh da página

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const formatted = {};
      result.error.errors.forEach((err) => {
        formatted[err.path[0]] = err.message;
      });
      setErros(formatted);
      return;
    }

    setErros({});
    console.log("Login enviado:", formData);
  }

  return (
    <div className="tela-root flex">
      <div className="flex">
        <div>
          <Logo />
          <h1 className="brand">
            PLANETA NET <span className="dot-telecom">.TELECOM</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="forms">
          {/* email */}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
          />
          {erros.email && <p className="error-text">{erros.email}</p>}

          {/* senha */}
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            className="input-field"
            value={formData.senha}
            onChange={handleChange}
          />
          {erros.senha && <p className="error-text">{erros.senha}</p>}

          <button className="btn-login" type="submit">
            Entrar
          </button>
        </form>
      </div>

      {/* ícones da direita */}
      <div className="tela-options">
        <div className="user-icon">{/* teu SVG aqui */}</div>
        <div className="config-icon">{/* teu SVG aqui */}</div>
      </div>
    </div>
  );
}
