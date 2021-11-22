import {api} from './index'
import {IMenu} from '../types/menu'

export const fetchMenu = () => {
  return api.get<IMenu[]>('menu.json')
}
