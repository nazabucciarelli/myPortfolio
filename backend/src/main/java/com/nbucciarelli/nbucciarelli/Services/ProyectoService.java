/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.Proyecto;
import com.nbucciarelli.nbucciarelli.Repository.IProyectoRepository;
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
public class ProyectoService {
    @Autowired
    IProyectoRepository proyectoRepo;
    
    public Proyecto getProyectoById(Long id){
        return proyectoRepo.findById(id).orElse(null);
    }
    
    public List<Proyecto> getAllProyecto(){
        return proyectoRepo.findAll();
    }
    
    public void saveProyecto(Proyecto proyec){
        proyectoRepo.save(proyec);
    }
    
    public void deleteProyecto(Long id){
        proyectoRepo.deleteById(id);
    }
}
