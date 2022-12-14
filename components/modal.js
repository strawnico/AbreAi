import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import ReactDom from "react-dom";
import { db } from "../utils/firebase.js";
import Image from "next/image.js";
import update from "../assets/update.svg";
import close from "../assets/close.svg";
import { async } from "@firebase/util";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Modal({ show, onClose, demanda }) {
  const [isBrowser, setIsBrowser] = useState(true);
  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    setIsBrowser(true);
  }, [demanda]);

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  const deleteDemanda = async () => {
    const querySnapshot = await deleteDoc(doc(db, "demandas", demanda.id));
    alert("A demanda foi excluida");
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
        <div className="flex justify-end text-2xl text-black"></div>
        <div className="mt-5 center pl-6 flex-col">
          <div className="flex mb-2">
            <h1 className=" text-xl font-bold">Informações</h1>
            <div className="flex mx-auto mr-5">
              <Image
                onClick={() =>
                  (location.pathname = `demandas/update/${demanda.id}`)
                }
                width={30}
                className="cursor-pointer"
                src={update}
                alt="Edit button"
              />
              <Image
                onClick={handleClose}
                width={30}
                className="cursor-pointer ml-3"
                src={close}
                alt="Close button"
              />
            </div>
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
          <div className="mr-5 mt-2">
            <button
              onClick={() => deleteDemanda()}
              className=" text-md text-red-500 py-2 justify-center flex mx-auto border-2 border-red-500 rounded-md w-full"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : null;
  return modalContent;
}
