package com.venkat.boa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.venkat.boa.entities.User;
import com.venkat.boa.repositories.UserRepository;

@SpringBootApplication
public class BoaSpringBootApplication implements CommandLineRunner{

	@Autowired
	private UserRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(BoaSpringBootApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("one","one"));
		userRepository.save(new User("two","one"));
		userRepository.save(new User("three","one"));
		
		
		
	}
}
