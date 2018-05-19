package com.scx.service.impl;

import com.scx.entity.DanMu;
import com.scx.mapper.DanMuMapper;
import com.scx.service.DanMuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 * @author xiaosuda
 * @date 2018/5/18
 */
@Service
public class DanMuServiceImpl implements DanMuService {

    @Autowired
    private DanMuMapper danMuMapper;

    @Override
    public boolean add(DanMu danMu) {
        Integer x = danMuMapper.insert(danMu);
        return x != null && x > 0;
    }

    @Override
    public List<DanMu> findAll() {
        return danMuMapper.selectAll();
    }
}
