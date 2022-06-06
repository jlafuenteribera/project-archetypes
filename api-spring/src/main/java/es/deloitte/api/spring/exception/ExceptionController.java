package es.deloitte.api.spring.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import es.deloitte.api.spring.payload.BaseResponse;

@RestControllerAdvice
public class ExceptionController {

  @ExceptionHandler({ Exception.class })
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ResponseEntity<BaseResponse<String>> uncontroledExceptionHandle(Exception ex, HttpServletRequest req) {
    ex.printStackTrace();
    HttpStatus hs = HttpStatus.INTERNAL_SERVER_ERROR;
    String message = "Uncontrolled exception, please contact Administrator";
    return new ResponseEntity<>(new BaseResponse<>(message, hs, req), hs);
  }

}