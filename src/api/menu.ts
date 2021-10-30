import {api} from './index'
import {MenuTypes} from '../types/menu'

export const fetchMenu = () => {
  return api.get<MenuTypes[]>('menu.json')
}
