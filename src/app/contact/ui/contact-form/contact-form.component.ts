import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { Contact } from 'app/contact/data-access/contact.model';
import { InputTextareaModule } from 'primeng/inputtextarea';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, ReactiveFormsModule, CommonModule, ToastModule, TooltipModule, InputTextareaModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  providers: [MessageService]
})
export class ContactFormComponent {

  @Output() formSubmitted = new EventEmitter<Contact>();

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}

  contactForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(300)]]
  })

  submit() {
    console.warn(this.contactForm);
    if(this.contactForm.valid){ //Double vérification
      const formData: Contact = this.contactForm.value as Contact; //Ne peuvent pas être null -> Validators.required
      this.formSubmitted.emit(formData);
      //Attente de la réponse du service, puis ->
      this.messageService.add({ severity: 'success', summary: 'Formulaire soumis', detail: 'Demande de contact envoyée avec succès' });
    }
  }
}
