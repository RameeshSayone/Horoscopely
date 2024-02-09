export const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text);
  };
export const validatePassword = (text) => {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/;
    return reg.test(text);
};
export const validatePhoneNumber = (text) => {
    let reg = /^\d{10}$/;
    return reg.test(text);
};