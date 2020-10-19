import { Button, Calendar, Cell, CellGroup } from 'vant'
import 'vant/lib/index.css'
import '/@modules/vant/lib/index.css'

function vantUI (appVue) {
    appVue
    .use(Button)
    .use(Calendar)
    .use(Cell)
    .use(CellGroup)
}
export default vantUI
