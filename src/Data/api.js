import { addDoc, collection } from "firebase/firestore";
import React from "react";

import { db } from "../Firebase/FirebaseConfig";
import { useForm } from "../Hooks/useForm";

const TraerApi = () => {
  // const api_key = "f9d470b2f20f7aca82045df1426f739b";
  // const api_url = "https://api.themoviedb.org/3/discover/movie?api_key=";
  // const image_path = "https://image.tmdb.org/t/p/w500";
  // const complete_api_url = "https://api.themoviedb.org/3/discover/movie?api_key=f9d470b2f20f7aca82045df1426f739b&page=4";

  let [values, handleInputChange, reset] = useForm({
    api: "",
    vueltas: "",
  });
  const { api, vueltas } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(api, vueltas);
    cargarApi(api, vueltas);
    reset();
  };

  const cargarApi = async (api, vueltas) => {
    for (let i = 1; i <= vueltas; i++) {
      const resp = await fetch(api);
      const data = await resp.json();
      console.log(data.results);
      enviarFirestore(data.results);
    }
  };

  const enviarFirestore = (data) => {
    data.forEach((card) => {
      const {
        id,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average,
        genre_ids,
      } = card;

      //asignar lo que tengo en mi api
      ///lo voy enviar a la colleccion de Firestore

      const cargar = {
        original_title: original_title,
        overview: overview,
        poster_path: poster_path,
        release_date: release_date,
        vote_average: vote_average,
        genre_ids: genre_ids,
        id: id,
      };

      addDoc(collection(db, "movies"), cargar)
        .then((resp) => {
          console.log("dato cargado");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <h1>Enviar Api a firebase</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="vueltas"
          placeholder="Ingresa el numero de veces a cargar la api"
          value={vueltas}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="api"
          placeholder="Ingrese url de api"
          value={api}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default TraerApi;
