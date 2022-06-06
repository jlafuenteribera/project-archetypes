package es.deloitte.api.spring.reactive.payload;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;

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
  private String requestId;
  private String trace;

  public BaseResponse(T message, HttpStatus status, ServerHttpRequest req) {
    this.message = message;
    this.status = status.value();
    this.path = req.getPath().value();
    this.timestamp = Instant.now().toEpochMilli();
    this.requestId = req.getId();
  }

  public BaseResponse(T message, HttpStatus status, ServerHttpRequest req, Throwable ex) {
    this.message = message;
    this.status = status.value();
    this.path = req.getPath().value();
    this.timestamp = Instant.now().toEpochMilli();
    this.requestId = req.getId();
    this.error = status.getReasonPhrase();
    StringWriter sw = new StringWriter();
    PrintWriter pw = new PrintWriter(sw);
    ex.printStackTrace(pw);
    this.trace = sw.toString();
  }

}