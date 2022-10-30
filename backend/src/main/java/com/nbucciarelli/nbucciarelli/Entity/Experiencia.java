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
public class Experiencia {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 200, message = "Longitud incorrecta")
    private String descripcion;
    
    @NotNull
    @Size(min = 1, max = 50, message = "Longitud incorrecta")
    private String periodo;
    
    @NotNull
    @Size(min = 1, max = 500, message = "Longitud incorrecta")
    private String logo_empresa;

    public Experiencia(String posicion, String descripcion, String periodo, String logo_empresa) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.periodo = periodo;
        this.logo_empresa = logo_empresa;
    }

    public Experiencia() {
    }
    
    
}
