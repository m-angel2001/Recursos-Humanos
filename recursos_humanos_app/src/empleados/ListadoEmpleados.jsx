import React from "react";

export default function ListadoEmpleados() {
  return (
    <div className="container">
      <div className="Container text-center" style={{margin: "30px"}}>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
