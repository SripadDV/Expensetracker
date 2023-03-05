package com.expense_tracker.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.expense_tracker.backend.entity.Expense;
import com.expense_tracker.backend.helperClasses.MonthlyCategoryExpense;


public interface ExpenseService {
	
	Expense addExpense(Expense expense);
	Expense updateExense(Expense expense);
	void deleteExpense(int id);
	List<Expense> getMonthlyExpense(int month, int year);
	List<MonthlyCategoryExpense> getMontlyCategoryExpense(int month, int year);
	List<Expense> getCustomPeriodExpense(Date fromDate, Date toDate);
}
