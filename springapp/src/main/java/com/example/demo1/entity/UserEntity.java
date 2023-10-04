package com.example.demo1.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class UserEntity 
{
	@Id
	@Column(name="user_id")
	private int user_id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;

	public UserEntity(int user_id, String name, String email, String password) 
	{
		super();
		this.user_id = user_id;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public int getUser_id() 
	{
		return user_id;
	}

	public void setUser_id(int user_id) 
	{
		this.user_id = user_id;
	}

	public String getName() 
	{
		return name;
	}

	public void setName(String name) 
	{
		this.name = name;
	}

	public String getEmail() 
	{
		return email;
	}

	public void setEmail(String email) 
	{
		this.email = email;
	}

	public String getPassword() 
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

}
