package com.expense_tracker.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense_tracker.backend.entity.PaymentChannel;
import com.expense_tracker.backend.repo.PaymentChannelRepo;

@Service
public class PaymentChannelServiceImpl implements PaymentChannelService {

	@Autowired
	private PaymentChannelRepo paymentChannelRepo;
	
	@Override
	public List<PaymentChannel> getAllPaymentChannels() {
		List<PaymentChannel> paymentChannels = this.paymentChannelRepo.findAll();
		return paymentChannels;
	}

	@Override
	public void addPaymentChannel(String paymentChannel) {
		PaymentChannel existingPaymentChannel = this.paymentChannelRepo.findByPaymentChannel(paymentChannel);
		if(existingPaymentChannel == null) {
			PaymentChannel savedPaymentChannel = this.paymentChannelRepo.save(new PaymentChannel(paymentChannel));
		}
	}

}
