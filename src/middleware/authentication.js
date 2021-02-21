
const Authentication = () => (localStorage.getItem('auth') === 'goToAdminPage') ? true : false
export default Authentication