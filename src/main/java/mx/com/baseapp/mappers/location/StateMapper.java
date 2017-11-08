package mx.com.baseapp.mappers.location;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import mx.com.baseapp.model.geography.Country;
import mx.com.baseapp.model.geography.State;

public interface StateMapper {
	List<State> getStates(Country country);
}
