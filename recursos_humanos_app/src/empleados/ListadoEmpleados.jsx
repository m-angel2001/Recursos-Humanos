import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function ListadoEmpleados() {

  const urlBase = "http://localhost:8080/api/empleados";

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    try {
      const resultado = await axios.get(urlBase);
      console.log("Resultado de cargar empleados: ");
      console.log(resultado.data);
      setEmpleados(resultado.data);
    } catch (error) {
      console.error("Error al cargar empleados: ", error);
    }
  };

  return (
    <div className="container">
      <div className="Container text-center" style={{ margin: "30px" }}>
        <h3>Sistema de Recursos Humanos</h3>
      </div>

      {/*Tabla donde se muestran los empleados */}
      <table class="table table-striped table-hover align-midle">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
          </tr>
        </thead>
        <tbody>
          {
            //Iterar el arreglo de empleados

            empleados.map((empleado) => (
              <tr key={empleado.idEmpleado}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td>
                  <NumericFormat value={empleado.sueldo}
                  displayType={'text'}
                  thousandSeparator=',' prefix={'$'}
                  decimalScale={2} fixedDecimalScale/>
                  </td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  );
}
