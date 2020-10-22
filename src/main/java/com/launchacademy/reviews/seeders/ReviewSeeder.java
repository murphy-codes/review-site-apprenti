package com.launchacademy.reviews.seeders;

import com.google.inject.internal.util.Lists;
import com.launchacademy.reviews.models.City;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewRepository;
import com.launchacademy.reviews.repositories.CityRepository;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;

@Component
public class ReviewSeeder {
  public void seed(CityRepository cityRepository, ReviewRepository reviewRepository) {
    List<String> nameList = Arrays.asList("Tom","Tom","Tom","Russ","Russ","Russ","Jose","Jose","Jose","John","John","John","Tom","Russ","John","Tom","Russ","John","Tom","Russ","John");
    List<Integer> costList = Arrays.asList(1,1,2,1,2,2,1,1,2,4,4,4,1,1,1,2,2,2,4,4,4);
    List<Integer> funList = Arrays.asList(4,3,3,5,4,4,4,4,2,4,4,4,4,3,3,2,2,3,2,3,4);
    List<Integer> safetyList = Arrays.asList(4,3,4,2,4,3,2,2,4,4,4,4,4,4,4,3,4,4,2,3,4);
    List<String> commentList = Arrays.asList("Too expensive IMO","Almost as expensive as SF","I hear good things","So fun you won't remember what you did last night. Although, we will. Don't worry, we won't tell. \uD83D\uDE09","Great farmers markets","Wicked awesome!!!","Everything is so expensive, I could only afford a tent!","At least it's not San Francisco","","Hispter af","Hella tight","Wicked awesome","Where the tech campuses are","Whoa, is that Zuckerberg?!","Too expensive ","Hello Milpitas with your smell","I went there once for a meditation retreat","It's near the dump, but otherwise alright","Beautiful redwoods","Cool weather","I love it here, so many people play disc golf!");
    List<Integer> cityIdList = Arrays.asList(1,2,3,1,2,3,1,2,3,1,2,3,4,4,4,5,5,5,6,6,6);
    List<City> cities = Lists.newArrayList(cityRepository.findAll());

    if(reviewRepository.count() == 0) {
      for (int i = 0; i < nameList.size(); i++) {
        Review review = new Review();
        review.setName(nameList.get(i));
        review.setCost(costList.get(i));
        review.setFun(funList.get(i));
        review.setSafety(safetyList.get(i));
        review.setComment(commentList.get(i));
        review.setCity(cities.get(cityIdList.get(i)-1));
        reviewRepository.save(review);
      }
    }
  }
}
