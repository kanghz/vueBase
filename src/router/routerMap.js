import system from './module/system'
import device from './module/device'
import application from './module/application'

const routerMap = {
  ...system,
  ...device,
  ...application
}

export default routerMap;