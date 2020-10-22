package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.City;
import com.launchacademy.reviews.repositories.CityRepository;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;

@Component
public class CitySeeder {
  public void seed(CityRepository cityRepository) {
    List<String> nameList = Arrays.asList("San Francisco", "San Jose", "Boston", "Palo Alto", "Milpitas", "Eureka", "New York", "Dallas", "Moscow", "Hong Kong", "Bangkok", "Paris", "London", "Dubai", "Singapore", "Kuala Lumpur", "Istanbul", "Los Angeles");
    List<String> descriptionList = Arrays.asList("The Golden City", "Small Town Heart. Big City Soul.", "Sicut Patribus, Sit Deus Nobis - God be with us as he was with our fathers", "The Heart of Silicon Valley", "As Milpitas Goes, So Goes the State", "I've found it!", "The Big Apple", "Big Things Happen Here", "The City Where History Is Made", "A cosmopolitan city, Hong Kong weaves Western and Asian influence into a world-class center of business, culture, and trade.", "City of Angels, built by angels, central city of governance, brilliant temples and palaces, the capital of Thailand", "Fluctuat nec mergitur - she is rocked by the waves, but does not sink", "Domine dirige nos - Lord, direct us", "Only in Dubai", "Passion Made Possible - Onward, Singapore", "A City of Contrasts and Diversity", "Bridge Together - a transcontinental city & the most populous city in Turkey", "The City of Angels - Together, We're the Best - L.A.'s the Place");
    List<String> imgUrlList = Arrays.asList("/img/San-Francisco-01.jpg", "/img/San-Jose-01.jpg", "/img/Boston-01.jpg", "/img/Palo-Alto-01.jpg", "/img/Milpitas-01.jpg", "/img/Eureka-01.jpg", "/img/New-York-City-01.jpg", "/img/Dallas-01.jpg", "/img/Moscow-01.jpg", "/img/Hong-Kong-01.jpg", "/img/Bangkok-01.jpg", "/img/Paris-01.jpg", "/img/London-01.jpg", "/img/Dubai-01.jpg", "/img/Singapore-01.jpg", "/img/Kuala-Lumpur-01.jpg", "/img/Istanbul-01.jpg", "/img/Los-Angeles-01.jpg");

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
