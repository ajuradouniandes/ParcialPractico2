import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  animeId!: string;
  @Input() animeDetail!: Anime;

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute,
  ) { }

  getAnimeDetail(): void {
    const id = this.animeId;
    this.animeService.getAnime(id).subscribe((anime: Anime) => {
      this.animeDetail = anime;
    });
  }

  ngOnInit() {
    if(this.animeDetail === undefined){
      this.animeId = this.route.snapshot.paramMap.get('id')!;
      if(this.animeId !== undefined){
        this.getAnimeDetail();
      }
    }
  }
}
