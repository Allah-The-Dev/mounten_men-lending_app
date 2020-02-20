package com.hackathon.mountenmenapp.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ColumnDefault;

import lombok.Data;

@Data
@Entity
@Table(name="User")
public class User {

	private static final String ADMIN_USER = "admin,user";

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String username;
	private String email;
	private String contactNo;
	@Temporal(TemporalType.DATE)
	private Date dob;
	private String password;
	private String roles = ADMIN_USER;
	private boolean active = true;
}
