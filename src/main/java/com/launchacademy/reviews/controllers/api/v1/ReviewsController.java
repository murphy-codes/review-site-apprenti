package com.launchacademy.reviews.controllers.api.v1;

import com.launchacademy.reviews.models.City;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.CityRepository;
import com.launchacademy.reviews.repositories.ReviewRepository;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewsController {

  private ReviewRepository reviewRepo;
  private CityRepository cityRepo;

  private class NotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class NotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ReviewsController.NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String NotFoundHandler(ReviewsController.NotFoundException exception) {
      return exception.getMessage();
    }
  }

  @Autowired
  public ReviewsController(ReviewRepository reviewRepo, CityRepository cityRepo) {
    this.cityRepo = cityRepo;
    this.reviewRepo = reviewRepo;
  }

  @GetMapping
  public Page<Review> getAllReviews(Pageable pageable) {
    return reviewRepo.findAll(pageable);
  }

  @PostMapping("/{cityId}")
  public Review createReview(@Valid @RequestBody Review review, @PathVariable Integer cityId) {
    Optional<City> city = cityRepo.findById(cityId);
    review.setCity(city.get());
    return reviewRepo.save(review);
  }

  @PutMapping
  public Review voteReview(@Valid @RequestBody Review update) {
    Review review = reviewRepo.findById(update.getId()).get();
    review.setVotes(update.getVotes());
    return reviewRepo.save(review);
  }
}
