import { combineReducers } from 'redux' 
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'



const rootReducer = combineReducers({ 
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
}) 

export default rootReducer