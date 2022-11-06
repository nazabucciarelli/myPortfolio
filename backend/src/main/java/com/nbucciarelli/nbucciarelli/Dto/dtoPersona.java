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
public class dtoPersona {
    @NotBlank
    private String nombre;
    @NotBlank
    private String apellido;
    @NotBlank
    private String profesion;
    @NotBlank
    private String img;
    @NotBlank
    private String sobremi;
    @NotBlank
    private String urlcv;


    public dtoPersona(String nombre, String apellido, String profesion, String img, String sobremi, String urlcv) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.img = img;
        this.sobremi = sobremi;
        this.urlcv = urlcv;
    }
    
    
}
