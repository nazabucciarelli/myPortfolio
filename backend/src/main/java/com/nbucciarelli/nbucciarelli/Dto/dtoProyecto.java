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
public class dtoProyecto {
   @NotBlank
    private String nombre;
   @NotBlank
    private String fecha;
   @NotBlank
    private String descripcion;
   @NotBlank
    private String url_imagen;
   @NotBlank
    private String github_link;

    public dtoProyecto(String nombre, String fecha, String descripcion, String url_imagen, String github_link) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
        this.github_link = github_link;
    }

    public dtoProyecto() {
    }
    
    
}
