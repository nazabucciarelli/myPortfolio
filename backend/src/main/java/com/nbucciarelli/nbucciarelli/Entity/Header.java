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
public class Header {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 500, message = "Longitud incorrecta")
    private String URLgh;
    
    @NotNull
    @Size(min = 1, max = 500, message = "Longitud incorrecta")
    private String URLig;
    
    @NotNull
    @Size(min = 1, max = 500, message = "Longitud incorrecta")
    private String URLlink;

    public Header(String URLgh, String URLig, String URLlink) {
        this.URLgh = URLgh;
        this.URLig = URLig;
        this.URLlink = URLlink;
    }

    public Header() {
    }
    
    
    
}
