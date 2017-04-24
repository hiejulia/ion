import { Component } from '@angular/core';

import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {UsersListPage} from '../userslist/userslist';
import { ProfileServiceProvider } from '../../providers/profileService';
import { BlockModel } from '../../providers/block.model';

@Component({
  selector:'profileedit',
  templateUrl: 'profileedit.html'
})
export class ProfileEditPage {

public user: any;
  public profile: any;
  public newBlock: BlockModel;
  private _profileServiceProvider: ProfileServiceProvider;

  constructor(ProfileServiceProvider: ProfileServiceProvider) {
      this._profileServiceProvider = ProfileServiceProvider;
this.user = {};
this.newBlock = new BlockModel();
this._profileServiceProvider.user.subscribe((user) => {
      this.user = user;
    });
    this._profileServiceProvider.profile.subscribe((profile) => {
      this.profile = profile;
    });
    this._profileServiceProvider.getProfile();

  }


  onClick(event) {
    event.preventDefault();
    let profile = this.profile.slice(0);  // clone the profile
    let block = Object.assign({}, this.newBlock); // clone the new block

    profile.push(block);
    this._profileServiceProvider.profile.next(profile);
    this.newBlock = new BlockModel();
  }


}
