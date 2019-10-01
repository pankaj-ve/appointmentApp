import { Component, OnInit } from '@angular/core';
import { FirebaseService, CommonService } from '../../services';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    private _firebase:FirebaseService, 
    private _common:CommonService
  ) { }

  ngOnInit() {
  }

}
