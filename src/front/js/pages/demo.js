import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      {store.login ? (
        <>
          <ul className="list-group">
            {store.demo.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
                style={{ background: item.background }}
              >
                <Link to={"/single/" + index}>
                  <span>Link to: {item.title}</span>
                </Link>
                {item.background === "orange" ? (
                  <p style={{ color: item.initial }}>
                    Check store/flux.js scroll to the actions to see the code
                  </p>
                ) : null}
                <button
                  className="btn btn-success"
                  onClick={() => actions.changeColor(index, "orange")}
                >
                  Change Color
                </button>
              </li>
            ))}
          </ul>
          <br />
          <Link to="/">
            <button className="btn btn-primary">Back home</button>
          </Link>
        </>
      ) : (
        <Navigate to="/login" /> //Redirige a /login si no esta autenticado
      )}
    </div>
  );
};

export default Demo;
