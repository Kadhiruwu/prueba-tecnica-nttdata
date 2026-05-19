package com.nttdata.randomuserapp.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nttdata.randomuserapp.model.Person;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class RandomUserService {

    private final String API_URL = "https://randomuser.me/api/?results=12";

    public List<Person> getPersons() {

        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        List<Person> persons = new ArrayList<>();

        try {

            String response = restTemplate.getForObject(API_URL, String.class);

            JsonNode root = mapper.readTree(response);
            JsonNode results = root.path("results");

            for (JsonNode user : results) {

                String nombre = user.path("name").path("first").asText() + " "
                        + user.path("name").path("last").asText();

                String genero = user.path("gender").asText();

                String ubicacion = user.path("location").path("city").asText()
                        + ", "
                        + user.path("location").path("country").asText();

                String correo = user.path("email").asText();

                String fechaNacimiento = user.path("dob").path("date").asText();

                String fotografia = user.path("picture").path("large").asText();

                Person person = new Person(
                        nombre,
                        genero,
                        ubicacion,
                        correo,
                        fechaNacimiento,
                        fotografia
                );

                persons.add(person);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return persons;
    }
}
