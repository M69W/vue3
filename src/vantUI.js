import { Button, Cell, CellGroup } from 'vant'
import 'vant/lib/index.css'

function vantUI (appVue) {
    appVue
    .use(Button)
    .use(Cell)
    .use(CellGroup)
}
export default vantUI
