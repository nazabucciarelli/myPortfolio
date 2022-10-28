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
public class dtoExperiencia {
    @NotBlank
    private String nombre;
    @NotBlank
    private String descripcion;
    @NotBlank
    private String periodo;
    @NotBlank
    private String logo_empresa;

    public dtoExperiencia() {
    }

    public dtoExperiencia(String nombre, String descripcion, String periodo, String logo_empresa) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.periodo = periodo;
        this.logo_empresa = logo_empresa;
    }
    
    
}
