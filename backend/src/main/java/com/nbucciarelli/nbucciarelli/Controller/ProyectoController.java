/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoProyecto;
import com.nbucciarelli.nbucciarelli.Entity.Proyecto;
import com.nbucciarelli.nbucciarelli.Services.ProyectoService;
import java.util.List;
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
@CrossOrigin(origins = "https://nbucciarelli.web.app")
@RequestMapping ("proyecto")
public class ProyectoController {
    @Autowired
    ProyectoService proyectoServ;
    
    @GetMapping("/traer")
    public List<Proyecto> getProyectos(){
        return proyectoServ.getAllProyecto();
    }
    
    @GetMapping("/traer/{id}")
    public Proyecto getProyectoById(@PathVariable Long id){
        return proyectoServ.getProyectoById(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/agregar")
    public ResponseEntity<?> addProyecto(@RequestBody Proyecto proy){
        proyectoServ.saveProyecto(proy);
        return new ResponseEntity("Proyecto agregado exitosamente.",HttpStatus.OK);
    }
    
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public Proyecto editProyecto(@PathVariable Long id, @RequestBody dtoProyecto dtoProy){
        Proyecto p = proyectoServ.getProyectoById(id);
        
        String nuevoNombre = dtoProy.getNombre();
        String nuevoFecha = dtoProy.getFecha();
        String nuevoDescripcion = dtoProy.getDescripcion();
        String nuevoGithub_link = dtoProy.getGithub_link();
        String nuevoUrl_imagen = dtoProy.getUrl_imagen();
        
        p.setDescripcion(nuevoDescripcion);
        p.setNombre(nuevoNombre);
        p.setFecha(nuevoFecha);
        p.setGithub_link(nuevoGithub_link);
        p.setUrl_imagen(nuevoUrl_imagen);
        
        proyectoServ.saveProyecto(p);
        
        return p;
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> deleteProyecto(@PathVariable Long id){
        proyectoServ.deleteProyecto(id);
        return new ResponseEntity("Proyecto eliminado exitosamente.",HttpStatus.OK);
    }
}
