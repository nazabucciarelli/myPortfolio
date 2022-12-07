/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoEducacion;
import com.nbucciarelli.nbucciarelli.Entity.Educacion;
import com.nbucciarelli.nbucciarelli.Services.EducacionService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nazareno
 */
@RestController
@RequestMapping ("educacion")
@CrossOrigin(origins = "https://nbucciarelli.web.app")
public class EducacionController {
    @Autowired
    EducacionService eduService;
    
    
    @GetMapping("/traer")
    public List<Educacion> getAllEducacion(){
        return eduService.getEducacion();
    }
    
    @GetMapping("/traer/{id}")
    public Optional<Educacion> getEducacionById(@PathVariable Long id){
        return eduService.getEducacionById(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PostMapping("/agregar")
    public ResponseEntity<?> addEducacion(@RequestBody Educacion edu){
        eduService.saveEducacion(edu);
        return new ResponseEntity("Educación agregada exitosamente",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PutMapping("/editar/{id}")
    public ResponseEntity<?> editEducacion(@PathVariable Long id, @RequestBody dtoEducacion nuevaEdu){
        Educacion edu = eduService.getEducacionById(id).orElse(null);
        
        String nuevoNombre = nuevaEdu.getNombre();
        String nuevaDescripcion = nuevaEdu.getDescripcion();
        String nuevoPeriodo = nuevaEdu.getPeriodo();
        String nuevoLogoEducacion = nuevaEdu.getLogo_educacion();
        
        edu.setNombre(nuevoNombre);
        edu.setDescripcion(nuevaDescripcion);
        edu.setPeriodo(nuevoPeriodo);
        edu.setLogo_educacion(nuevoLogoEducacion);
        
        eduService.saveEducacion(edu);
        
        return new ResponseEntity("Educación modificada exitosamente.",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> deleteEducacionById(@PathVariable Long id){
        eduService.deleteEducacionById(id);
        return new ResponseEntity("Educación eliminada exitosamente",HttpStatus.OK);
    }
}
