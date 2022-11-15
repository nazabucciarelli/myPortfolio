/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.BackSkill;
import com.nbucciarelli.nbucciarelli.Repository.IBackSkillRepository;
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
public class BackSkillService {
    @Autowired
    IBackSkillRepository backSkillRepository;
    
    public void addBackSkill(BackSkill backSkill){
        backSkillRepository.save(backSkill);
    }
    
    public void deleteBackSkillById(Long id){
        backSkillRepository.deleteById(id);
    }
    
    public List<BackSkill> getAllBackSkill(){
        return backSkillRepository.findAll();
    }
    
    public BackSkill getBackSkillById(Long id){
        return backSkillRepository.findById(id).orElse(null);
    }
}
