package com.launchacademy.reviews.controllers.api.v1;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewRepository;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewsController {
  private ReviewRepository reviewRepo;

  private class NotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class NotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ReviewsController .NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String NotFoundHandler(ReviewsController .NotFoundException exception) {
      return exception.getMessage();
    }
  }

  @Autowired
  public ReviewsController(ReviewRepository reviewRepo){
    this.reviewRepo = reviewRepo;
  }

  @GetMapping
  public Iterable<Review> getAllReviews(){return reviewRepo.findAll();}

  @PostMapping("/new")
  public Review createReview(@Valid @RequestBody Review review) {
    return reviewRepo.save(review);
  }
}
