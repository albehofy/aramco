import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FetchingDataService } from '../../Services/fetching-data.service';
import {  MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css', 
  providers:[MessageService]
})
export class ContactUsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
  });

  submitted = false;

  general = {
    phone: "", 
    address: '', 
    email: ''
  }
  constructor(private formBuilder: FormBuilder, private fd:FetchingDataService,private messageService: MessageService) { 
    this.fd.gettingSettings().subscribe(
      {
        next: (res) => {
          this.general = res["result"].general_settings;
          console.log(res.result)
        }
      }
    )
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern("[0-9 ]{11}")]],
        message: [
          '',
          [
            Validators.required,
            Validators.minLength(21),
          ]
        ],

      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.fd.sendingMessage(JSON.stringify(this.form.value, null, 2)).subscribe(
      {
        next: (res)=>{
          console.log(res); 
          let severity =  res.success ? "عملية ناجحة" : "حدث خطأ"; 
          let message =  res.message == "Submitted Successfully!" ? "تم ارسال رسالتك" : res.message;  
          this.show(severity, message);
          
        }
      }
    ); 
  }

  show(severity:string, message:string) {
    this.messageService.add({ severity: severity, detail: message });
}
}
