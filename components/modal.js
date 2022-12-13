import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ReactDom from "react-dom";
import { db } from "../utils/firebase.js";
import Image from "next/image.js";
import update from "../assets/update.svg";
import delet from "../assets/delete.svg";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Modal({ show, onClose, demanda }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    setIsBrowser(true);
  }, [demanda]);

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "demandas"));

    const lista = [];

    querySnapshot.forEach((doc) => {
      lista.push({ ...doc.data(), id: doc.id });
    });

    setDemandas(lista);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const modalContent = show ? (
    <section className="fixed top-0 w-full h-full flex bg-black bg-opacity-70">
      <div className="WppModal mb-0 w-full max-w-3xl rounded-t-2xl m-auto h-60 bg-white z-50">
        <div className="flex justify-end text-2xl text-black">
          <a href="#" onClick={handleClose} className=" mt-2 mr-3">
            X
          </a>
        </div>
        <div>
          <div className="center pl-10 flex-col">
            <div className="flex">
              <h1 className="mb-2 text-xl font-bold">Informações</h1>
              <Image className="ml-20" src={update} alt="Picture of the author" />
              <Image src={delet} alt="Picture of the author" />
            </div>

            <div>
              <span className=" font-semibold">Entrega em:</span>{" "}
              <span>{demanda.address}</span>
            </div>

            <div>
              <span className=" font-semibold">Hora prevista de saída:</span>{" "}
              <span>{demanda.exitPrevista}</span>
            </div>

            <div>
              <span className=" font-semibold">Hora prevista de chegada:</span>{" "}
              <span>{demanda.arrivePrevista}</span>
            </div>

            <div>
              <span className=" font-semibold">Entregador:</span>{" "}
              <span>{demanda.name}</span>
            </div>

            <div>
              <span className=" font-semibold">Placa:</span>{" "}
              <span>{demanda.plate}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
  return modalContent;
}
