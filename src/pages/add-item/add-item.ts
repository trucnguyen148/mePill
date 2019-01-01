import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;
  items;
  langs;
  langForm;



  constructor(public navCtrl: NavController, public view: ViewController){
  this.langForm = new FormGroup({
      "langs": new FormControl()
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  initializeItems() {

    this.items = [
      {
        'title': 'PENICILIN 100MG',
        'color': '#E63135',
        'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
        'des1': '50 mg Paracetamol, 65mg Caffeine',
        'des2': 'Mỗi lần 1 viên',
        'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
      },
      {
        'title': 'PANADOL 100MG',
        'color': '#E63135',
        'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
        'des1': '50 mg Paracetamol, 65mg Caffeine',
        'des2': 'Mỗi lần 1 viên',
        'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
      },
      {
        'title': 'TAFFEL 200MG',
        'color': '#E63135',
        'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
        'des1': '50 mg Paracetamol, 65mg Caffeine',
        'des2': 'Mỗi lần 1 viên',
        'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
      },
      {
        'title': 'CẢM XUYÊN HƯƠNG 200MG',
        'color': '#E63135',
        'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
        'des1': '50 mg Paracetamol, 65mg Caffeine',
        'des2': 'Mỗi lần 1 viên',
        'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
      },
      {
        'title': 'SITI 200MG',
        'color': '#E63135',
        'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
        'des1': '50 mg Paracetamol, 65mg Caffeine',
        'des2': 'Mỗi lần 1 viên',
        'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
      },
    ];
  }

  

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description,
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

}
