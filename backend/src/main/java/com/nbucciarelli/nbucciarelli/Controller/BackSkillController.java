/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoSkill;
import com.nbucciarelli.nbucciarelli.Entity.BackSkill;
import com.nbucciarelli.nbucciarelli.Services.BackSkillService;
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
@RequestMapping ("backskill")
@CrossOrigin(origins = "https://nbucciarelli.web.app")
public class BackSkillController {
    @Autowired
    BackSkillService backSkillService;
    
    @GetMapping("/traer")
    public List<BackSkill> getAllBackSkill(){
        return backSkillService.getAllBackSkill();
    }
    
    
    @GetMapping("/traer/{id}")
    public BackSkill getBackSkillById(@PathVariable Long id){
        return backSkillService.getBackSkillById(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PostMapping("/agregar")
    public ResponseEntity<?> addBackSkill(@RequestBody BackSkill bSkill){
        backSkillService.addBackSkill(bSkill);
        return new ResponseEntity("Habilidad backend agregada exitosamente.",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> deleteBackSkillById(@PathVariable Long id){
        backSkillService.deleteBackSkillById(id);
        return new ResponseEntity("Habilidad backend eliminada exitosamente.",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PutMapping("/editar/{id}")
    public BackSkill editBackSkill(@PathVariable Long id, @RequestBody dtoSkill dtoBSkill){
        BackSkill bs = backSkillService.getBackSkillById(id);
        
        String nuevoNombre = dtoBSkill.getNombre();
        String nuevoIcono = dtoBSkill.getIcono();
        Integer nuevoProgreso = dtoBSkill.getProgreso();
        
        bs.setNombre(nuevoNombre);
        bs.setIcono(nuevoIcono);
        bs.setProgreso(nuevoProgreso);
        
        backSkillService.addBackSkill(bs);
        return bs;
    }
}
