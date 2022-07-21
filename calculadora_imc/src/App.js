import { useState } from "react";
import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem("Seu IMC é " + imc.toFixed(2) + " Você está Abaixo do peso!");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMensagem(
        "Seu IMC é " + imc.toFixed(2) + " Você está com o peso Normal!"
      );
    } else if (imc >= 25 && imc <= 29.9) {
      setMensagem("Seu IMC é " + imc.toFixed(2) + " Você está com Sobrepeso!");
    } else if (imc >= 30 && imc <= 34.9) {
      setMensagem(
        "Seu IMC é " + imc.toFixed(2) + " Você está com Obesidade Grau I!"
      );
    } else if (imc >= 35 && imc <= 39.9) {
      setMensagem(
        "Seu IMC é " + imc.toFixed(2) + " Você está com Obesidade Grau II!"
      );
    } else {
      setMensagem(
        "Seu IMC é " +
          imc.toFixed(2) +
          " Você está com Obesidade Grau III ou Mórbida!"
      );
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos Calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso (kg)  Ex: 70"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura (m)  Ex: 160"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <div>
        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}
