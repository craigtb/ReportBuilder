package com.reportbuilder.controllers;

import com.reportbuilder.domains.Rule;
import com.reportbuilder.repositories.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReportBuilderController {

    @Autowired
    RuleRepository ruleRepository;

    @RequestMapping(value = "/getAllRules", method = RequestMethod.GET)
    public List<Rule> getAllRules() {
        return ruleRepository.findAll();
    }
}
