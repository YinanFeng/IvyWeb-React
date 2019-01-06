import { merge } from 'ramda'
import data from '../homePagePhoto/data'

const initialState = {
  NavSelect: 'HOME',
  TabSelected: 4,
  images: data,
  currentImage: '../homePagePhoto/Image2.jpg'
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
  case 'CHOOSE_TAB':
    console.log(state.TabSelected)
    return merge(state, { TabSelected: payload.selection })
    // return { TabSelected: payload.selection };
  case 'CHOOSE_NAV':
    console.log(state.NavSelect)
    return merge(state, { NavSelect: payload.selection })
  default:
    return state
  }
}

export const chooseTab = chooseId =>
  ({ type: 'CHOOSE_TAB', payload: { selection: chooseId } })

export const chooseNav = chooseNav =>
  ({ type: 'CHOOSE_NAV', payload: { selection: chooseNav } })
