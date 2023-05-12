package br.com.treinaweb.adoteumpet.api.commons.handlers;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;

import br.com.treinaweb.adoteumpet.api.commons.dtos.ErrorResponse;

@RestControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    private final SnakeCaseStrategy snakeCaseStrategy = new SnakeCaseStrategy();

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException exception,
            HttpHeaders headers, 
            HttpStatus status, 
            WebRequest request) {
        
        var body = 
            ErrorResponse.builder()
                        .status(status.value())
                        .error(status.getReasonPhrase())
                        .cause(exception.getClass().getSimpleName())
                        .message("Ocorreram erros de validação")
                        .timestamp(LocalDateTime.now())
                        .erros(convertFieldErrors(exception.getBindingResult().getFieldErrors()))
                        .build();      
        return new ResponseEntity<>(body, status);
    }

    private Map<String, List<String>> convertFieldErrors(List<FieldError> fieldErrors) {
        var erros = new HashMap<String, List<String>>();

        fieldErrors.stream().forEach(fieldErro -> {
            var field =  snakeCaseStrategy.translate(fieldErro.getField());
            if(erros.containsKey(field)) {
                erros.get(field).add(fieldErro.getDefaultMessage());
            } else {                
                erros.put(field, Stream.of(fieldErro.getDefaultMessage()).collect(Collectors.toList()));
            }
        });
        return erros;
    }   
}
