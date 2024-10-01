import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../service/owner.service';
import { CommonModule } from '@angular/common'; // Για ngIf και άλλες οδηγίες


@Component({
  selector: 'app-all-onwers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-onwers-list.component.html',
  styleUrl: './all-onwers-list.component.css'
})
export class AllOnwersListComponent implements OnInit{

  owners: any[] = [];
  noOwnersFound: boolean = false;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    // this.getAllOwners();//if i want to load without button
  }

  getAllOwners() {
    this.ownerService.getAllOwners().subscribe(
      (data) => {
        this.owners = data;
        this.noOwnersFound = this.owners.length === 0;
      },
      (error) => {
        console.error('Error fetching owners:', error);
      }
    );
  }

}
