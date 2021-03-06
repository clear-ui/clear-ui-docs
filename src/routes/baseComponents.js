import Attachment from '../pages/docs/base/attachment'
import Button from '../pages/docs/base/button'
import DropdownMenu from '../pages/docs/base/dropdownMenu'
import Input from '../pages/docs/base/input'
import Menu from '../pages/docs/base/menu'
import Modal from '../pages/docs/base/modal'
import Notification from '../pages/docs/base/notification'
import Scrollspy from '../pages/docs/base/scrollspy'
import Sticky from '../pages/docs/base/sticky'
import Tooltip from '../pages/docs/base/tooltip'
import ZContext from '../pages/docs/base/zContext'

export default [
	{path: 'attachment', component: Attachment},
	{path: 'button', component: Button},
	{path: 'dropdown-menu', component: DropdownMenu},
	{path: 'input', component: Input},
	{path: 'menu', component: Menu},
	{path: 'modal', component: Modal},
	{path: 'notification', component: Notification},
	{path: 'scrollspy', component: Scrollspy},
	{path: 'sticky', component: Sticky},
	{path: 'tooltip', component: Tooltip},
	{path: 'zcontext', component: ZContext}
]
