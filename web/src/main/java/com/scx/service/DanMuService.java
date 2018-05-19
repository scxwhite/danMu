package com.scx.service;

import com.scx.entity.DanMu;

import java.util.List;

/**
 *
 * @author xiaosuda
 * @date 2018/5/18
 */
public interface DanMuService {

    boolean add(DanMu danMu);

    List<DanMu> findAll();
}
