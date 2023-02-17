import { Component, OnInit } from '@angular/core';
import jsPDF from :'jspdf';
import { MyServices } from :'/my.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  a =0;
  b = 0;
  sum;
  x=0;
  y=0;
  result;
  p=0;
  q=0;
  solution;
  t=0;
  s=0;
  result1=0;

  num=0;
  number;

  formGroup: any;

  isChecked = true;

 
 



 
  constructor(private myService: MyServices) {
    this.sum = this.myService.addition(this.a, this.b);
    this.result=this.myService.substraction(this.x,this.y);
    this.solution = this.myService.multiplication(this.p, this.q);
    this.result1 = this.myService.division(this.s, this.t);
    this.number = this.myService.squareRoot(this.num);
  }
 
  addition() {
    this.sum = this.myService.addition(this.a, this.b);
  }

  substraction(){
    this.result = this.myService.substraction(this.x, this.y);
  }

  multiplication(){
    this.solution = this.myService.multiplication(this.p, this.q);
  }

  division(){
    this.result1 = this.myService.division(this.s, this.t);
  }

  squareRoot(){
    this.number = this.myService.squareRoot(this.num);

  }
  onFormSubmit() {

    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
  public downloadAsPDF() {

    let data = document.getElementById('htmltable');
  
       
  
    html2canvas(data!).then(canvas => {
  
           
  
            let docWidth = 208;
  
            let docHeight = canvas.height * docWidth / canvas.width;
  
           
  
            const contentDataURL = canvas.toDataURL('image/png')
  
            let doc = new jsPDF('p', 'mm', 'a4');
  
            let position = 0;
  
            doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
  
           
  
            doc.save('exportedPdf.pdf');
  
        });
  
  
  
   
  }
  

}
