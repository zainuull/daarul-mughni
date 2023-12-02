export class GetUserService {
  getUser = () => {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  };
}
