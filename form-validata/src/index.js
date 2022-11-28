const form = document.querySelector('#form');

const strategys = {
    isNotEmpty: (value, errorMsg) => {
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: (value, length, errorMsg) => {
        if (value.length < length) {
            return errorMsg;
        }
    },
};

const Validator = function () {
    this.cache = [];
};

Validator.prototype.add = function (dom, rule, errorMsg) {
    const str = rule.split(":");
    this.cache.push(() => {
        const strategy = str.shift();

        str.unshift(dom.value);
        str.push(errorMsg);

        return strategys[strategy].apply(dom, str);
    });
};

Validator.prototype.start = function () {
    for (let i = 0; i < this.cache.length; i++) {
        const msg = this.cache[i]();
        if (msg) {
            return msg;
        }
    }
};

const validateFunc = () => {
    const validator = new Validator();
    validator.add(form.userName, 'isNotEmpty', '用户名不能为空');
    validator.add(form.passwd, 'minLength:6', '密码长度不能小于6位');

    const errorMsg = validator.start();
    return errorMsg;
};

form.onsubmit = () => {
    const errorMsg = validateFunc();
    if (errorMsg) {
        alert(errorMsg);
        return false;
    }
};