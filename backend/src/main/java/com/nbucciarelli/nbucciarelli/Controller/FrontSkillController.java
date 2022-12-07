/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoSkill;
import com.nbucciarelli.nbucciarelli.Entity.FrontSkill;
import com.nbucciarelli.nbucciarelli.Services.FrontSkillService;
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
@RequestMapping ("frontskill")
@CrossOrigin(origins = "https://nbucciarelli.web.app")
public class FrontSkillController {
    @Autowired
    FrontSkillService frontSkillService;
    
    @GetMapping("/traer")
    public List<FrontSkill> getAllFrontSkill(){
        return frontSkillService.getAllFrontSkill();
    }
    
    @GetMapping("/traer/{id}")
    public FrontSkill getFrontSkillById(@PathVariable Long id){
        return frontSkillService.getFrontSkillById(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PostMapping("/agregar")
    public ResponseEntity<?> addFrontSkill(@RequestBody FrontSkill frontSkill){
        frontSkillService.addFrontSkill(frontSkill);
        return new ResponseEntity("Skill de frontend agregada exitosamente.",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> deleteFrontSkill(@PathVariable Long id){
        frontSkillService.deleteFrontSkillById(id);
        return new ResponseEntity("Skill de frontend eliminada exitosamente.",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PutMapping("/editar/{id}")
    public FrontSkill editFrontSkill(@PathVariable Long id, @RequestBody dtoSkill dtoFskill){
        FrontSkill fs = frontSkillService.getFrontSkillById(id);
        
       String nuevoNombre = dtoFskill.getNombre();
       String nuevoIcono = dtoFskill.getIcono();
       int nuevoProgreso = dtoFskill.getProgreso();
       
       fs.setNombre(nuevoNombre);
       fs.setIcono(nuevoIcono);
       fs.setProgreso(nuevoProgreso);
       
       frontSkillService.addFrontSkill(fs);
       return fs;
    }
}
