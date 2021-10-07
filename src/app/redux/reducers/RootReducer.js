import { combineReducers } from 'redux'
import NotificationReducer from './NotificationReducer'
import NavigationReducer from './NavigationReducer'

const RootReducer = combineReducers({
    notifications: NotificationReducer,
    navigations: NavigationReducer,
})

export default RootReducer
