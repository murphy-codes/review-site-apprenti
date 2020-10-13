package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.City;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CityRepository extends PagingAndSortingRepository<City, Integer> {
  public boolean existsByName(String name);
}
