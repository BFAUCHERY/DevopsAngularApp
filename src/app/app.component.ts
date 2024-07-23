import { Component } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  persons: any[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(
      (data) => {
        this.persons = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
}
