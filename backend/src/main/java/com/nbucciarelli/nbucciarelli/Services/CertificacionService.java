/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.Certificacion;
import com.nbucciarelli.nbucciarelli.Repository.ICertificacionRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nazareno
 */
@Service
@Transactional
public class CertificacionService {
    @Autowired
    ICertificacionRepository certificacionRepo;
    
    public Certificacion getCertificacionById(Long id){
        return this.certificacionRepo.findById(id).orElse(null);
    }
    
    public void saveCertificacion(Certificacion cert){
        this.certificacionRepo.save(cert);
    }
    
    public void deleteCertificacionById(Long id){
        this.certificacionRepo.deleteById(id);
    }
    
    public List<Certificacion> getCertificaciones(){
        return this.certificacionRepo.findAll();
    }
    
    
}
