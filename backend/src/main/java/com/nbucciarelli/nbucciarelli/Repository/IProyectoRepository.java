/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Repository;

import com.nbucciarelli.nbucciarelli.Entity.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Nazareno
 */
public interface IProyectoRepository extends JpaRepository<Proyecto,Long> {
    
}
