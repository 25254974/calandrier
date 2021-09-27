package tech.getarrays.Authentification.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.Authentification.exception.UserNotFoundException;
import tech.getarrays.Authentification.model.Employee;
import tech.getarrays.Authentification.repo.EmployeeRepo;

import java.util.*;

@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;
    private Long id;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(Long id){
        return employeeRepo.findEmployeeById(id).orElseThrow(()-> new UserNotFoundException("User by id"+id+"was not found"));
    }

    public  Map<String, Boolean> deleteEmployee(Long id){
        Employee employee= employeeRepo.findEmployeeById(id).orElseThrow(()-> new UserNotFoundException("User by id"+id+"was not found"));
        employeeRepo.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;   }
}
