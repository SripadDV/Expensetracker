package com.expense_tracker.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="paymentChannel")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentChannel {
	
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Id")
	private int id;
	
	@Column(name="paymentChannel")
	private String paymentChannel;
	
	public PaymentChannel(String paymentChannel) {
		super();
		this.paymentChannel = paymentChannel;
	}
}
