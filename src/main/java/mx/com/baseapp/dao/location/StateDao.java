package mx.com.baseapp.dao.location;

import java.util.List;

import mx.com.baseapp.model.geography.Country;
import mx.com.baseapp.model.geography.State;

public interface StateDao {
	
	public List<State> getStates(Country country);
	
}
