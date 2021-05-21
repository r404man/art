import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Art } from 'src/app/interfaces/art';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-art-create-form',
  templateUrl: './art-create-form.component.html',
  styleUrls: ['./art-create-form.component.scss']
})
export class ArtCreateFormComponent implements OnInit {
  artThumb = null;
  message:string = null;

  constructor(private artService: ArtService) { }

  addArt(form: NgForm) {
    let artItem: Art = form.value;
    if (this.artThumb != null
      && artItem.price.length != 0
      && artItem.size.length != 0
      && artItem.title.length != 0) {
        this.artService.addArt(artItem, this.artThumb).finally(
          () => {
            form.reset();
            this.message = 'Картина успешно добавлена!'
          }

        ).catch(
        (err) => {
          this.message = 'Повторите попытку'
          console.error(err);
        }
        );
    }
  }

  thumb(event) {
    this.artThumb = event.target.files[0];
  }

  ngOnInit(): void {
  }

}
