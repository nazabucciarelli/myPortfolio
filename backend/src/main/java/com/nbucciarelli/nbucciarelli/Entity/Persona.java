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
    @Size(min = 10, max = 50, message = "Longitud incorrecta")
    private String img;
    
    @NotNull
    @Size(min = 10, max = 50, message = "Longitud incorrecta")
    private String profesion;
    
    @NotNull
    @Size(min = 10, max = 100, message = "Longitud incorrecta")
    private String urlcv;
     
     @NotNull
    @Size(min = 40, max = 600, message = "Longitud incorrecta")
    private String sobremi;
    
    
    
}
