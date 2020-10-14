package com.launchacademy.reviews.controllers.api.v1;

import com.launchacademy.reviews.models.City;
import com.launchacademy.reviews.repositories.CityRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
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
@RequestMapping("/api/v1/cities")
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

  @GetMapping
  public Page<City> getCityByName(Pageable pageable){
    return cityRepo.findAll(pageable);
  }

  @GetMapping("/{id}")
  public City getCityById(@PathVariable String cities, @PathVariable Integer id){
    Optional<City> city = cityRepo.findById(id);
    return city.orElseThrow(NotFoundException::new);
  }

  @PostMapping
  public City createReview(@RequestBody City city) {
    return cityRepo.save(city);
  }
}
