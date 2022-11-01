/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.Educacion;
import com.nbucciarelli.nbucciarelli.Repository.IEducacionRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nazareno
 */
@Service
@Transactional
public class EducacionService {
    @Autowired
    IEducacionRepository educacionRepo;
    
    public List<Educacion> getEducacion(){
        return educacionRepo.findAll();
    }
    
    public Optional<Educacion> getEducacionById(Long id){
        return educacionRepo.findById(id);
    }
    
    public void deleteEducacionById(Long id){
        educacionRepo.deleteById(id);
    }
    
    public void saveEducacion(Educacion edu){
        educacionRepo.save(edu);
    }
    
}
