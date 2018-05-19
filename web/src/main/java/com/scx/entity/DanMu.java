package com.scx.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author xiaosuda
 * @date 2018/5/18
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DanMu {

    private String msg;
    private Integer id;
    private String createTime;

    public DanMu(String msg, String createTime) {
        this.msg = msg;
        this.createTime = createTime;
    }



}
