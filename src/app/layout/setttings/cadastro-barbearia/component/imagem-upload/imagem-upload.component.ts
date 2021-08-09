import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Barbearia } from '../../barbearia';
import { CadastroBarbeariaService } from '../../cadastro-barbearia.service';


@Component({
  selector: 'app-imagem-upload',
  templateUrl: './imagem-upload.component.html',
  styleUrls: ['./imagem-upload.component.css']
})
export class ImagemUploadComponent implements OnInit {


  public imgFile: string;
  @Input() barbearia: Barbearia;
  private file: File;

  uploadForm = new FormGroup({    
    file: new FormControl('', [Validators.required]),
    imgSrc: new FormControl('', [Validators.required])
  });

  constructor(private service: CadastroBarbeariaService) { }

  ngOnInit(): void {
  }


  get uf() {
    return this.uploadForm.controls;
  }


  onImageChange(e) {
    if (e.target.files && e.target.files.length) {
      this.file = e.target.files[0];
    }
  }

  upload() {
    this.service.uploadImg(this.file, this.barbearia.id)
      .subscribe(response => {
        alert('Image has been uploaded.');
      })
  }

}
