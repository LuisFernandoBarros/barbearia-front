import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExtractMessageService } from '../../../../../shared/services/extract-message.service';
import { MSG_PADRAO } from '../../../../../shared/services/msg-padrao.enum';
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
  public filePath: string;
  public isLoading: boolean;

  uploadForm = new FormGroup({
    file: new FormControl('', [Validators.required])
  });

  constructor(private service: CadastroBarbeariaService,
    private toast: ToastrService,
    private extractMsg: ExtractMessageService) { }

  ngOnInit(): void {
  }


  get uf() {
    return this.uploadForm.controls;
  }


  onImageChange(e) {
    if (e.target.files && e.target.files.length) {
      this.file = e.target.files[0];
      this.imagePreview();
    }
  }

  upload() {
    this.isLoading = true;
    this.service.uploadImg(this.file, this.barbearia.id)
      .subscribe(response => {
        this.toast.success(MSG_PADRAO.SAVE_SUCCESS);
        this.isLoading = false;
      }),
      (err) => {
        this.toast.error(this.extractMsg.extractMessageFromError(err, MSG_PADRAO.ERROR_SERVER));
        this.isLoading = false;
      }
  }

  imagePreview() {
    var reader = new FileReader();

    reader.readAsDataURL(this.file); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.filePath = event.target.result as string;
    }
  }

}
