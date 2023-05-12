package br.com.treinaweb.adoteumpet.api.adocao.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.treinaweb.adoteumpet.api.adocao.dtos.AdocaoRequest;
import br.com.treinaweb.adoteumpet.api.adocao.dtos.AdocaoResponse;
import br.com.treinaweb.adoteumpet.api.adocao.mappers.AdocaoMapper;
import br.com.treinaweb.adoteumpet.core.repositories.AdocaoRepository;

@Service
public class AdocaoService {
    
    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private AdocaoMapper adocaoMapper;

   public AdocaoResponse create(@RequestBody AdocaoRequest adocaoRequest) {
        var adocao = adocaoMapper.toModel(adocaoRequest);
        var createdAdocao = adocaoRepository.save(adocao);
        return adocaoMapper.toResponse(createdAdocao);
    }

    public List<AdocaoResponse> findAll() {
      return 
        adocaoRepository.findAll().stream()
                                    .map(adocaoMapper::toResponse)
                                    .toList();
    }
}
