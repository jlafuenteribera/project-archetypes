package es.deloitte.api.spring.reactive.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import es.deloitte.api.spring.reactive.payload.BaseResponse;
import reactor.core.publisher.Mono;

@RestControllerAdvice
public class ExceptionController {

  @ExceptionHandler({ Exception.class })
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public Mono<ResponseEntity<BaseResponse<String>>> uncontroledExceptionHandle(Exception ex, ServerHttpRequest req) {
    ex.printStackTrace();
    HttpStatus hs = HttpStatus.INTERNAL_SERVER_ERROR;
    String message = "Uncontrolled exception, please contact Administrator";
    return Mono.just(new ResponseEntity<>(new BaseResponse<>(message, hs, req), hs));
  }

}