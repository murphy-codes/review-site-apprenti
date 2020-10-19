package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.City;
import com.launchacademy.reviews.repositories.CityRepository;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;

@Component
public class CitySeeder {
  public void seed(CityRepository cityRepository) {
    List<String> nameList = Arrays.asList("San Francisco", "San Jose", "Boston", "Palo Alto", "Milpitas", "Eureka");
    List<String> descriptionList = Arrays.asList("The Golden City", "Small Town Heart. Big City Soul.", "Sicut Patribus, Sit Deus Nobis", "The heart of  Silicon Valley", "As Milpitas Goes, So Goes the State", "I've found it!");
    List<String> imgUrlList = Arrays.asList("/img/San-Francisco.jpg", "/img/San-Jose.jpg", "/img/Boston.jpg", "/img/Palo-Alto.jpg", "/img/Milpitas.jpg", "/img/Eureka.jpg");

    for (int i = 0; i < nameList.size(); i++) {
      if(!cityRepository.existsByName(nameList.get(i))) {
        City city = new City();
        city.setName(nameList.get(i));
        city.setDescription(descriptionList.get(i));
        city.setImageUrl(imgUrlList.get(i));
        cityRepository.save(city);
      }
    }
  }
}
