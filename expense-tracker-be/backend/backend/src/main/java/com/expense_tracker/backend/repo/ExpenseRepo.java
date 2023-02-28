package com.expense_tracker.backend.repo;

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
	        name = "Expense.findByMonthCategory",
	        value = "SELECT new com.expense_tracker.backend.helperClasses.MonthlyCategoryExpense(MONTH(E.date), E.category, sum(E.amount)) FROM Expense E WHERE MONTH(E.date) = :monthValue AND YEAR(E.date) = :yearValue group by E.category"
	    )
	    List<MonthlyCategoryExpense> findByMonthCategory(@Param("monthValue") int month, @Param("yearValue") int year);

}
