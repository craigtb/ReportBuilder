package com.reportbuilder.repositories;

import com.reportbuilder.domains.Rule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RuleRepository extends JpaRepository<Rule, Integer> {
}
