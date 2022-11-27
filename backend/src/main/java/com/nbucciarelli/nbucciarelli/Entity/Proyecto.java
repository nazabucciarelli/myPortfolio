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

/**
 *
 * @author Nazareno
 */
@Getter @Setter
@Entity
public class Proyecto {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    
        
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String nombre;
        
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String fecha;
        
    @NotNull
    @Size(min = 1, max = 250, message = "Longitud incorrecta")
    private String descripcion;
        
    @NotNull
    @Size(min = 1, max = 400, message = "Longitud incorrecta")
    private String url_imagen;
        
    @NotNull
    @Size(min = 1, max = 300, message = "Longitud incorrecta")
    private String github_link;
}
