import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IContact} from "../../model";

type ContactContentType = {
    name: FormControl<IContact['name'] | null>
    surname: FormControl<IContact['surname'] | null>
    email: FormControl<IContact['email'] | null>
    message: FormControl<IContact['message'] | null>
    phoneNumber: FormControl<IContact['phoneNumber'] | null>
}

export type ContactFormGroup = FormGroup<ContactContentType>

@Injectable({
    providedIn: 'root'
})
export class ContactFormService {

    createContactForm(): ContactFormGroup {
        return new FormGroup<ContactContentType>({
            name: new FormControl(null, [Validators.required]),
            surname: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required]),
            message: new FormControl(null, [Validators.required]),
            phoneNumber: new FormControl(null, [Validators.required]),
        })
    }
}
