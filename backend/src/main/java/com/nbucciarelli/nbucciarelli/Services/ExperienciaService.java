/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.Experiencia;
import com.nbucciarelli.nbucciarelli.Repository.IExperienciaRepository;
import java.util.List;
import java.util.Optional;
import java.lang.Long;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nazareno
 */

@Service
@Transactional
public class ExperienciaService {
    
    @Autowired
    IExperienciaRepository iExperienciaRepo;
    
    public List<Experiencia> findExperiencias(){
        return iExperienciaRepo.findAll();
    }
    
    public Optional<Experiencia> findExperienciaById(Long id){
        return iExperienciaRepo.findById(id);
    }
    
    public Optional<Experiencia> findByNombre(String nombre){
        return iExperienciaRepo.findByNombre(nombre);
    }
    
    public void saveExperiencia(Experiencia exp){
        iExperienciaRepo.save(exp);
    }
    
    public void deleteExperienciaById(Long id){
        iExperienciaRepo.deleteById(id);
    }
    
    public boolean experienciaExistsById(Long id){
        return iExperienciaRepo.existsById(id);
    }
    
    public boolean experienciaExistsByNombre(String nombre){
        return iExperienciaRepo.existsByNombre(nombre);
    }
}
