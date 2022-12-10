import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { db } from "../../utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [placa, setPlaca] = useState("");
  const [endereco, setEndereco] = useState("");
  const [entregador, setEntregador] = useState("");
  const [saidaPrevista, setSaidaPrevista] = useState("");
  const [chegadaPrevista, setChegadaPrevista] = useState("");
  const [chegada, setChegada] = useState("");

  const addDemand = async () => {
    if (placa.length < 7) {
      alert("A placa precisa ter no mínimo 7 caracteres.");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "demandas"), {
        plate: placa.toUpperCase(),
        adress: endereco,
        name: entregador,
        exitPrevista: saidaPrevista,
        arrivePrevista: chegadaPrevista,
        arrive: chegada,
        
      });
      window.location.pathname = "demandas/dashboard";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>AbreAi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <nav className="w-full justify-center flex mt-4 relative">
          <div className="ml-4  mr-auto">
            <Link href="/">
              <span className=" material-icons text-3xl text-[#349924]">
                navigate_before
              </span>
            </Link>
          </div>
          <div className="mr-auto absolute">
            <h1 className="text-2xl font-medium">Cadastrar demanda</h1>
          </div>
        </nav>
        <div className="w-full flex flex-col items-center mt-8">
          <div className="max-w-sm min-w-max w-4/5 text-left">
            <p>Local de entrega</p>
            <input
              onChange={(e) => setEndereco(e.target.value)}
              className="w-full max-w-sm min-w-max border border-gray-400 outline-none hover:border-green-400 rounded-xl pl-5 py-2"
              placeholder="Digite o endereço da entrega"
            ></input>
          </div>

          <div className="max-w-sm min-w-max w-4/5 text-left mt-4">
            <p>Nome do entregador</p>
            <input
              onChange={(e) => setEntregador(e.target.value)}
              className="w-full max-w-sm min-w-max border border-gray-400 outline-none hover:border-green-400 rounded-xl pl-5 py-2"
              placeholder="Ex: Luis Crisvaldo"
            ></input>
          </div>

          <div className="max-w-sm min-w-max w-4/5 text-left mt-4">
            <p>Placa do carro</p>
            <input
              onChange={(e) => setPlaca(e.target.value)}
              className="w-full max-w-sm min-w-max border border-gray-400 outline-none hover:border-green-400 rounded-xl pl-5 py-2 uppercase"
              placeholder="XXXXXXX"
            ></input>
          </div>

          <div className="max-w-sm min-w-max text-left flex justify-between w-4/5 mt-4">
            <div>
              <p>Horario saída</p>
              <input
                onChange={(e) => setSaidaPrevista(e.target.value)}
                className=" w-36 border border-gray-400 outline-none hover:border-green-400 rounded-xl pl-5 py-2"
                placeholder="00:00"
              ></input>
            </div>
            <div>
              <p>Horario Chegada</p>
              <input
                onChange={(e) => setChegadaPrevista(e.target.value)}
                className=" w-36 border border-gray-400 outline-none hover:border-green-400 rounded-xl pl-5 py-2"
                placeholder="00:00"
              ></input>
            </div>
          </div>
        </div>

        <div className="justify-center flex mt-auto mb-10">
          <button
            onClick={() => addDemand()}
            className="text-white w-4/5 max-w-sm min-w-max bg-[#349924] px-2 rounded-xl mt-2 pl-5 py-4"
          >
            Finalizar
          </button>
        </div>
      </main>
    </div>
  );
}
