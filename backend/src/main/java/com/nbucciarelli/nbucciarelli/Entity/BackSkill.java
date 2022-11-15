/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

/**
 *
 * @author Nazareno
 */
@Getter @Setter
@Entity
public class BackSkill {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 500, message = "Longitud incorrecta")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 500, message = "Longitud incorrecta")
    private String icono;
    
    @Range(min=0, max=100)
    private Integer progreso;

    public BackSkill(Long id, String nombre, String icono, Integer progreso) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.progreso = progreso;
    }

    public BackSkill() {
    }
    
    
    
}
