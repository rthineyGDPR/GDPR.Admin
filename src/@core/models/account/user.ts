export class User {
  userIdentifier: string;
  displayableId: string;
  name: string;
  email: string;
  first: string;
  last: string;
  id: number;
  role: string;
  isAuthenticated: boolean;
  imageUrl: string;
}
export interface IIdleUser {
  timeoutValue: number;
  timeoutStatus: string;
  showAlert: boolean;
}
export class IdleUser {
  timeoutCount = 0;
  timeoutStatus = 'default';
  showAlert = false;
  update(timer: number, count?: number) {
    this.timeoutCount = count;
    if (count === 0 || count === null) {
      this.timeoutStatus = 'default';
      this.timeoutCount = 0;
    } else {
      this.timeoutCount = Math.floor((count / timer) * 100);
    }
    this.showAlert = this.timeoutCount > 0;
    if (this.timeoutCount < 30) {
      this.timeoutStatus = 'primary';
    } else if (this.timeoutCount >= 30 && this.timeoutCount <= 65) {
      this.timeoutStatus = 'warning';
    } else {
      this.timeoutStatus = 'danger';
    }
  }
}
