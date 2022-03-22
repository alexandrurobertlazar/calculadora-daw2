import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-daw2';
  public operation: string = ""
  public result: string = ""

  handleClick(number: string) {
    switch (number) {
      case 'deleteAll':
        this.operation = ''
        break
      case 'delete':
        this.operation = this.operation.slice(0,-1)
        break
      case '=':
        try {
          if (eval(this.operation)) {
            this.result = eval(this.operation)
          } else {
            this.result = ''
          }
        } catch (e) {
          this.result = 'Operación inválida'
        }
        this.operation=''
        break
      case '√':
        this.operation = '(' + this.operation + ')**(1/2)'
        break
      default:
        this.operation += number
    }
  }
}
