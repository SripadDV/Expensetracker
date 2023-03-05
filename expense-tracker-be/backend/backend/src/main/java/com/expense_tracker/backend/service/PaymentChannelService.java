package com.expense_tracker.backend.service;

import java.util.List;

import com.expense_tracker.backend.entity.PaymentChannel;

public interface PaymentChannelService {
	
	List<PaymentChannel> getAllPaymentChannels();
	void addPaymentChannel(String paymentChannel);

}
