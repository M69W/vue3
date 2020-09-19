import { Button, Cell, CellGroup } from 'vant'

function vantUI (appVue) {
    appVue
    .use(Button)
    .use(Cell)
    .use(CellGroup)
}
export default vantUI