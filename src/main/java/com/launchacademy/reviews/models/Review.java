package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "review")
@Getter
@Setter
@NoArgsConstructor
public class Review {
  @Id
  @SequenceGenerator(name = "reviews_generator", sequenceName = "reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviews_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name = "name")
  private String name;

  @NotNull
  @Column(name = "cost", nullable = false)
  private Integer cost;

  @NotNull
  @Column(name = "fun", nullable = false)
  private Integer fun;

  @NotNull
  @Column(name= "safety", nullable = false)
  private Integer safety;

  @Column(name="comment")
  private String comment;

  @ManyToOne
  @JoinColumn(name="city_id", nullable = false)
  @JsonIgnoreProperties("reviews")
  private City city;
  public void setCity(City city) { this.city = city; }
}
