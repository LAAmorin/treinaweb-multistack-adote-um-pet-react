package br.com.treinaweb.adoteumpet.api.commons.dtos;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    
    private int status;
    private String error;
    private String cause;
    private String message;
    private LocalDateTime timestamp;
    private Map<String, List<String>> erros;
}
