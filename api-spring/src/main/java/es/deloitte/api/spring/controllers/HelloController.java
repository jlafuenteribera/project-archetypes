package es.deloitte.api.spring.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.deloitte.api.spring.payload.BaseResponse;

@RestController()
@RequestMapping("/v1/hello")
public class HelloController {

  @GetMapping
  public ResponseEntity<BaseResponse<String>> getAllCompanies(HttpServletRequest req) {
    return new ResponseEntity<>(new BaseResponse<String>("Hello", HttpStatus.OK, req), HttpStatus.OK);
  }

}
