package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository crepo;
	public List<Customer> getcust()
	{
		return crepo.findAll();	
	}
	public void getDelete(int cid)
	{
		crepo.getDelete(cid);
	}
	public Customer save(Customer c)
	{
		return crepo.save(c);
	}
	public List<Customer> getcustomerbyid(int cid)
	{
		return crepo.getcustomerbyid(cid);
	}
	/*public Optional<Customer> getAll(int cid)
	{
		return crepo.getAll(cid);
	}*/
}