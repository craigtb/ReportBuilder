package com.reportbuilder.configuration;

import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration
@ComponentScan("com.homedepot.reportbuilder.configuration.**")
public class DatabaseConfiguration {

    @Bean(name="reportbuilder")
    @Primary
    @ConfigurationProperties(prefix="reportbuilder.datasource")
    public DataSource DatabaseConfiguration() {
        return DataSourceBuilder.create().build();
    }

}
