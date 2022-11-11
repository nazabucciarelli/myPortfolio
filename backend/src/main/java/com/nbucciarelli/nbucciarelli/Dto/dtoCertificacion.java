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
public class dtoCertificacion {
    @NotBlank
    private String url_certificacion;

    public dtoCertificacion(String url_certificacion) {
        this.url_certificacion = url_certificacion;
    }
    
    
}
