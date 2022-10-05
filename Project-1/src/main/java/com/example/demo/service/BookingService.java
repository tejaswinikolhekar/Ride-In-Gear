package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository brepo;
	public Booking save(Booking b)
	{
		return brepo.save(b);
	}
	public void getDelete(int bid)
	{
		brepo.getDelete(bid);
	}
	public List<Booking> getbooking()
	{
		return brepo.findAll();
	}
	public List<Booking> getbookingbycid(int cid)
	{
		return brepo.getbookingbycid(cid);
	}
}
