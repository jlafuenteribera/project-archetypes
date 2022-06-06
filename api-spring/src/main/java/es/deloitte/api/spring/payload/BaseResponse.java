package es.deloitte.api.spring.payload;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.time.Instant;

import javax.servlet.http.HttpServletRequest;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(Include.NON_NULL)
public class BaseResponse<T> {

  private Long timestamp;
  private String path;
  private Integer status;
  private String error;
  private T message;
  private String trace;

  public BaseResponse(T message, HttpStatus status, HttpServletRequest req) {
    this.message = message;
    this.status = status.value();
    this.path = req.getRequestURI();
    this.timestamp = Instant.now().toEpochMilli();
  }

  public BaseResponse(T message, HttpStatus status, HttpServletRequest req, Throwable ex) {
    this.message = message;
    this.status = status.value();
    this.path = req.getRequestURI();
    this.timestamp = Instant.now().toEpochMilli();
    this.error = status.getReasonPhrase();
    StringWriter sw = new StringWriter();
    PrintWriter pw = new PrintWriter(sw);
    ex.printStackTrace(pw);
    this.trace = sw.toString();
  }

}