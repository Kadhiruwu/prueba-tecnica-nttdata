package com.nttdata.randomuserapp.controller;

import com.nttdata.randomuserapp.model.Person;
import com.nttdata.randomuserapp.service.RandomUserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/personas")
public class PersonController {

    private final RandomUserService randomUserService;

    public PersonController(RandomUserService randomUserService) {
        this.randomUserService = randomUserService;
    }

    @GetMapping
    public List<Person> obtenerPersonas() {
        return randomUserService.getPersons();
    }
}
