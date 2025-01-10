import { useEffect, useState } from "react";
import dados from "./data/dados.json";

interface DiaFaturamento {
  dia: number;
  valor: number;
}

interface ResultadoFaturamento {
  menorValor: number | null;
  maiorValor: number | null;
  diasAcimaMedia: number;
}

function App() {
  const [resultado, setResultado] = useState<ResultadoFaturamento>({
    menorValor: null,
    maiorValor: null,
    diasAcimaMedia: 0,
  });

  useEffect(() => {
    const calcularResultados = () => {
      const diasValidos: DiaFaturamento[] = dados.filter((dia) => dia.valor > 0);

      const menorValor = Math.min(...diasValidos.map((dia) => dia.valor));
      const maiorValor = Math.max(...diasValidos.map((dia) => dia.valor));

      const somaFaturamento = diasValidos.reduce((acc, dia) => acc + dia.valor, 0);
      const mediaMensal = somaFaturamento / diasValidos.length;

      const diasAcimaMedia = diasValidos.filter((dia) => dia.valor > mediaMensal).length;

      setResultado({ menorValor, maiorValor, diasAcimaMedia });
    };

    calcularResultados();
  }, []);

  return (
    <section style={{width:'100vw', height:"100%"}}>
      <div style={{ width:'fit-content', margin:'0px auto', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}}>
        <h1>Resultados do Faturamento</h1>
        <p>Menor valor de faturamento: {resultado.menorValor}</p>
        <p>Maior valor de faturamento: {resultado.maiorValor}</p>
        <p>Número de dias acima da média: {resultado.diasAcimaMedia}</p>
      </div>
    </section>
  );
}

export default App;
