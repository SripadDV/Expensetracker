package com.expense_tracker.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense_tracker.backend.entity.Category;
import com.expense_tracker.backend.service.CategoryService;

@RestController
@CrossOrigin
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/getAllCategories")
	public List<Category> getAllCategory() {
		System.out.println("Get all categories");
		List<Category> categories = this.categoryService.getAllCategories();
		return categories;
	}
	
	
}
