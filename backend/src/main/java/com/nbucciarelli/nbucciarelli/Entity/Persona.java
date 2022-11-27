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
public class Persona {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String apellido;

    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String img;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String profesion;
    
    
    @NotNull
    @Size(min = 1, max = 100, message = "Longitud incorrecta")
    private String urlcv;
     
     @NotNull
    @Size(min = 1, max = 20000, message = "Longitud incorrecta")
    private String sobremi;

    public Persona() {
    }
     
        public Persona(Long id, String nombre, String apellido, String img, String profesion, String urlcv, String sobremi) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.profesion = profesion;
        this.urlcv = urlcv;
        this.sobremi = sobremi;
    }
    
    
}
