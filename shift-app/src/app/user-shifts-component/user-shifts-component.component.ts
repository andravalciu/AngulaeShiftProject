import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-shifts-component',
  templateUrl: './user-shifts-component.component.html',
  styleUrls: ['./user-shifts-component.component.scss']
})
export class UserShiftsComponentComponent implements OnInit {
  toDate = new Date();
  fromDate = new Date();
  shifts: any[]= [];
  shiftPlace: string;
  
 
  hourlyWage: number;

  constructor(private firestore: AngularFirestore) {}
  ngOnInit() {
    this.getShifts();
  }
  getShifts() {
    this.firestore.collection('Shifts').valueChanges().subscribe((shifts: any[]) => {
      this.shifts = shifts;
    });
  }

  addShift() {
    try {
      // Create new shift object with input values
      const shift = {
        date: new Date(),
        startTime: this.fromDate,
        endTime: this.toDate,
        hourlyWage: this.hourlyWage,
        workplace: this.shiftPlace,
        totalProfit: 0
      };

    
      // Add new shift to Firestore "Shifts" collection
      this.firestore.collection('Shifts').add(shift).then((ref) => {
        console.log('New shift added with ID: ', ref.id);
      });
    } catch (e) {
      console.error('Error adding shift: ', e);
    }
  }
}
