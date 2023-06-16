import { Injectable } from "@angular/core";
import { CounterService } from "./CounterService.service";

@Injectable()
export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor( private counterService : CounterService){
        this.counterService.updateActive(this.activeUsers.length);
        this.counterService.updateInactive(this.inactiveUsers.length);

    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.setInactive();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.setActive();
    }
}