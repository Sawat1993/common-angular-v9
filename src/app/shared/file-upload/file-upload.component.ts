import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() fileName = '';
  @Input() fileBlob: Blob;
  @Output() fileDetail = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  fileChangeEvent(fileInput: any) {
    const reader = new FileReader();
    const component = this;
    reader.onload = function() {
      // tslint:disable-next-line:one-variable-per-declaration
      const arrayBuffer: any = this.result;
      // const array = new Uint8Array(arrayBuffer);
      // const binaryString = String.fromCharCode.apply(null, array);
      component.fileName = fileInput.target.files[0].name;
      component.fileBlob = new Blob([arrayBuffer], { type: 'octet/stream' });
      component.fileDetail.emit({ fileName: component.fileName, fileBlob: component.fileBlob });
    };
    reader.readAsArrayBuffer(fileInput.target.files[0]);
  }

  download() {
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(this.fileBlob);
      link.setAttribute('href', url);
      link.setAttribute('download', this.fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }


}
