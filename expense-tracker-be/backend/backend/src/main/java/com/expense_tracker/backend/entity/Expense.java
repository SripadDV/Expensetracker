package com.expense_tracker.backend.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="expenses")
@Data
@NoArgsConstructor
public class Expense {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="title")
	private String title;
	
	@Column(name="amount")
	private double amount;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="category")
	private String category;
	
	@Column(name="tag")
	private String tag;
	
	@Column(name="paymentMethod")
	private String paymentMethod;

	public Expense(int id, String title, double amount, String category, String tag, String paymentMethod) {
		super();
		this.id = id;
		this.title = title;
		this.amount = amount;
		this.category = category;
		this.tag = tag;
		this.paymentMethod = paymentMethod;
	}
	

}
