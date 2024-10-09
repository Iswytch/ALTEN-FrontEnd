import { Component, signal } from '@angular/core';
import { ContactFormComponent } from '../ui/contact-form/contact-form.component';
import { Contact } from '../data-access/contact.model';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  handleFormSubmit(contactFormData: Contact) {
    console.log('Données du formulaire reçues :', contactFormData);
    //Appel du service...
  }

}
