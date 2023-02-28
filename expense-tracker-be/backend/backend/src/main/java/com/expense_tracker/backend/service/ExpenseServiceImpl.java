package com.expense_tracker.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense_tracker.backend.entity.Expense;
import com.expense_tracker.backend.helperClasses.MonthlyCategoryExpense;
import com.expense_tracker.backend.repo.ExpenseRepo;

@Service
public class ExpenseServiceImpl implements ExpenseService {
	
	@Autowired
	private ExpenseRepo expenseRepo;
	
	@Override
	public Expense addExpense(Expense expense) {
		Expense savedExpense = this.expenseRepo.save(expense);
		return savedExpense;
	}

	@Override
	public Expense updateExense(Expense expense) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteExpense(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Expense> getExpense() {
		
		List<Expense> expenses = this.expenseRepo.findAll();
		return expenses;
	}

	@Override
	public List<MonthlyCategoryExpense> getMontlyCategoryExpense(int month, int year) {
		List<MonthlyCategoryExpense> monthlyCategoryExpense = this.expenseRepo.findByMonthCategory(month, year);
		return monthlyCategoryExpense;
	}

}
