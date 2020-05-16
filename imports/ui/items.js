import { Template } from 'meteor/templating';
 
import { Items } from '../api/items.js';
 
import './item.html';

Template.item.events({
  'click .remove-item'() {
    Items.remove(this._id)
  },
  'click .upvote-item'() {
    Items.update(this._id, {
      $set: { upvote: (this.upvote || 0) + 1 },
    });
  },
  'click .downvote-item'() {
    Items.update(this._id, {
      $set: { downvote: (this.downvote || 0) + 1 },
    });
  },
});