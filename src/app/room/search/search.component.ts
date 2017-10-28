import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { SocketService } from '../../socket.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
    public results$: Observable<SearchResult[]>;
    public searchTerm: string;
    public isExpanded: boolean;
    public dimensions: { x: number, y: number };

    constructor(private http: Http, private socketService: SocketService, private el: ElementRef) {
        this.isExpanded = false;
    }

    public ngAfterViewInit(): void {
        this.dimensions = {
            x: this.el.nativeElement.offsetWidth,
            y: this.el.nativeElement.offsetHeight,
        };
        console.log(this.dimensions);
    }

    public search(): void {
        this.results$ = this.http.get(`${environment.server.url}/search?q=${this.searchTerm}`)
            .map((res) => res.json());
    }

    public addSong(song: SearchResult): void {
        this.socketService.Socket.emit('add-song', song);
    }
}
