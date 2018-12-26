import {Component, Input, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Comments} from '../comment-maneg/comments.model';
import {CommentService} from '../comment-maneg/comment.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsService} from './events.service';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-comments-detils',
  template: `<div *ngIf="comments">
    <h2>comment details</h2>
  <ul class="list-group" *ngFor="let comment of comments">
    <li class="list-group-item">{{ comment.userid.username }} : "{{ comment.comment }}" on : {{comment.eventname}}</li>
  </ul>
    <div class="example-container">
      <form [formGroup]="commentForm" (ngSubmit)="sendComment()">
      <mat-form-field hintLabel="Max 18 characters">
        <input matInput maxlength="18" placeholder="Enter Your Comment" formControlName="comment">
        <!--<mat-hint align="end">Max Length !!!</mat-hint>-->
      </mat-form-field>
      <button mat-fab color="warn" type="submit">comment</button>
      </form>
    </div>
  </div>
`
})
export class CommentsDetilsComponent implements OnInit {
  @Input() comments: Comments[];
  @Input() eventid: number;
  // currentComment: Comments[] = [];
  cid: number;
  userid: number;
  admin  = false;
  user  = false;
  org  = false;
  commentForm: FormGroup;
  private sub: Subscription;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private auth: AuthenticationService,
              private commentService: CommentService,
              private eventsService: EventsService) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
    // console.log('comment id is:', this.comments);
    this.getRole();
  }
  getRole() {
    if (this.auth.getRole().includes('ROLE_ADMIN')) {
      return this.admin = true;
    }if (this.auth.getRole().includes('ROLE_USER')) {
      return this.user = true;
    }if (this.auth.getRole().includes('ROLE_ORG')) {
      return this.org = true;
    }
  }

  sendComment() {
    this.eventsService.CommentEvent(this.commentForm , this.eventid, this.auth.getUserId()).subscribe();
    // console.log('The comment is : ', this.eventid);
  }

}
