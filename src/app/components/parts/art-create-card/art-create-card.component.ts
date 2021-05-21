import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArtService } from 'src/app/services/art.service';
import { Art } from '../../../interfaces/art';

@Component({
  selector: 'app-art-create-card',
  templateUrl: './art-create-card.component.html',
  styleUrls: ['./art-create-card.component.scss']
})
export class ArtCreateCardComponent implements OnInit {
  @Input() item: Art;
  thumbUrl: string = null;
  editPannelControl: boolean = false;
  message: string = null;

  editThumbImg = null;

  constructor(private artService: ArtService) { }

  getThumb() {
    this.artService.getThumbArt(this.item.imgUrl).subscribe(
      data => {
        this.thumbUrl = data;
        // console.log(this.thumbUrl);
      }
    );
  }

  editPannel() {
    this.editPannelControl = !this.editPannelControl;
  }

  deleteArt(id: string) {
    this.artService.deleteArt(id, this.item.imgUrl).finally(
      () => {
        this.message = 'Картина успешно удалена!';
        // console.log('deleted');
      }
    );
  }

  editArt(form: NgForm) {
    let artItem: Art = form.value;
    artItem.id = this.item.id;
    artItem.imgUrl = this.item.imgUrl;
    this.artService.editArt(artItem).finally(
      () => {
        this.message = 'Изменения внесены';
      }
    );
  }

  ngOnInit(): void {
    this.getThumb();
  }

}
