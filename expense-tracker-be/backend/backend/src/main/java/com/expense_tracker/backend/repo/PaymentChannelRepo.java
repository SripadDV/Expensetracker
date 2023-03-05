package com.expense_tracker.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.expense_tracker.backend.entity.PaymentChannel;

@Repository
public interface PaymentChannelRepo extends JpaRepository<PaymentChannel, Integer> {


	@Query(
		name = "PaymentChannel.findByPaymentChannel",
		value = "SELECT P from PaymentChannel P WHERE P.paymentChannel = :paymentChannelVal"
	)
	PaymentChannel findByPaymentChannel(@Param("paymentChannelVal") String paymentChannel);

}
