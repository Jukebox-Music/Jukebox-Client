import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { SocketService } from '../../socket.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public results$: Observable<SearchResult[]>;
    public searchTerm: string;

    constructor(private http: Http, private socketService: SocketService) { }

    public ngOnInit(): void {
    }

    public search(): void {
        this.results$ = this.http.get(`${environment.server.url}/search?q=${this.searchTerm}`)
            .map((res) => res.json());
    }

    public addSong(song: SearchResult): void {
        this.socketService.Socket.emit('add-song', song);
    }

}
