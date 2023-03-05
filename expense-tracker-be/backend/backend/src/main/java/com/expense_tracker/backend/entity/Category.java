package com.expense_tracker.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Categories")
@Data
@NoArgsConstructor
public class Category {
	
	public Category(int id, String category) {
		super();
		this.id = id;
		Category = category;
	}
	
	public Category(String category) {
		super();
		Category = category;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="category")
	private String Category;
	
	
}
