package com.expense_tracker.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense_tracker.backend.entity.Category;
import com.expense_tracker.backend.repo.CategoryRepo;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Override
	public List<Category> getAllCategories() {
		List<Category> categories = this.categoryRepo.findAll();
		return categories;
	}

	@Override
	public void addCategory(String category) {
		// TODO Auto-generated method stub
		Category existCategory = this.categoryRepo.findByCategory(category);
		if(existCategory==null) {
			this.categoryRepo.save(new Category(category));
		}
	}

}
