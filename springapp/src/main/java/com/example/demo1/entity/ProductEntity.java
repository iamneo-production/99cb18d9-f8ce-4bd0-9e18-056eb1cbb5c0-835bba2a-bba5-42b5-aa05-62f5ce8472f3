package com.example.demo1.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="tech_basket")
@Table(name="product")
public class ProductEntity 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="pid")
	private int pid;
	
	@Column(name="name")
	private String name;

	@Column(name="price")
	private int price;
	
	@Column(name="likes")
	private int likes;
	
	@Column(name="dislike")
	private int dislike;
	
	@Column(name="seller_id")
	private int seller_id;
	
	@Column(name="category")
	private String category;

	public ProductEntity(int pid, String name, int price, int likes, int dislike, int seller_id, String category) 
	{
		super();
		this.pid = pid;
		this.name = name;
		this.price = price;
		this.likes = likes;
		this.dislike = dislike;
		this.seller_id = seller_id;
		this.category = category;
	}
	
	public ProductEntity() {
		super();
	}

	public int getPid() 
	{
		return pid;
	}

	public void setPid(int pid) 
	{
		this.pid = pid;
	}

	public String getName() 
	{
		return name;
	}

	public void setName(String name) 
	{
		this.name = name;
	}

	public int getPrice() 
	{
		return price;
	}

	public void setPrice(int price) 
	{
		this.price = price;
	}

	public int getLikes() 
	{
		return likes;
	}

	public void setLikes(int likes) 
	{
		this.likes = likes;
	}

	public int getDislike() 
	{
		return dislike;
	}

	public void setDislike(int dislike) 
	{
		this.dislike = dislike;
	}

	public int getSeller_id() 
	{
		return seller_id;
	}

	public void setSeller_id(int seller_id) 
	{
		this.seller_id = seller_id;
	}

	public String getCategory() 
	{
		return category;
	}

	public void setCategory(String category) 
	{
		this.category = category;
	}

	@Override
	public String toString() {
		return "ProductEntity [pid=" + pid + ", name=" + name + ", price=" + price + ", likes=" + likes + ", dislike="
				+ dislike + ", seller_id=" + seller_id + ", category=" + category + "]";
	}
	
	
	
}
