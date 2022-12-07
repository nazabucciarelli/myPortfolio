/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Dto.dtoCertificacion;
import com.nbucciarelli.nbucciarelli.Entity.Certificacion;
import com.nbucciarelli.nbucciarelli.Services.CertificacionService;
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
@RequestMapping ("certificacion")
@CrossOrigin(origins = "https://nbucciarelli.web.app")
public class CertificacionController {
    @Autowired
    CertificacionService certificacionServ;
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PostMapping("/agregar")
    public ResponseEntity<?> addCertificacion(@RequestBody Certificacion cert){
        this.certificacionServ.saveCertificacion(cert);
        return new ResponseEntity("Certificacion agregada exitósamente",HttpStatus.OK);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> deleteCertificacion(@PathVariable Long id){
        this.certificacionServ.deleteCertificacionById(id);
        return new ResponseEntity("Certificacion eliminada exitósamente",HttpStatus.OK);
    }
    
    @GetMapping("/traer")
    public List<Certificacion> getCertificaciones(){
        return this.certificacionServ.getCertificaciones();
    }
    
    @GetMapping("/traer/{id}")
    public Certificacion getCertificacionById(@PathVariable Long id){
        return this.certificacionServ.getCertificacionById(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')") 
    @PutMapping("/editar/{id}")
    public Certificacion editCertificacion(@PathVariable Long id, @RequestBody dtoCertificacion nuevaCertificacion ){
        Certificacion cert = this.certificacionServ.getCertificacionById(id);
        
        String nueva_url = nuevaCertificacion.getUrl_certificado();
        
        cert.setUrl_certificado(nueva_url);
        
        this.certificacionServ.saveCertificacion(cert);
        return cert;
    }
}
