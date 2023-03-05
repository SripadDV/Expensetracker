package com.expense_tracker.backend.service;

import java.util.List;



import com.expense_tracker.backend.entity.Category;


public interface CategoryService {
	
	List<Category> getAllCategories();
	void addCategory(String category);
	
}
