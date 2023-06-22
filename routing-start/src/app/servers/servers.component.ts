import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // this.router.navigate(['servers'], {relativeTo: }) this wont work
    // this.router.navigate(['servers']) this works because it doesn't know the actual path where it is
    // this.router.navigate(['servers'], {relativeTo: this.route}) this would breake like the RouterLink would do
    this.router.navigate(['/servers'], {relativeTo: this.route})
  }
}
