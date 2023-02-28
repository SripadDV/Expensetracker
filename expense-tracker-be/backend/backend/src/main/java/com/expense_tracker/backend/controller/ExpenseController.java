package com.expense_tracker.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.expense_tracker.backend.entity.Expense;
import com.expense_tracker.backend.helperClasses.MonthlyCategoryExpense;
import com.expense_tracker.backend.service.ExpenseService;

@RestController
@RequestMapping("/expenses")
@CrossOrigin
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	
	@GetMapping("/")
	public List<Expense> getAllexpenses() {
		System.out.println("Entered");
		return this.expenseService.getExpense();
	}
	
	@GetMapping("/monthlyCategoryExpenses")
	public List<MonthlyCategoryExpense> getMonthlyExpense(@RequestParam(name="month") int month, @RequestParam(name="year") int year) {
		System.out.println("Month "+ month + " year "+ year);
		List<MonthlyCategoryExpense> monthlyCategoryExpenses = this.expenseService.getMontlyCategoryExpense(month, year);
		System.out.println(monthlyCategoryExpenses);
		return monthlyCategoryExpenses;
	}
	
	

}
