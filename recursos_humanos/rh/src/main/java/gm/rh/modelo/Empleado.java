package gm.rh.modelo;

import jakarta.persistence.*;

@Entity
@Table(name = "Empleado")
// CLASE //
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmpleado;

    private String nombre;
    private String departamento;
    private Double sueldo;
    // Constructores

    public Empleado() {

    }
    public Empleado(Long idEmpleado, String nombre, String departamento, Double sueldo) {
        this.idEmpleado = idEmpleado;
        this.nombre = nombre;
        this.departamento = departamento;
        this.sueldo = sueldo;

    }

    public Empleado(String nombre, String departamento, Double sueldo) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.sueldo = sueldo;

    }

    // METODOS GET Y SET

    public Long getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(Long idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getNombre() {
        return nombre;
    }

    public String getdepartamento() {
        return departamento;
    }

    public void setdepartamento(String departamento) {
        this.departamento = departamento;
    }

    public Double getsueldo() {
        return sueldo;
    }

    public void setsueldo(Double sueldo) {
        this.sueldo = sueldo;
    }

    // to String

    @Override
    public String toString() {
        return "Empleado{" +
                "idEmpleado" + idEmpleado +
                ", nombre" + nombre + '\'' +
                ", departamento= " + departamento + '\'' +
                ", sueldo= " + sueldo +
                '}';


    }
}
