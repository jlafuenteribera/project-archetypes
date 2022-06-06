package es.deloitte.api.spring.reactive.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.deloitte.api.spring.reactive.payload.BaseResponse;
import reactor.core.publisher.Mono;

@RestController()
@RequestMapping("/v1/hello")
public class HelloController {

  @GetMapping
  public Mono<ResponseEntity<BaseResponse<String>>> hello(ServerHttpRequest req) {
    return Mono.just(new ResponseEntity<>(new BaseResponse<>("Hello", HttpStatus.OK, req), HttpStatus.OK));
  }

}
