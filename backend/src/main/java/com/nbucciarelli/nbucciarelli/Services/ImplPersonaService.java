/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.Persona;
import com.nbucciarelli.nbucciarelli.Interface.IPersonaService;
import com.nbucciarelli.nbucciarelli.Repository.IPersonaRepository;
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
public class ImplPersonaService implements IPersonaService {
    
    @Autowired
    IPersonaRepository iPersonaRepo;

    @Override
    public List<Persona> getPersonas() {
        List<Persona> listaPersonas = iPersonaRepo.findAll();
        return listaPersonas;
    }

    @Override
    public void savePersona(Persona persona) {
        iPersonaRepo.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        iPersonaRepo.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        return iPersonaRepo.findById(id).orElse(null);
    }
    
}
