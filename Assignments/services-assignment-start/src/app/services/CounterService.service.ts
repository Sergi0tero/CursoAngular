import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{
    inactive : number;
    active : number;

    updateActive(activeList: number){
        this.active = activeList;
        console.log('Active numbers: ' + this.active);
    }

    updateInactive(inactiveList : number){
        this.inactive = inactiveList;
        console.log('Inactive numbers: ' + this.inactive);
    }

    setActive(){
        this.inactive--;
        this.active++;
        console.log('Active numbers: ' + this.active);
        console.log('Inactive numbers: ' + this.inactive);
    }

    setInactive(){
        this.inactive++;
        this.active--;
        console.log('Active numbers: ' + this.active);
        console.log('Inactive numbers: ' + this.inactive);
    }
}