/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.FrontSkill;
import com.nbucciarelli.nbucciarelli.Repository.IFrontSkillRepository;
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
public class FrontSkillService {
    @Autowired
    IFrontSkillRepository frontSkillRepository;
    
    public void addFrontSkill(FrontSkill frontSkill){
        frontSkillRepository.save(frontSkill);
    }
    
    public void deleteFrontSkillById(Long id){
        frontSkillRepository.deleteById(id);
    }
    
    public FrontSkill getFrontSkillById(Long id){
        return frontSkillRepository.findById(id).orElse(null);
    }
    
    public List<FrontSkill> getAllFrontSkill(){
        return frontSkillRepository.findAll();
    }
    
}
