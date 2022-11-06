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
public class dtoHeader {
    @NotBlank
    private String URLgh;
    @NotBlank
    private String URLig;
    @NotBlank
    private String URLlink;

    public dtoHeader(String URLgh, String URLig, String URLlink) {
        this.URLgh = URLgh;
        this.URLig = URLig;
        this.URLlink = URLlink;
    }
    
    
}
