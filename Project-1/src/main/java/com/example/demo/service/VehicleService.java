package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entities.Vehicle;
import com.example.demo.repository.VehicleRepository;

@Service
public class VehicleService {
	@Autowired
	VehicleRepository vrepo;
	public List<Vehicle> getveh()
	{
		return vrepo.findAll();
	}
	public Vehicle save(Vehicle v)
	{
		return vrepo.save(v);
	}
	public void getDelete(int vid)
	{
		vrepo.getDelete(vid);
	}
	public List<Vehicle> getbyvtype(String vtype)
	{
		return vrepo.getbyvtype(vtype);
	}
	public List<Vehicle> getbycategory(String category)
	{
		return vrepo.getbycategory(category);
	}
	public List<Vehicle> getbycity(String city)
	{
		return vrepo.getbycity(city);
	}
	public List<Vehicle> getbysearch(String city,String vtype)
	{
		return vrepo.getbysearch(city,vtype);
	}
	public Vehicle getvehbyid(int vid)
	{
		return vrepo.getvehbyid(vid);
	}
	public List<Vehicle> getvehbyoid(int oid)
	{
		return vrepo.getvehbyoid(oid);
	}
}
