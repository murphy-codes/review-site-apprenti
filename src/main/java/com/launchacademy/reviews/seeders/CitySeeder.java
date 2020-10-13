package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.City;
import com.launchacademy.reviews.repositories.CityRepository;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;

@Component
public class CitySeeder {
  public void seed(CityRepository cityRepository) {
    List<String> nameList = Arrays.asList("San Francisco","San Jose","Boston");
    List<String> descriptionList = Arrays.asList("The Golden City", "Small Town Heart. Big City Soul.", "Sicut Patribus, Sit Deus Nobis");
    List<String> imgUrlList = Arrays.asList("https://upload.wikimedia.org/wikipedia/commons/f/f6/Golden_Gate_Bridge_and_San_Francisco_at_sunset.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/San_Jose_Marriott_Hotel.jpg/400px-San_Jose_Marriott_Hotel.jpg","https://live.staticflickr.com/5344/6969795530_9e00977b02_b.jpg");

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
