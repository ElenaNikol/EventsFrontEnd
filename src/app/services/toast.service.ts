import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

constructor(private toastr : ToastrService,) { }


  showMessage(type,title,message){
    if(type == 'success'){
      this.toastr.success(message, title)
    }else if(type == 'error'){
      this.toastr.error(message, title)
    }else if(type == 'info'){
          this.toastr.info(message, title)
    }else if(type == 'warning'){
      this.toastr.warning(message, title)
    }
  }
}
