import RCEHDispatcher from "dispatcher/RCEHDispatcher";
import { ActionTypes } from "constants/AppConstants";

export default {
	search(term) {
		RCEHDispatcher.handleViewAction(ActionTypes.SEARCH, term);

		
	}
}