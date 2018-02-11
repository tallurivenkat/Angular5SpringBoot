package com.venkat.boa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.venkat.boa.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
