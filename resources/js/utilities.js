export default class Utility {
    static success(vm, title, message) {
        const options = vm.$awn.options;
        options.labels.success = title
        vm.$awn.success(message)
    }

    static warning(vm, title, message) {
        const options = vm.$awn.options;
        options.labels.warning = title
        vm.$awn.warning(message)
    }

    static alert(vm, title, message) {
        const options = vm.$awn.options;
        options.labels.alert = title
        vm.$awn.alert(message)
    }
}