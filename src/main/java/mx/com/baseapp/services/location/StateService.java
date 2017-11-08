package mx.com.baseapp.services.location;

import java.util.List;

import mx.com.baseapp.model.geography.Country;
import mx.com.baseapp.model.geography.State;

public interface StateService {
	List<State> getStates(Country country);
}
