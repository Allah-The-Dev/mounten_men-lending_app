package com.hackathon.mountenmenapp.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name="User")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	private String username;
	private String email;
	private String contactNo;
	@Temporal(TemporalType.DATE)
	private Date dob;
	private String password;
	private String roles;
	private boolean active;
}
