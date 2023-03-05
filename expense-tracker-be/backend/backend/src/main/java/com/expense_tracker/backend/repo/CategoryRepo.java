package com.expense_tracker.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.expense_tracker.backend.entity.Category;


@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
	
	@Query(
		name = "Category.findByCategory",
		value = "SELECT C from Category C WHERE C.Category = :categoryVal"
	)
	Category findByCategory(@Param("categoryVal") String category);
}
