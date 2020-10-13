package com.launchacademy.reviews.controllers;

import org.springframework.web.bind.annotation.GetMapping;

public class ReviewSiteController {
  @GetMapping(value = "/**/{path:[^\\.]*}")
  public String forward() {
    return "forward:/";
  }

}
