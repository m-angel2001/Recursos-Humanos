package gm.rh.servicio;

import gm.rh.modelo.Empleado;
import java.util.List;


public interface EmpleadoServicio {
    List<Empleado> listarEmpleados();
    Empleado obtenerEmpleadoPorid(Long id);
    Empleado guardarEmpleado(Empleado empleado);  // Crea o actualiza
    void eliminarEmpleado(Long id);
}
