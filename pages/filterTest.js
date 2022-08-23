import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import onlyUnique from "../public/useful/utils";

export default function filterTest() {
  const [selected, setSelected] = useState([]);
  const [checkeds, setCheckeds] = useState([]);

  const [state, setState] = useState({
    users: [
      {
        nome: "João",
        id: 1,
        idade: 3,
        id_imoveis: [],
      },
      {
        nome: "Tárcio",
        id: 2,
        idade: 33333333,
        id_imoveis: [],
      },
    ],

    imoveis: [
      {
        id: 1,
        nome_imovel: "Casa",
      },
      {
        id: 1,
        nome_imovel: "Praia",
      },
    ],
  });

  const previewImoveis = handleFilter();
  function handleFilter() {
    
    var selectedsIds = [];
    selected.forEach((item) => {
      item.id_imoveis.forEach((id) => {
        selectedsIds.push(id);
      });
    });

    selectedsIds.filter(onlyUnique);
    var imoveis = [];
    if (selected.length > 0) {
      imoveis = state.imoveis.filter((item) => selectedsIds.includes(item.id));
    }

    return imoveis;
  }

  function treatAddImovel(values) {
    var newId = state.imoveis.length + 1;
    values["id"] = newId;

    var val = {};
    setState((prevState) => {
      val = prevState.users;
      return prevState;
    });

    const treatedValues = val.map((item) => {
      if (checkeds.includes(item.id)) {
        item["id_imoveis"].push(newId);
        return item;
      } else return item;
    });

    setState((prevState) => ({
      users: treatedValues,
      imoveis: [...prevState["imoveis"], values],
    }));
  }

  function treatCheckeds(checked, id) {
    if (checked) {
      setCheckeds([...checkeds, id]);
    } else {
      setCheckeds(checkeds.filter((item) => item !== id));
    }
  }

  return (
    <>
      <Formik
        initialValues={{ nome_imovel: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (checkeds.length > 0) {
            treatAddImovel(values);
            resetForm();
          } else {
            alert("Selecione ao menos um usssssssssssssssers");
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="nome_imovel" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <div>
        {state.users.map((item, index) => {
          const [active, setActive] = useState(false);

          return (
            <div
              onClick={() => {
                setActive(!active);
                !active
                  ? setSelected((prevState) => [...prevState, item])
                  : setSelected(selected.filter((s) => s !== item));
              }}
              style={{
                display: "flex",
                width: "200px",
                border: "1px solid white",
                color: active ? "white" : "black",
                backgroundColor: active ? "red" : "white",
              }}
            >
              <input
                type="checkbox"
                name={item.nome}
                onChange={(e) => treatCheckeds(e.target.checked, item.id)}
              />
              <p>{item.nome}</p>
            </div>
          );
        })}
      </div>
      {previewImoveis &&
        previewImoveis?.map((item) => {
          return (
            <p>
              {item.nome_imovel}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "white",
                }}
              ></div>
            </p>
          );
        })}
    </>
  );
}
