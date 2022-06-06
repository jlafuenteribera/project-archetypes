package es.deloitte.api.spring.reactive.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.context.NoOpServerSecurityContextRepository;

@Configuration
@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
public class SecurityConfig {

  @Bean
  public WebSecurityCustomizer webSecurityCustomizer() {
    return (web) -> web.ignoring().antMatchers("/**");
  }

  @Bean
  protected SecurityWebFilterChain securityFilterChain(ServerHttpSecurity http) throws Exception {
    return http
        .cors(ServerHttpSecurity.CorsSpec::disable)
        .csrf(ServerHttpSecurity.CsrfSpec::disable)
        .formLogin(ServerHttpSecurity.FormLoginSpec::disable)
        .logout(ServerHttpSecurity.LogoutSpec::disable)
        .httpBasic(ServerHttpSecurity.HttpBasicSpec::disable)
        .headers(ServerHttpSecurity.HeaderSpec::disable)
        .securityContextRepository(NoOpServerSecurityContextRepository.getInstance())
        .exceptionHandling()
        .and()
        .authorizeExchange().pathMatchers("/**").permitAll()
        .and()
        .build();
  }
}
