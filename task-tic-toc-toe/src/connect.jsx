import { useEffect, useState } from 'react'
import { store } from './store'

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => {
    return (props) => {
      const [state, setState] = useState(store.getState())
      
      useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          setState(store.getState())
        })
        return () => unsubscribe()
      }, [])
      
      const stateProps = mapStateToProps ? mapStateToProps(state) : {}
      const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
      
      return <Component {...props} {...stateProps} {...dispatchProps} />
    }
  }
}