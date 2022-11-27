/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Security.Repository;

import com.nbucciarelli.nbucciarelli.Security.Entity.Rol;
import com.nbucciarelli.nbucciarelli.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Nazareno
 */
@Repository
public interface RolRepository extends JpaRepository<Rol,Long> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
