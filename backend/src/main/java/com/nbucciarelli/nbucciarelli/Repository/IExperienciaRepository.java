/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Repository;

import com.nbucciarelli.nbucciarelli.Entity.Experiencia;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Nazareno
 */

@Repository
public interface IExperienciaRepository extends JpaRepository <Experiencia, Long>{
    public boolean existsByNombre(String nombre);
    public Optional<Experiencia> findByNombre(String nombre);
}
