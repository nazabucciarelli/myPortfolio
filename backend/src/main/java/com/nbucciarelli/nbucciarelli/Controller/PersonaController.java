/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Controller;

import com.nbucciarelli.nbucciarelli.Entity.Persona;
import com.nbucciarelli.nbucciarelli.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nazareno
 */
@RestController
public class PersonaController {

    @Autowired
    IPersonaService iPersonaService;

    @GetMapping("/personas/traer")
    public List<Persona> getPersonas() {
        return iPersonaService.getPersonas();
    }

    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona p) {
        iPersonaService.savePersona(p);
        return "Persona creada exitosamente.";
    }

    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id) {
        iPersonaService.deletePersona(id);
        return "Persona borrada exitosamente.";
    }

    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
            @RequestParam("nombre") String nuevo_nombre,
            @RequestParam("apellido") String nuevo_apellido,
            @RequestParam("img") String nuevo_img,
            @RequestParam("profesion") String nuevo_profesion,
            @RequestParam("urlcv") String nuevo_urlcv,
            @RequestParam("sobremi") String nuevo_sobremi) {
        Persona p = iPersonaService.findPersona(id);

        p.setNombre(nuevo_nombre);
        p.setApellido(nuevo_apellido);
        p.setImg(nuevo_img);
        p.setProfesion(nuevo_profesion);
        p.setUrlcv(nuevo_urlcv);
        p.setSobremi(nuevo_sobremi);

        iPersonaService.savePersona(p);
        return p;

    }
}
