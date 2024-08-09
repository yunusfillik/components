import BackofficeIcon from './backoffice.icon'
import FinrotaIcon from './finrota.icon'
import HopiIcon from './hopi.icon'
import KredimBusinessIcon from './kredim-business.icon'
import KredimIcon from './kredim.icon'
import ParamIcon from './param.icon'
import ParamTechIcon from './paramtech.icon'
import PayCoreIcon from './paycore.icon'
import TwistoIcon from './twisto.icon'
import UniveraIcon from './univera.icon'
import UnivisIcon from './univis.icon'

export {
  BackofficeIcon,
  FinrotaIcon,
  HopiIcon,
  KredimBusinessIcon,
  KredimIcon,
  ParamIcon,
  ParamTechIcon,
  PayCoreIcon,
  TwistoIcon,
  UniveraIcon,
  UnivisIcon,
}

interface Logos {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>
}

export const logos: Logos = {
  BackofficeIcon,
  FinrotaIcon,
  HopiIcon,
  KredimBusinessIcon,
  KredimIcon,
  ParamIcon,
  ParamTechIcon,
  PayCoreIcon,
  TwistoIcon,
  UniveraIcon,
  UnivisIcon,
}
