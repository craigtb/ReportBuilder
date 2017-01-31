package com.reportbuilder.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReportBuilderController {

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String testMethod() {
        return "Hello";
    }
}
