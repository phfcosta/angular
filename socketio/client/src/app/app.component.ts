import { Component, Input, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { SocketIoService } from './socket-io.service';
import { Message } from './message';
import { Subscription } from 'rxjs';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  nickname: string;
  message: string;
  messages: Message[] = [];
  private subscriptionMessages: Subscription;
  private subscriptionList: Subscription;

  @ViewChild(MatList, {read: ElementRef, static: true}) list: ElementRef; 
  @ViewChildren(MatListItem) ListItems: QueryList<MatListItem>;

  constructor(private socketService: SocketIoService){

  }

  ngOnInit() {
    this.subscriptionMessages = this.socketService.messages()
      .subscribe((m: Message) =>{
        console.log(m);
        this.messages.push(m);
      })
  }

  ngAfterViewInit() {
    this.subscriptionList = this.ListItems.changes.subscribe((e) => {
      this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
      //console.log(this.list.nativeElement.scrollHeight);
    });
  }

  send() {
    console.log(this.message);
    this.socketService.send({
        from: this.nickname,
        message: this.message
      }
    )
    
    this.message = '';
  }

  ngOnDestroy() {
    this.subscriptionMessages.unsubscribe();
    this.subscriptionList.unsubscribe();
  }

}
