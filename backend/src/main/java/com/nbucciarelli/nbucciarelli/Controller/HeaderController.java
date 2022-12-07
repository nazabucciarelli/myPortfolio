/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoHeader;
import com.nbucciarelli.nbucciarelli.Entity.Header;
import com.nbucciarelli.nbucciarelli.Services.HeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping ("header")
@CrossOrigin(origins = "https://nbucciarelli.web.app")
public class HeaderController {
    
    @Autowired
    HeaderService headerServ;
    
    @GetMapping("/traer")
    public Header getHeader(){
        return headerServ.getHeaderById1();
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PutMapping("/editar")
    public Header editHeader(@RequestBody dtoHeader dtoHe){
        Header currentHeader = headerServ.getHeaderById1();
        currentHeader.setURLgh(dtoHe.getURLgh());
        currentHeader.setURLig(dtoHe.getURLig());
        currentHeader.setURLlink(dtoHe.getURLlink());
        
        return headerServ.saveHeader(currentHeader);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PostMapping("/guardar")
    public Header saveHeader(@RequestBody Header he){
        return headerServ.saveHeader(he);
    }
    
}
