import {DataService} from '../data-service';
/**
 * data service for users
 * @extends DataService
 */
export class UserDataService extends DataService {

    getUsers() {
        return new Promise(resolve => {
            this.get('users')
                .catch(() => {
                    resolve(null);
                })
                .then((data) => {
                    resolve(data || null);
                });
        });
    }

    getUser(id) {
        return new Promise(resolve => {
            this.get(`user/${id}`)
                .catch(() => {
                    resolve(null);
                })
                .then((data) => {
                    resolve(data || null);
                });
        });
    }

    getCurrentUser() {
        return new Promise(resolve => {
            this.get('user/current')
                .catch(() => {
                    resolve(null);
                })
                .then((data) => {
                    resolve(data || null);
                });
        });
    }

    currentUserIsAdmin() {
        return new Promise(resolve => {
            this.getCurrentUser()
                .then((user) => {
                    if (user) {
                        resolve(user.enabled && user.roles && user.roles.filter(r => r.name === 'ROLE_ADMIN').length > 0);
                    } else {
                        resolve(false);
                    }
                });
        });
    }

    getJwtToken(expiration = null) {
        return new Promise(resolve => {
            this.get(expiration ? `user/token?expiration=${expiration}` : 'user/token')
                .catch(() => {
                    resolve(null);
                })
                .then((data) => {
                    resolve(data.token || null);
                });
        });
    }

    createUser(userBody) {
        return new Promise(resolve => {
            this.post('user', userBody)
                .catch(() => {
                    resolve(null);
                })
                .then((data) => {
                    resolve(data || null);
                });
        });
    }

    updateUser(id, userBody) {
        return new Promise(resolve => {
            this.put(`user/${id}`, userBody)
                .catch(() => {
                    resolve(null);
                })
                .then((data) => {
                    resolve(data || null);
                });
        });
    }

    deleteUser(id) {
        return new Promise(resolve => {
            this.delete(`user/${id}`)
                .catch(() => {
                    resolve(null);
                })
                .then((data) => {
                    resolve(data || null);
                });
        });
    }

}