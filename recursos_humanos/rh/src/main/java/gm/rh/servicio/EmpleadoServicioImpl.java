package gm.rh.servicio;

import gm.rh.modelo.Empleado;
import gm.rh.repositorio.EmpleadoRepositorio;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional

public class EmpleadoServicioImpl implements EmpleadoServicio {

    private final EmpleadoRepositorio empleadoRepositorio;

    public EmpleadoServicioImpl(EmpleadoRepositorio empleadoRepositorio) {
        this.empleadoRepositorio = empleadoRepositorio;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Empleado obtenerEmpleadoPorId(Long id) {
        return empleadoRepositorio.findById(id).orElse(null);
    }

    @Override
    public Empleado  guardarEmpleado(Empleado empleado) {
        return empleadoRepositorio.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Long id) {
        empleadoRepositorio.deleteById(id);
    }
}
