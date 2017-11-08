package mx.com.baseapp.services.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mx.com.baseapp.dao.location.StateDao;
import mx.com.baseapp.model.geography.Country;
import mx.com.baseapp.model.geography.State;

@Service
public class StateServiceImpl implements StateService {

	@Autowired
	private StateDao stateDao;
	
	public StateServiceImpl(StateDao stateDao) {
		this.stateDao = stateDao;
	}
	
	public List<State> getStates(Country country) {
		return stateDao.getStates(country);
	}

}
