package com.launchacademy.reviews.seeders;


import com.launchacademy.reviews.repositories.CityRepository;
import com.launchacademy.reviews.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {
  @Autowired private CityRepository cityRepository;
  @Autowired private CitySeeder citySeeder;
  @Autowired private ReviewRepository reviewRepository;
  @Autowired private ReviewSeeder reviewSeeder;


  @Override public void run(String... args) throws Exception {
    citySeeder.seed(cityRepository);
    reviewSeeder.seed(cityRepository, reviewRepository);
  }
}