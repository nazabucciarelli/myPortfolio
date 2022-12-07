/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoSkill;
import com.nbucciarelli.nbucciarelli.Entity.OtraSkill;
import com.nbucciarelli.nbucciarelli.Services.OtraSkillService;
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
@RequestMapping ("otraskill")
@CrossOrigin(origins = "https://nbucciarelli.web.app")
public class OtraSkillController {
    @Autowired
    OtraSkillService otraSkillService;
    
    @GetMapping("/traer")
    public List<OtraSkill> getAllOtraSkill(){
        return otraSkillService.getAllOtraSkill();
    }
    
    @GetMapping("/traer/{id}")
    public OtraSkill getOtraSkillById(@PathVariable Long id){
        return otraSkillService.getOtraSkillById(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PostMapping("/agregar")
    public ResponseEntity<?> addOtraSkill(@RequestBody OtraSkill oSkill){
        otraSkillService.addOtraSkill(oSkill);
        return new ResponseEntity("Otra habilidad agregada exitosamente.",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> deleteOtraSkillById(@PathVariable Long id){
        otraSkillService.deleteOtraSkillById(id);
        return new ResponseEntity("Otra habilidad eliminada exitosamente.",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PutMapping("/editar/{id}")
    public OtraSkill editOtraSkill(@PathVariable Long id, @RequestBody dtoSkill dtoOSkill){
        OtraSkill os = otraSkillService.getOtraSkillById(id);
        
        String nuevoNombre = dtoOSkill.getNombre();
        String nuevoIcono = dtoOSkill.getIcono();
        Integer nuevoProgreso = dtoOSkill.getProgreso();
        
        os.setNombre(nuevoNombre);
        os.setIcono(nuevoIcono);
        os.setProgreso(nuevoProgreso);
        
        otraSkillService.addOtraSkill(os);
        return os;
    }
    
}
