package com.scx.controller;

import com.scx.entity.DanMu;
import com.scx.service.DanMuService;
import io.goeasy.GoEasy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

/**
 *
 * @author xiaosuda
 * @date 2018/5/18
 */
@RequestMapping("/DanMu/")
@Controller
public class DanMuController {

    private final String APPKEY = "BC-1447217c711a409c930f64d95c62519e";

    @Autowired
    private DanMuService danMuService;
    @RequestMapping(value = "add", method = RequestMethod.POST)
    @ResponseBody
    public void add(String msg, String time){
        GoEasy goEasy = new GoEasy(APPKEY);
        //使用goeasy第三方推送服务 向相同频道的其它用户推送消息
        goEasy.publish("DanMu", msg);
        //将弹幕内容和时间保存到数据库
        danMuService.add(DanMu.builder().createTime(time).msg(msg).build());
    }

    @RequestMapping(value = "findAll", method = RequestMethod.GET)
    @ResponseBody
    public List<DanMu> findAll() {
        List<DanMu> all = danMuService.findAll();
        return all;
    }
}
