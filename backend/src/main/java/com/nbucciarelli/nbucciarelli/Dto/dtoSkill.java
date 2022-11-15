/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Dto;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Nazareno
 */

@Getter @Setter
public class dtoSkill {
    @NotBlank
    private String nombre;
    @NotBlank
    private String icono;
    @NotBlank
    private Integer progreso;

    public dtoSkill(String nombre, String icono, Integer progreso) {
        this.nombre = nombre;
        this.icono = icono;
        this.progreso = progreso;
    }

    public dtoSkill() {
    }
    
}
