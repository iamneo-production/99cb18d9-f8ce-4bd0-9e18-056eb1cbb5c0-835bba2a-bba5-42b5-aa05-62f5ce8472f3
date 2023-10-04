package com.example.demo1.service;

import java.util.*;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo1.entity.ProductEntity;
import com.example.demo1.repository.ProductRepo;

@Service
public class ProductService implements ProductServiceInt
{
	@Autowired
	private ProductRepo mri;
	
	@Override
	public List<ProductEntity>getAll()
	{
		return mri.findAll();
	}

	@Override
	public Optional<ProductEntity> getByPid(int pid) 
	{

		return mri.findById(pid);
	}

	@Override
	public Optional<ProductEntity> getByName(String name) 
	{
//		System.out.print(name+" 66");
		return mri.getByName(name);
	}

	@Override
	public List<ProductEntity> getByCategory(String category) 
	{
//		List<ProductEntity> list = new ArrayList<>();
		
		return mri.getByCategory(category);
	}

	@Override
	public void deleteByName(String name) 
	{
		mri.deleteByName(name);
	}

	@Override
	public void deleteByCategory(String category) 
	{
		mri.deleteByCategory(category);
	}

	@Override
	public void updateByPid(ProductEntity pe) 
	{
		mri.save(pe);	
	}


	@Override
	public List<ProductEntity> getByPriceG(int price) 
	{
		return mri.getByPriceG(price);
	}

	@Override
	public void addProduct(ProductEntity pe) 
	{
		mri.save(pe);
	}
	
}
