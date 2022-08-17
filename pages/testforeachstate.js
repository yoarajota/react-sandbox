import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Home() {
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

  const [previewImoveis, setPreviewImoveis] = useState([]);

  function handleFilter(id, imovel) {
    state.users.forEach((item, index) => {
      if (item.id === id) {
        item.id_imoveis.push(imovel);
      }
    });
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

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
        initialValues={{ nome: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (selected.length > 0) {
            setState((prevState) => ({
              ...prevState,
              imoveis: {
                ...prevState.imoveis,
              },
            }));
            resetForm();
          } else {
            alert("Selecione ao menos um imóvel");
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="nome" />
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
                  ? setSelected((prevState) => [...prevState, item.id])
                  : setSelected(selected.filter((s) => s !== item.id));
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
          return <p>{item}</p>;
        })}

      {selected !== [] &&
        selected?.map((item) => {
          return item;
        })}
    </>
  );
}
