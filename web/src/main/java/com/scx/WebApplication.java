package com.scx;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@SpringBootApplication(scanBasePackages = {"com.scx"})
@MapperScan("com.scx.mapper")
@EnableTransactionManagement
public class WebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

    @RequestMapping("/")
    public ModelAndView toIndex() {
        ModelAndView modelAndView = new ModelAndView("index");
        return modelAndView;
    }
}
