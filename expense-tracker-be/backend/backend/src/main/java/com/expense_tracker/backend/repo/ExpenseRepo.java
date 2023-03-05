package com.expense_tracker.backend.repo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.expense_tracker.backend.entity.Expense;
import com.expense_tracker.backend.helperClasses.MonthlyCategoryExpense;

@Repository
public interface ExpenseRepo extends JpaRepository<Expense, Integer> {


	    @Query(
	        name = "Expense.findByMonthYearCategory",
	        value = "SELECT new com.expense_tracker.backend.helperClasses.MonthlyCategoryExpense(MONTH(E.date), E.category, sum(E.amount)) FROM Expense E WHERE MONTH(E.date) = :monthValue AND YEAR(E.date) = :yearValue group by E.category"
	    )
	    List<MonthlyCategoryExpense> findByMonthCategory(@Param("monthValue") int month, @Param("yearValue") int year);

	    
	    @Query(
	    		name="Expnese.findByMonth",
	    		value="Select E FROM Expense E where MONTH(E.date) = :monthValue AND YEAR(E.date) = :yearValue")
	    List<Expense> findByMonth(@Param("monthValue") int month, @Param("yearValue") int year);

	    @Query(
	    		name = "Expense.findByCustomPeriod",
	    		value = "Select E from Expense E WHERE E.date >= :fromDate AND E.date <= :toDate"
	    )
	    List<Expense> findByCustomPeriod(@Param("fromDate") Date fromDate, @Param("toDate") Date toDate);
}
