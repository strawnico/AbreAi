import { db } from "../../utils/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [demandas, setDemandas] = useState([]);

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
  return (
    <div>
      <main>
        <div>{demandas.map((demanda) => (
            <div key={demanda.id}>{demanda.plate}</div>
        ))}</div>
      </main>
    </div>
  );
}
