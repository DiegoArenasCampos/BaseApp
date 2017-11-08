package mx.com.baseapp.dao.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import mx.com.baseapp.mappers.location.StateMapper;
import mx.com.baseapp.model.geography.Country;
import mx.com.baseapp.model.geography.State;

@Component
public class StateDaoImpl implements StateDao {

	@Autowired
	private StateMapper stateMapper;
	
	public List<State> getStates(Country country) {
		List<State> states = stateMapper.getStates(country); 
		return states;
	}

}
