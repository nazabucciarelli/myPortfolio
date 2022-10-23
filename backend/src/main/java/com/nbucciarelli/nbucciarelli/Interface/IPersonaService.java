/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Interface;

import com.nbucciarelli.nbucciarelli.Entity.Persona;
import java.util.List;

/**
 *
 * @author Nazareno
 */

public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersonas();
    
    public void savePersona(Persona persona);
    
    public void deletePersona(Long id);
    
    public Persona findPersona(Long id);
    
    
}
