package com.expense_tracker.backend.helperClasses;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@NoArgsConstructor
@Data
public class MonthlyCategoryExpense {
	
	
	private int month;
	private String category;
	private double amount;

	public MonthlyCategoryExpense(int month, String category, double amount) {
		super();
		this.month = month;
		this.category = category;
		this.amount = amount;
	}
}
