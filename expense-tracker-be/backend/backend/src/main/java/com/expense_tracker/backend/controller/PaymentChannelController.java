package com.expense_tracker.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense_tracker.backend.entity.PaymentChannel;
import com.expense_tracker.backend.service.PaymentChannelService;

@RestController
@CrossOrigin
@RequestMapping("/paymentChannels")
public class PaymentChannelController {
	
	@Autowired
	private PaymentChannelService paymentChannelService;
	
	@GetMapping("/getAllPaymentChannels")
	public List<PaymentChannel> getAllPaymentChannels() {
		System.out.println("Get all payment channels");
		List<PaymentChannel> paymentChannels = this.paymentChannelService.getAllPaymentChannels();
		return paymentChannels;
	}
	
	

}
