package com.hackathon.mountenmenapp.entity;

import java.util.Date;

import javax.persistence.Column;
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
    @Column(name = "Id", nullable = false)
	private int userId;

	@Column(name="Full_Name",length = 50, nullable = false)
	private String fullName;

	@Column(name="Email",length = 50, nullable = false)
	private String email;

	@Column(name="Contact_No",length = 10, nullable = false)
	private String contactNo;

	@Temporal(TemporalType.DATE)
	@Column(name="Date_Of_Birth",length = 10, nullable = false)
	private Date dob;

	@Column(name="Password",length = 30, nullable = false)
	private String password;
}
