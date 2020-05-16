import { Template } from 'meteor/templating';
 
import { Items } from '../api/items.js';
 
import './item.html';
 
Template.item.events({
  'click .remove-item'() {
    Items.remove(this._id)
  },
});