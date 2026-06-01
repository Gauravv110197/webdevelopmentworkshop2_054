package com.ece.studentapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

	private Student student = new Student(101, "gaurav singh", "Electronics and Communication");

	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome to Student Management REST API";
	}

	@GetMapping("/student")
	public Student getStudent() {
		return student;
	}

	@PostMapping("/student")
	public Student addStudent(@RequestBody Student newStudent) {
		student = newStudent;
		return student;
	}

}
