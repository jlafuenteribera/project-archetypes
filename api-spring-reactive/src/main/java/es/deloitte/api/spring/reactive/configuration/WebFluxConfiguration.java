package es.deloitte.api.spring.reactive.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@Configuration
@EnableWebFlux
public class WebFluxConfiguration implements WebFluxConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry corsRegistry) {
    corsRegistry.addMapping("/**")
        .allowedOrigins("*")
        .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH")
        .maxAge(3600);
  }
}