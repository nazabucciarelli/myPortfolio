/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoExperiencia;
import com.nbucciarelli.nbucciarelli.Entity.Experiencia;
import com.nbucciarelli.nbucciarelli.Services.ExperienciaService;
import java.util.List;
import java.util.Optional;
import org.apache.commons.lang3.StringUtils;
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
@RequestMapping ("experiencia")
@CrossOrigin(origins = "https://nbucciarelli.web.app")
public class ExperienciaController {
    @Autowired
    ExperienciaService expService;
    
    
    @GetMapping ("/lista")
    public ResponseEntity<List<Experiencia>> findExperiencias(){
        List<Experiencia> listaExperiencias = expService.findExperiencias();
        return new ResponseEntity(listaExperiencias,HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PostMapping ("/agregar")
    public ResponseEntity<?> addExperiencia(@RequestBody dtoExperiencia dtoexp){
        // Aca van algunas validaciones que no hice porque usa un objeto que creo en la Parte 15, que no vi.

        Experiencia exp = new Experiencia();
        
        exp.setNombre(dtoexp.getNombre());
        exp.setDescripcion(dtoexp.getDescripcion());
        exp.setPeriodo(dtoexp.getPeriodo());
        exp.setLogo_empresa(dtoexp.getLogo_empresa());
        
        expService.saveExperiencia(exp);
        
        return new ResponseEntity("Experiencia agregada",HttpStatus.OK); // OJOOOOOO
    }
    
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PutMapping("/editar/{id}")
    public ResponseEntity<?> editExperiencia(@PathVariable("id") Long id, @RequestBody dtoExperiencia dtoexp){
    if(!expService.experienciaExistsById(id)){
        return new ResponseEntity("No existe una experiencia con ese id.",HttpStatus.BAD_REQUEST);
    }
    if(StringUtils.isBlank(dtoexp.getNombre())){
        return new ResponseEntity ("La experiencia debe tener un nombre.",HttpStatus.BAD_REQUEST);
    }
    
        Experiencia exp = expService.findExperienciaById(id).get();
        
        exp.setNombre(dtoexp.getNombre());
        exp.setDescripcion(dtoexp.getDescripcion());
        exp.setPeriodo(dtoexp.getPeriodo());
        exp.setLogo_empresa(dtoexp.getLogo_empresa());
        
        expService.saveExperiencia(exp);
        
        return new ResponseEntity("Experiencia actualizada",HttpStatus.OK);
    
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> deleteExperiencia(@PathVariable("id") Long id){
         if(!expService.experienciaExistsById(id)){
        return new ResponseEntity("No existe una experiencia con ese id.",HttpStatus.BAD_REQUEST);
    }
         
         expService.deleteExperienciaById(id);
         
         return new ResponseEntity("Experiencia eliminada",HttpStatus.OK);
    }
    
    @GetMapping("detalles/{id}")
    public Optional<Experiencia> getDetallesExperiencia(@PathVariable("id") Long id){
        return expService.findExperienciaById(id);
    }
} 
