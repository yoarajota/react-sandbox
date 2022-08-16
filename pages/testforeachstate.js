import { useEffect, useState } from "react";

export default function Home() {
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
    console.log(checkeds);
  }, [checkeds]);

  function treatCheckeds(checked, id) {
    if (checked) {
      setCheckeds([...checkeds, id]);
    } else {
      setCheckeds(checkeds.filter((item) => item !== id));
    }
  }

  return (
    <>
      <div>
        {state.users.map((item, index) => {
          return (
            <div style={{ display: "flex" }}>
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
    </>
  );
}
