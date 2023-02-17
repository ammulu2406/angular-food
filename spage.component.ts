import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-spage',
  templateUrl: './spage.component.html',
  styleUrls: ['./spage.component.css']
})
export class SpageComponent implements OnInit {
  save:Boolean=false
  one:String='';
  
    formGroup: any;
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    form1:any;
    public num1!: number;
    public num2!: number;
    public num3!: number;
    public num4!: number;
    public num5!: number;
    public num6!: number;
    public num7!: number;
    public num8!: number;
    public num9!: number;
    public result!: number;
    public result1!: number;
    public result2!: number;
    public result3!: number;
    public result4!: number;
  
    addition(){
      this.result =this.num1 + this.num2;
    }
    sub(){
      this.result1 =this.num3 - this.num4;
    }
    multi(){
      this.result2 =this.num5 * this.num6;
    }
    divide(){
      this.result3 =(this.num7) / (this.num8);
    }
    square(){
      this.result4=Math.sqrt(this.num9);
    }
    isChecked = true;

 

  onFormSubmit() {

    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
//  call(){
//      if(this.form1.name=''){
//        return true;
//      }
//    }
satwik(){
  this.one='hii'
}    

}
  