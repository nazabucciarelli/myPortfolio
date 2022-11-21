/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.OtraSkill;
import com.nbucciarelli.nbucciarelli.Repository.IOtraSkillRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nazareno
 */
@Service
@Transactional
public class OtraSkillService {
    @Autowired
    IOtraSkillRepository otraSkillRepository;
    
    public void addOtraSkill(OtraSkill otraSkill){
        otraSkillRepository.save(otraSkill);
    }
    
    public void deleteOtraSkillById(Long id){
        otraSkillRepository.deleteById(id);
    }
    
    public List<OtraSkill> getAllOtraSkill(){
        return otraSkillRepository.findAll();
    }
    
    public OtraSkill getOtraSkillById(Long id){
        return otraSkillRepository.findById(id).orElse(null);
    }
}
