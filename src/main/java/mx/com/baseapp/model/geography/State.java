package mx.com.baseapp.model.geography;

import java.util.List;

public class State {
	
	// Default constructor
	public State() {
		
	}
	
	private Integer id;
	private String name;
	private String acronym;
	private Country country;
	private List<Town> towns;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getAcronym() {
		return acronym;
	}
	
	public void setAcronym(String acronym) {
		this.acronym = acronym;
	}
	
	public Country getCountry() {
		return country;
	}
	
	public void setCountry(Country country) {
		this.country = country;
	}
	
	public List<Town> getTowns() {
		return towns;
	}
	
	public void setTowns(List<Town> towns) {
		this.towns = towns;
	}
}
