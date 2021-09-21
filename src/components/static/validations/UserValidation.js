import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const userSchema = yup.object().shape({

    name:yup.string().required(),
    email:yup.string().email('Invalid email format').required('Required'),
    phone:yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    massage:yup.string().required(),

});
