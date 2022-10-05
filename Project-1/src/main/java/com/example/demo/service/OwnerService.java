package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Owner;
import com.example.demo.repository.OwnerRepository;

@Service
public class OwnerService {
	@Autowired
	OwnerRepository orepo;
	public List<Owner> getOwner()
	{
		return orepo.findAll();	
	}
	public void getDelete(int oid)
	{
		orepo.getDelete(oid);
	}
	public Owner save(Owner o)
	{
		return orepo.save(o);
	}
	public List<Owner> getownerbyoid(int oid)
	{
		return orepo.getownerbyoid(oid);
	}
}
