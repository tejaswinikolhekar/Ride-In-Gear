package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Admin;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Owner;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.OwnerRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository lrepo;
	@Autowired
	CustomerRepository crepo;
	@Autowired
	OwnerRepository orepo;
	@Autowired
	AdminRepository arepo;
	public List<Login> getlogin()
	{
		return lrepo.findAll();
	}
	public Login save(Login l)
	{
		return lrepo.save(l);
	}
	public Object checkLogin(String uname,String pwd)
	{
		System.out.println(uname +" : "+pwd);
		List<Login> l=lrepo.checkLogin(uname,pwd);
		if(l.size()==1 && l.get(0).getRole().equals("customer"))
		{
			//System.out.println((String) l.get(0)[0]);
			//System.out.println((int) l.get(0)[1]);
			//int i=(int) l.get(0)[1];
			//int i=8;
			//System.out.print(i);
			Customer c=null;
			Optional<Customer> oc= crepo.getCust((Login) l.get(0));
			try {
				c=oc.get();
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			return c;
		}
		else if(l.size()==1 && l.get(0).getRole().equals("owner"))
		{
			Owner o=null;
			Optional<Owner> oo= orepo.getOwe((Login) l.get(0));
			try {
				o=oo.get();
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			return o;
		}
		else if(l.size()==1 && l.get(0).getRole().equals("admin"))
		{
			Admin a =null;
			Optional<Admin> oo= arepo.getoad((Login) l.get(0));
			try {
				a=oo.get();
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			return a;
		}
		else
		{
			return null;
		}
		/*if(l.size()==1)
		{
			//System.out.println((String) l.get(0)[0]);
			//System.out.println((int) l.get(0)[1]);
			//int i=(int) l.get(0)[1];
			//int i=8;
			//System.out.print(i);
			Customer c=null;
			Owner o=null;
			if(l.get(0).getRole().equals("customer"))
			{
				Optional<Customer> oc= crepo.getCust((Login) l.get(0));
				try {
					c=oc.get();
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
				return c;
			}
			else if(l.get(0).getRole().equals("owner"))
			{
				Optional<Owner> oo= orepo.getOwe((Login) l.get(0));
				try {
					o=oo.get();
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
				return o;
			}
		}
		else
		{
			return null;
		}*/
	}
}