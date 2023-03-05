package com.expense_tracker.backend.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.expense_tracker.backend.entity.Expense;
import com.expense_tracker.backend.helperClasses.MonthlyCategoryExpense;
import com.expense_tracker.backend.service.ExpenseService;

@RestController
@CrossOrigin
@RequestMapping("/expenses")
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	
	@GetMapping("/")
	public List<Expense> getAllexpenses() {
		return null;
	}
	
	@GetMapping("/monthlyCategoryExpenses")
	public List<MonthlyCategoryExpense> getMonthlyCategoryExpense(@RequestParam(name="month") int month, @RequestParam(name="year") int year) {
		System.out.println("Month "+ month + " year "+ year);
		List<MonthlyCategoryExpense> monthlyCategoryExpenses = this.expenseService.getMontlyCategoryExpense(month, year);
		System.out.println(monthlyCategoryExpenses);
		return monthlyCategoryExpenses;
	}
	
	@GetMapping("/monthlyExpense")
	public List<Expense> getMonthlyExpenses(@RequestParam(name="month") int month, @RequestParam(name="year") int year) {
		System.out.println("Monthly Expense" + " Month "+ month + " year " + year);
		List<Expense> monthlyExpense = this.expenseService.getMonthlyExpense( month, year);
		System.out.println(monthlyExpense);
		return monthlyExpense;
	}
	
	@GetMapping("/customPeriodExpense")
	public List<Expense> getcustomPeriodExpenses(@RequestParam(name="fromDate") Date fromDate, @RequestParam(name="toDate") Date toDate) {
		System.out.println("Custom Period Expense" + " From Date "+ fromDate + " to Date " + toDate);
		List<Expense> cusyomPeriodExpense = this.expenseService.getCustomPeriodExpense(fromDate, toDate);
		System.out.println(cusyomPeriodExpense);
		return cusyomPeriodExpense;
	}
	
	@PostMapping("/addExpense")
	public Expense addExpense(@RequestBody Expense expense) {
		System.out.println("Post called");
		System.out.println(expense);
		Expense savedExpense = this.expenseService.addExpense(expense);
		return savedExpense;
	}
	
	@PutMapping("/updateExpense")
	public Expense updateExpense(@RequestBody Expense expense) {
		System.out.println("Put called");
		System.out.println(expense);
		Expense updatedExpense = this.expenseService.addExpense(expense);
		return updatedExpense;
	}

}
