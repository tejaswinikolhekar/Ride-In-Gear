package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Payment;
import com.example.demo.repository.PaymentRepository;

@Service
public class PaymentService {
	@Autowired
	PaymentRepository prepo;
	public List<Payment> getpay()
	{
		return prepo.findAll();
	}
	public void getDelete(int tid)
	{
		prepo.getDelete(tid);
	}
	public List<Payment> getpaybycid(int cid)
	{
		return prepo.getpaybycid(cid);
	}
	public List<Payment> getpaybybid(int bid)
	{
		return prepo.getpaybybid(bid);
	}
	public Payment save(Payment p)
	{
		return prepo.save(p);
	}
}
