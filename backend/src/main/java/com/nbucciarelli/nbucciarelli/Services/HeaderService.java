/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nbucciarelli.nbucciarelli.Services;

import com.nbucciarelli.nbucciarelli.Entity.Header;
import com.nbucciarelli.nbucciarelli.Repository.IHeaderRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nazareno
 */
@Service
@Transactional
public class HeaderService {
    
    @Autowired
    IHeaderRepository headerRepo;
    
    public Header getHeaderById1(){
        return headerRepo.findById((long)1).orElse(null);
    }
    
    public Header saveHeader(Header he){
        return headerRepo.save(he);
    }
}
