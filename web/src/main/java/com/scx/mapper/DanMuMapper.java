package com.scx.mapper;

import com.scx.entity.DanMu;

import java.util.List;

/**
 *
 * @author xiaosuda
 * @date 2018/5/18
 */
public interface DanMuMapper {

    Integer insert(DanMu danMu);

    List<DanMu> selectAll();
}
