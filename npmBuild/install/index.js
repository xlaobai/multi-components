import Layout from './layout';


const components = [
    Layout
]

export const install = (Vue, options = {}) => {
    console.log('是否走了这里啊');

    components.forEach((component) => {
        Vue.component(component.name, component)
    })
}

export default {
    Layout
}