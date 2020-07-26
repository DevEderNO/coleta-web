import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";

import "./styles.css";
import logo from "../../assets/logo.svg";
import api from "./../../services/api";

interface Item {
  id: number;
  image_url: string;
  title: string;
}

interface IBGEUF {
  sigla: string;
}

interface IBGECity {
  nome: string;
}

const CreateItens = () => {
  
  
  async function handleSubmit(event: FormEvent) {
    // const { name, email, whatsapp } = formData;
    // const uf = selectedUf;
    // const city = selectedCity;
    // const [latitude, longitude] = selectedPosition;
    // const items = selectedItems;

    // const data = {
    //   name,
    //   email,
    //   whatsapp,
    //   uf,
    //   city,
    //   latitude,
    //   longitude,
    //   items,
    // };

    // await api.post("/points", data);

    // alert('Ponto de coleta criado com sucesso!')

    // event.preventDefault();

    // history.push('/');
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para a home
        </Link>
      </header>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de item a ser coletado</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="image">Imagem</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={() => {}}
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={() => {}}
              />
            </div>
          </div>
        </fieldset>
        
        <button type="submit">Cadastrar ponto de Coleta</button>
      </form>
    </div>
  );
};

export default CreateItens;
