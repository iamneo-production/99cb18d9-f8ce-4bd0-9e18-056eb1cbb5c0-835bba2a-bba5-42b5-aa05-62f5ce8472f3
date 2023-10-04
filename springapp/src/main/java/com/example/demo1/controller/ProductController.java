package com.example.demo1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo1.entity.*;
import com.example.demo1.service.ProductService;
import java.util.*;
@RestController
@CrossOrigin("*")
public class ProductController 
{
	@Autowired
	private ProductService ms;
	
	@GetMapping("/x")
	public String print()
	{
		return "Perfect";
	}
	
	@GetMapping("/getAll")
	public List<ProductEntity>getAll()
	{
		return ms.getAll();
	}
	
	@PostMapping("/getByPid")
	public Optional<ProductEntity> getByPid(@RequestBody PidEntity id)
	{
//		System.out.print(id.getPid());
		return ms.getByPid(id.getPid());
	} 
	
	@PostMapping("/getByName")
	public Optional<ProductEntity>getByName(@RequestBody PnameEntity name)
	{
//		System.out.print(name);
		return ms.getByName(name.getName());	
	}
	
	@PostMapping("/getByCategory")
	public List<ProductEntity>getByCategory(@RequestBody PcategoryEntity category)
	{
		return ms.getByCategory(category.getCategory());
	}
	
	@GetMapping("/getByPriceG")
	public List<ProductEntity>getByPriceG(@RequestParam int price)
	{
		return ms.getByPriceG(price);
	}

	@PostMapping("/addProduct")
	public void addProduct(@RequestBody ProductEntity pe)
	{
		ms.addProduct(pe);
	}
	
	@RequestMapping({"/updateByPid"})
    public void updateData(@RequestBody ProductEntity pe,@RequestParam int pid)
	{
    	pe.setPid(pid);
    	ms.updateByPid(pe);
	}
	
	@DeleteMapping("/deleteByName")
	public void deleteByName(@RequestParam String name)
	{
		System.out.print(0);
		ms.deleteByName(name);
	}
	
	@DeleteMapping("/deleteByCategory")
	public void deleteByCategory(@RequestParam String category)
	{
		ms.deleteByCategory(category);
	}
	
}
