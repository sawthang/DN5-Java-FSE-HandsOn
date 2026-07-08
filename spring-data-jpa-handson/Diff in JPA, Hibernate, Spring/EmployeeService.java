package com.cognizant.ormlearn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;

/*
 * This class shows how the same "add employee" operation looks when
 * written using Spring Data JPA.
 *
 * Compare this with EmployeeDAOHibernate.java, which does the same thing
 * using plain Hibernate. Session handling, transaction commit/rollback
 * and exception handling are all managed by Spring here.
 */
@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Transactional
	public void addEmployee(Employee employee) {
		employeeRepository.save(employee);
	}

}
