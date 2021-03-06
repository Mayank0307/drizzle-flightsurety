import { toast } from 'react-toastify'
import { generateStore, EventActions } from 'drizzle'
import drizzleOptions from '../drizzleOptions'

const contractEventNotifier = store => next => action => {
  if (action.type === EventActions.EVENT_FIRED) {
    const contract = action.name
    const contractEvent = action.event.event
    // const message = action.event.returnValues
    // const adr = action.event.returnValues.adr
    // const data = action.event.returnValues.data
    // const display = `${contract} (${contractEvent}): ${message} ||| adr:${adr} | data: ${data}`
    const display = `${contract} (${contractEvent}) Check_Console `


    console.log(action)

    toast.success(display, { position: toast.POSITION.TOP_RIGHT })
  }
  return next(action)
}


const appMiddlewares = [ contractEventNotifier ]

const store = generateStore({
  drizzleOptions,
  appMiddlewares,
  disableReduxDevTools: false  // enable ReduxDevTools!
})

// Use the store with DrizzleProvider
export default store
