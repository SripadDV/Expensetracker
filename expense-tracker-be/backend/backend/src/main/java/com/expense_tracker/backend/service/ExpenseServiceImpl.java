package com.expense_tracker.backend.service;

import java.util.ArrayList;
import java.util.Date;
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
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private PaymentChannelService paymentChannelService;
	
	@Override
	public Expense addExpense(Expense expense) {
		Expense savedExpense = this.expenseRepo.save(expense);
		this.categoryService.addCategory(expense.getCategory());
		this.paymentChannelService.addPaymentChannel(expense.getPaymentChannel());
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
	public List<Expense> getMonthlyExpense(int month, int year) {
		
		List<Expense> expenses = this.expenseRepo.findByMonth(month, year);
		return expenses;
	}

	@Override
	public List<MonthlyCategoryExpense> getMontlyCategoryExpense(int month, int year) {
		List<MonthlyCategoryExpense> monthlyCategoryExpense = this.expenseRepo.findByMonthCategory(month, year);
		return monthlyCategoryExpense;
	}

	@Override
	public List<Expense> getCustomPeriodExpense(Date fromDate, Date toDate) {
		List<Expense> customPeriodExpense =  this.expenseRepo.findByCustomPeriod(fromDate, toDate);
		return customPeriodExpense;
	}

}
