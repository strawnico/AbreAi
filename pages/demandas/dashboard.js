import { db } from "../../utils/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [demandas, setDemandas] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "demandas"));

    const lista = [];
    const date = new Date().toLocaleTimeString();

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
        <h1 className="ml-5 my-5 text-2xl font-medium">Dashboard</h1>
        <div>
          {demandas.map((demanda) => (
            <div
              key={demanda.id}
              className={` bg-gray-100 mx-5 mt-3 rounded-lg h-28 ${
                demanda.arrivePrevista <= demanda.arrive
                  ? "border-l-8 border-green-600"
                  : "border-l-8 border-red-600"
              }`}
            >
              <p className="">{demanda.plate}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
