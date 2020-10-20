package com.launchacademy.reviews.controllers.api.v1;

import com.launchacademy.reviews.models.City;
import com.launchacademy.reviews.repositories.CityRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CitiesController {
  private CityRepository cityRepo;

  private class NotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class NotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String NotFoundHandler(NotFoundException exception) {
      return exception.getMessage();
    }
  }

  @Autowired
  public CitiesController(
      CityRepository cityRepo){
    this.cityRepo = cityRepo;
  }

  @GetMapping("/cities")
  public Page<City> getCities(Pageable pageable){
    return cityRepo.findAll(pageable);
  }

  @GetMapping("/cities/{id}")
  public City getCityById(@PathVariable Integer id){
    return cityRepo.findById(id).orElseThrow(() -> new CitiesController.NotFoundException());
  }

  @GetMapping("/search/cities/{searchTerm}")
  public Page<City> getCityBySearch(@PathVariable String searchTerm, Pageable pageable){
    return cityRepo.findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(searchTerm, searchTerm, pageable);
  }

  @PostMapping("/cities")
  public City createReview(@RequestBody City city) {
    return cityRepo.save(city);
  }

  @DeleteMapping("/cities/{id}")
  public void deleteById(@PathVariable Integer id) {
    cityRepo.deleteById(id);
  }
}
